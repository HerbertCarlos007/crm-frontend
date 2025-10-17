import api from './api'

async function login(formdata) {
    try {
        const response = await api.post('login', formdata)
        console.log(response)
        return response
    } catch (error) {
        console.error(error)
    }
}

export default {
    login
}