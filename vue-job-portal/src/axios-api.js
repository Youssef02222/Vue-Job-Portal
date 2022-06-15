import axios from "axios";

const getAPI = axios.get({
    base_url: 'http://127.0.0.1:8000/api/home/7/details',
    timeout: 1000,
})

export {getAPI}