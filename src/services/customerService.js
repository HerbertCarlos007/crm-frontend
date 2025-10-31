import api from './api'

async function createCustomer(formdata) {
    try {
        const response = await api.post('customer', formdata)
        console.log(response)
        return response
    } catch (error) {
        console.error(error)
    }
}

export default {
    createCustomer
}