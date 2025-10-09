import {createRouter, createWebHistory} from 'vue-router'
import Negotiations from '../views/Negotiations.vue'
import Company from '../views/Company.vue'
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
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router