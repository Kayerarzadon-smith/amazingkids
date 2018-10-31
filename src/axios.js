import axios from 'axios';

const instance = axios.create({
    baseURL: "https://amazingkids-ef3aa.firebaseio.com/"
});

export default instance;