import api from './api'

async function getAllNegotiations(companyId) {
    const response = await api.get(`/negotiation/${companyId}`)
    return response.data
}

export default {
    getAllNegotiations
}