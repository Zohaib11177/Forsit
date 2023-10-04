import axios from "axios";
import { baseUrl } from "src/helper";

const user = JSON.parse(localStorage.getItem('user'))

const header = axios.create({
    baseURL: baseUrl,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
});
header.interceptors.request.use(function (config) {
    const token = JSON.parse(localStorage.getItem('Token'));
    return {
        ...config,
        headers: {
            Authorization: token ? `Bearer ${token}` : "",
        },

    };

});
export default header