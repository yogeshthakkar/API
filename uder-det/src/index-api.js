import axios from 'axios';

const api = axios.create({
    baseURL:'http://localhost:27017/'
})


export const insertUser = payload =>api.post('/insert',payload);
export const getUser = () => api.get('/search');

const apis = {
    insertUser,
    getUser
}

export default apis;