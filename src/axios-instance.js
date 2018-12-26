import axios from 'axios';


//intance axios default configure
const instance = axios.create({
    baseURL: 'https://suhayb-react-burger.firebaseio.com/'
});

export default instance;