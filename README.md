# My Spotify App

This is a simple web application that uses the Spotify Web API to display the user's top artists and tracks.

## Getting started

1. Install the dependencies
```
npm install
```
2. Create a `.env` file with your SPotify API Credentials
```
VUE_APP_SPOTIFY_CLIENT_ID=your-client-id
VUE_APP_SPOTIFY_CLIENT_SECRET=your-client-secret
```
3. Start the development server
```
npm run serve
```
4. Open the application in your browser at `http://localhost.com:8080`

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Features

This application has the following features:

- Login with Spotify
- Display the user's top artists and tracks

### Technologies used
This application uses the following technologies:

- Vue.js
- Vue Router
- Vuex
- Bootstrap
- Spotify Web API
- dotenv
