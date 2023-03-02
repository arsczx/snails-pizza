import axios from "axios";


const http = axios.create({
    baseURL: 'https://63e4e7558e1ed4ccf6e8bfae.mockapi.io/api/'
})

const Api = {
    getCard: () => http.get('card'),
    createCard: (data) => http.post('card', data),
    deleteCards: (id) => http.delete(`card/${id}`)
}

export default Api;