<template>
    <div v-if="track">
      <h1>{{ track.name }}</h1>
      <p>{{ track.album.name }}</p>
      <p>{{ track.artists.map(artist => artist.name).join(', ') }}</p>
      <audio :src="track.preview_url" controls></audio>
    </div>
    <div v-else>
      Loading...
    </div>
  </template>
  
  <script>
  import SpotifyWebApi from 'spotify-web-api-js';
  
  export default {
    name: 'TrackDetailsComponent',
    props: {
      id: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        spotifyApi: new SpotifyWebApi(),
        track: null,
      };
    },
    created() {
      this.spotifyApi.getTrack(this.id).then(response => {
        this.track = response;
      }).catch(error => {
        console.error(error);
      });
    },
  };
  </script>
  