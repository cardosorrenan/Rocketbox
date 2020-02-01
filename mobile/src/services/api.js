import axios from 'axios';

const api = axios.create({
    baseURL: 'https://omnistack-bcknd.herokuapp.com/'
});

export default api;