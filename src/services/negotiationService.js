import api from './api'

async function getAllNegotiations(companyId) {
    const response = await api.get(`/negotiation/${companyId}`)
    return response.data
}

async function createNegotiation(formdata) {
    try {
        const response = await api.post('negotiation', formdata)
        return response
    } catch (error) {
        console.error(error)
    }
}

export default {
    getAllNegotiations, createNegotiation
}