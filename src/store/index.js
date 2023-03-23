import { createStore } from 'vuex';

const store = createStore({
  state: {
    accessToken: localStorage.getItem('accessToken') || null,
  },
  mutations: {
    setAccessToken(state, token) {
      state.accessToken = token;
    },
  },
});

export default store;
