import axios from 'axios'

axios.defaults.baseURL='http://127.0.0.1:8000/';
if(localStorage.getItem('token')){
    axios.defaults.headers.common['Authorization']= 'token '+localStorage.getItem('token')
}
