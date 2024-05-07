import axios from "axios";

const api = axios.create({
    baseURL: 'https://cataas.com/cat'
    
})

export default api