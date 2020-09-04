import axios from 'axios'

const api = axios.create({
    baseURL: 'willi-com.umbler.net/api'
})

export default api