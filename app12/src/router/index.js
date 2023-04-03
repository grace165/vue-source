import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ItemsView from '../views/ItemsView.vue'
import ItemsView2 from '../views/ItemsView2.vue'
import NotFoundView from '../views/NotFoundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/items',
      name: 'items',
      component: ItemsView
    },

    {
      path: '/items/:id',
      name: 'itemsid',
      component: ItemsView
    },

    {
      path: '/invalid',
      name: 'invalid',
      component: NotFoundView
    }
  ]
})

export default router
