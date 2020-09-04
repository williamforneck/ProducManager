import axios from 'axios'

const api = axios.create({
    baseURL: 'https://willi-com.umbler.net/api'
})


export default api
