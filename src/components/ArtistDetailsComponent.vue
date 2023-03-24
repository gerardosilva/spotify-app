<template>
  <div v-if="artist">
    <h1>{{ artist.name }}</h1>
    <img :src="artist.images[0].url" :alt="artist.name" />
    <p>{{ artist.genres.join(', ') }}</p>
    <p>{{ artist.popularity }}</p>
    <h2>Top Tracks</h2>
    <ul>
      <li v-for="track in artist.topTracks" :key="track.id">
        {{ track.name }} - {{ track.album.name }} <audio :src="track.preview_url" controls></audio>
      </li>
    </ul>
  </div>
  <div v-else>
    Loading...
  </div>
</template>

<script>
import SpotifyWebApi from 'spotify-web-api-js';

export default {
  name: 'ArtistDetailsComponent',
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      spotifyApi: new SpotifyWebApi(),
      artist: null,
    };
  },
  created() {
    this.spotifyApi.getArtist(this.id).then(response => {
      this.artist = response;
    }).catch(error => {
      console.error(error);
    });
    this.spotifyApi.getArtistTopTracks(this.id, 'ES').then(response => {
      this.artist.topTracks = response.tracks;
      console.log(response.tracks);
    }).catch(error => {
      console.error(error);
    });
  },
};
</script>
