import ItemsView2 from '../views/ItemsView2.vue'

const routes = [
    {
        path: '/',
        component: ItemsView2
    },
    {
        path: '/items/:id',
        component: ItemsView2
    }
]

export default routes