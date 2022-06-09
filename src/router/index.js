import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('@/views/AboutView.vue')
        },
        {
            path: '/callback',
            name: 'callback',
            component: () => import('@/views/CallbackView.vue')
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: () => import('@/views/DashboardView.vue')
        }
    ]
})

export default router;