<template>
    <div>
        <h2 class="my-4">Top 10 Artists</h2>
        <div class="row">
        <router-link class="col-md-4 mb-4" v-for="artist in topArtists" :key="artist.id" :to="{ name: 'artist-details', params: { id: artist.id } }">
            <div class="card">
            <img :src="artist.images[0].url" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">{{ artist.name }}</h5>
                <p class="card-text">{{ artist.genres.join(', ') }}</p>
            </div>
            </div>
        </router-link>
        </div>

        <h2 class="my-4">Top 10 Songs</h2>
        <ul>
          <li v-for="song in topSongs" :key="song.id">
            <router-link :to="{ name: 'track-details', params: { id: song.id } }">{{ song.name }} -  {{ song.artists[0].name }}</router-link>
            <audio :src="song.preview_url" controls></audio>
          </li>  
        </ul>
    </div>
</template>
  
<script>
  import SpotifyWebApi from 'spotify-web-api-js';
  import { mapState } from 'vuex';
  
  export default {
    data() {
      return {
        spotifyApi: new SpotifyWebApi(),
        topArtists: [],
        topSongs: [],
      };
    },
    computed: {
      ...mapState(['accessToken']),
    },
    async mounted() {
      this.spotifyApi.setAccessToken(this.accessToken);
      const data = await this.spotifyApi.getMyTopArtists({ limit: 10, time_range: 'long_term' });
      this.topArtists = data.items;
      const tracks = await this.spotifyApi.getMyTopTracks({ limit: 10, time_range: 'long_term' });
      this.topSongs = tracks.items;
    },
  };
</script>
  