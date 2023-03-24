<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/"><h1>Spotify App</h1></router-link>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <main>
      <auth-component v-if="!accessToken" />
      <div v-else>
        <router-view />
      </div>
    </main>
  </div>
</template>

<script>
import AuthComponent from './components/AuthComponent.vue';
import { mapState } from 'vuex';

export default {
  components: {
    AuthComponent,
  },
  computed: {
    ...mapState(['accessToken']),
  },
};
</script>
