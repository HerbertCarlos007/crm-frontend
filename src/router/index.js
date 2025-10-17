import {createRouter, createWebHistory} from 'vue-router'
import Negotiations from '../views/Negotiations.vue'
import Company from '../views/Company.vue'
import Login from '../views/Login.vue'
import Users from '../views/Users.vue'
import UserFormComponent from '../components/UserFormComponent.vue'

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

    {
        path: '/users', 
        name: 'Users',
        component: Users,
    },

    {
        path: '/form-users', 
        name: 'Users Form',
        component: UserFormComponent,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router