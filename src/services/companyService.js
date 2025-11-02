import api from './api'

async function getAllCompanies() {
    const response = await api.get('/company')
    return response.data
}

export default {
    getAllCompanies
}