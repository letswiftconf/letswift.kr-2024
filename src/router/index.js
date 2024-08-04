import { createRouter, createWebHistory } from "vue-router"
import Home from '../views/Home.vue'

const routes = [
    { 
        path: '/',
        component: Home
    },
    {
        path: '/CodeOfConduct',
        component: () => import('../views/CodeOfConduct.vue')
    }
]

const router = createRouter({
    history: createWebHistory('/2024/'),
    routes,
})

export default router;