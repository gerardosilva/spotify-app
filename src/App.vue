<template>
  <div class="container">
    <header class="my-4">
      <h1>My Spotify App</h1>
    </header>
    <main>
      <auth-component v-if="!$store.state.accessToken" />
      <div v-else>
        <top-component />
      </div>
    </main>
  </div>
</template>

<script>
import AuthComponent from './components/AuthComponent.vue';
import TopComponent from './components/TopComponent.vue';
import { mapState } from 'vuex';

export default {
  components: {
    AuthComponent,
    TopComponent,
  },
  computed: {
    ...mapState(['accessToken']),
  },
};
</script>
