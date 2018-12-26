import axios from 'axios';


//intance axios default configure
const instance = axios.create({
    baseURL: 'https://random-quotes-f6db2.firebaseio.com/'
});

export default instance;