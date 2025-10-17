import {createRouter, createWebHistory} from 'vue-router'
import Negotiations from '../views/Negotiations.vue'
import Company from '../views/Company.vue'
import Login from '../views/Login.vue'
const routes = [
    {
        path: '/', 
        name: 'Negotiations',
        component: Negotiations,
    },

    {
        path: '/company', 
        name: 'Company',
        component: Company,
    },

    {
        path: '/login', 
        name: 'Login',
        component: Login,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router