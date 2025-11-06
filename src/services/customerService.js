import api from './api'

async function createCustomer(formdata) {
    try {
        const response = await api.post('customer', formdata)
        return response
    } catch (error) {
        console.error(error)
    }
}

async function getCustomer(companyId) {
    try {
        const response = await api.get(`customer/${companyId}`)
        return response.data
    } catch (error) {
        console.error(error)
    }
}


export default {
    createCustomer, getCustomer
}