import axios from 'axios'

const api = axios.create({
    baseURL: 'http://willi-com.umbler.net/api'
})


export default api