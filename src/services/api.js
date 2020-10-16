import axios from 'axios'

const api = axios.create({
    baseURL: 'https://rocketseat-nodes.herokuapp.com/api'
})

export default api
