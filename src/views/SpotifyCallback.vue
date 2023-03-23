<template>
    <div>
      <h1>Spotify Callback Page</h1>
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
        accessToken: null,
        refreshToken: null,
      };
    },
    computed: {
      ...mapState(['accessToken']),
    },
    async mounted() {
      const params = new URLSearchParams(window.location.search);
      const code = params.get('code');
      if (code) {
        await this.getToken(code);
        this.$router.push('/');
      }
    },
    methods: {
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
        this.accessToken = data.access_token;
        this.refreshToken = data.refresh_token;
        this.spotifyApi.setAccessToken(this.accessToken);
        this.setAccessToken(this.accessToken);
        },
    },
  };
  </script>
  