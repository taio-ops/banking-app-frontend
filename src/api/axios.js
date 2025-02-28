import axios from 'axios';
const BASE_URL = 'http://localhost:8000/api/auth';

export default axios.create({
    baseURL: BASE_URL
});

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
});
// // import axios from "axios";

// export default axios.create({
//     baseURL: "http://127.0.0.1:8000/api/auth",
//     withCredentials: true,
//     headers: {
//         'Accept': 'application/json'
//     },
// });

// // axiosClient.interceptors.request.use((config) => {
// //     const token = localStorage.getItem("ACCESS_TOKEN");
// //     config.headers.Authorization = `Bearer ${token}`;
// //     return config;
// // });

// // axiosClient.interceptors.response.use(
// //     (response) => {
// //         return response;
// //     },
// //     (error) => {
// //         try {
// //             const { response } = error;
// //             if (response.status === 401) {
// //                 localStorage.removeItem("ACCESS_TOKEN");
// //             }
// //         } catch (err) {
// //             console.error(err);
// //         }
// //         throw error;
// //     }
// // );

// // export default axiosClient;