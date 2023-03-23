import { createRouter, createWebHistory } from 'vue-router'
import SpotifyCallback from '../views/SpotifyCallback.vue'

const routes = [
  {
    path: '/callback',
    name: 'SpotifyCallback',
    component: SpotifyCallback
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
