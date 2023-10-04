
// import axios from 'axios';

// const API_URL = process.env.REACT_APP_URL; // Your API base URL

// // Create an instance of axios with default configuration
// const axiosInstance = axios.create({
//   baseURL: API_URL,
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });

// // Add an interceptor to set the Authorization header for each request
// axiosInstance.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem('Token'); // Get the token from localStorage
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     console.log("eeeeeeee",error)
//     return Promise.reject(error);
//   }
// );



// export default axiosInstance;
import axios from 'axios';

const API_URL = process.env.REACT_APP_URL; // Your API base URL

// Create an instance of axios with default configuration
const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add an interceptor to set the Authorization header for each request
axiosInstance.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem('Token'); // Get the token from localStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  async (error) => {
    console.log("Error in request interceptor:", error);
    return Promise.reject(error);
  }
);

// Add an interceptor to handle response errors
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    // Handle the response error here
    console.error("Error in response interceptor:", error);
    if(error?.response?.status == 401 && localStorage.getItem("Token")){
                    // console.log("echala")
                    localStorage.removeItem('RefreshToken');
                    localStorage.removeItem('Token');
                    localStorage.removeItem('Id');
                    window.location.reload()
                 }

    // You can throw the error again if you want to propagate it to the calling code
    // throw error;
    
    // Or return a custom error response if needed
    return Promise.reject(error);
  }
);

export default axiosInstance;





