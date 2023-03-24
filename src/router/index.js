import { createRouter, createWebHistory } from 'vue-router'
import HomeComponent from '../views/HomeComponent.vue'
import SpotifyCallback from '../views/SpotifyCallback.vue'
import ArtistDetailsComponent from '../components/ArtistDetailsComponent.vue'

const routes = [
  {
    path: '/',
    name: 'HomeComponent',
    component: HomeComponent
  },
  {
    path: '/callback',
    name: 'SpotifyCallback',
    component: SpotifyCallback
  },
  {
    path: '/artists/:id',
    name: 'artist-details',
    component: ArtistDetailsComponent,
    props: true,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
