import { createRouter, createWebHistory } from 'vue-router'
import Component1 from '@/views/Component1.vue'
import Component2 from '@/views/Component2.vue'
import Component3 from '@/views/Component3.vue'
import Component4 from '@/views/Component4.vue'
import Component5 from '@/views/Component5.vue'
import Component6 from '@/views/Component6.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      components: {
        component1: Component1,
        component2: Component2,
        component3: Component3,
        component4: Component4,
        component5: Component5,
        component6: Component6,
      }
    },
    //props: true
  ]
})

export default router
