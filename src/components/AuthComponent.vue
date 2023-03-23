<template>
    <div>
      <button v-if="!accessToken" @click="login">Log in with Spotify</button>
    </div>
  </template>
  
  <script>
  import SpotifyWebApi from 'spotify-web-api-js';
  import { mapState } from 'vuex';
  const clientId = process.env.VUE_APP_SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.VUE_APP_SPOTIFY_CLIENT_SECRET;
  
  export default {
    data() {
      return {
        spotifyApi: new SpotifyWebApi(),
        clientId: clientId,
        clientSecret: clientSecret,
        redirectUri: 'http://localhost:8080/callback',
        scope: 'user-top-read',
      };
    },
    computed: {
      ...mapState(['accessToken']),
    },
    methods: {
      async login() {
        const url = `https://accounts.spotify.com/authorize?client_id=${this.clientId}&response_type=code&redirect_uri=${this.redirectUri}&scope=${this.scope}`;
        window.location.href = url;
      },
      async getToken(code) {
        const response = await fetch(`https://accounts.spotify.com/api/token`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: `Basic ${btoa(`${this.clientId}:${this.clientSecret}`)}`,
          },
          body: `grant_type=authorization_code&code=${code}&redirect_uri=${this.redirectUri}`,
        });
        const data = await response.json();
        this.$store.commit('setAccessToken', data.access_token);
      },
    },
    async mounted() {
      const params = new URLSearchParams(window.location.search);
      const code = params.get('code');
      if (code) {
        await this.getToken(code);
      }
    },
  };
  </script>
  