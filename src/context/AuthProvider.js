import { createContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({});

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;
// import { useContext } from "react";
// import { useState } from "react";
// import { createContext } from "react";

// const StateContext = createContext({
//     user: null,
//     token: null,
//     setUser: () => {},
//     setToken: () => {}
// });

// export const ContextProvider = ({children}) => {
//     const [user, setUser] = useState({});
//     const [token, _setToken] = useState(localStorage.getItem('ACCESS_TOKEN'));

//     const setToken = (token) => {
//         _setToken(token)
//         if(token){
//             localStorage.setItem('ACCESS_TOKEN',token);
//         }
//         else{
//             localStorage.removeItem('ACCESS_TOKEN');
//         }
//     }
//     return (
//         <StateContext.Provider value={{
//             user,
//             token,
//             setUser,
//             setToken
//         }}>
//             {children}
//         </StateContext.Provider>
//     )
// }

// export const useStateContext = () => useContext(StateContext)


// // import {createContext, useContext, useState } from "react"
// // import axios from '../api/axios';
// // import {useNavigate} from "react-router-dom";

// // const AuthContext = createContext({
// //     // user: null,
// //     // token: null,
// //     // setUser: () => {},
// //     // setToken: () => {}
// // });

// // export const AuthProvider = ({children}) => {
// //     const [user, setUser] = useState(null);
// //     const [errMsg, setErrMsg] = useState('');
// //     const navigate = useNavigate();

// //     const [token, setToken] = useState(null);
// //     // const csrf = () => axios.get("/sanctum/csrf-cookie");
// //     const getUser = async() => {
// //         const {data} = await axios.get('/user');
// //         setUser(data);
// //     }

// //     const login = async({...data}) => {
// //         // await csrf();
// //         const token = response.data.token;
// //         setToken(token);
// //         localStorage.setItem("token", token);
// //         axios.defaults.headers.common['Authorization'] = "Bearer ${token}";
// //         try {
// //             const response = await axios.post("/login", data );
           
// //             await getUser();
// //             navigate("/");
// //         } catch (e) {
// //             if(e.response.status===400) {
// //                 setErrMsg(e.response.data.errors);
// //             }
// //         }
// //     }
// //     const register = async({...data}) => {
// //         // await csrf();
// //         try {
// //             await axios.post("/register", data);
// //             await getUser();
// //             navigate("/");
// //         } catch (e) {
// //             if(e.response.status===400) {
// //                 setErrMsg(e.response.data.errors);
// //             }
// //         }
// //     }
// //     const logout = () => {
// //         axios.post("/logout").then(() => {
// //             setUser(null);
// //         })
// //     }

// //     return <AuthContext.Provider value= {{ user, errMsg, token, getUser, login, register, logout}}>
// //         {children}
// //     </AuthContext.Provider>
// // }
// // export default function useAuthContext(){
// //      return useContext(AuthContext) ;  
// // }

// // // export const ContextProvider = ({children}) => {
// // //     const [user, setUser] = useState({});
// // //     const [token, _setToken] = useState(localStorage.getItem('ACCESS_TOKEN'));

// // //     const setToken = (token) => {
// // //         _setToken(token)
// // //         if(token){
// // //             localStorage.setItem('ACCESS_TOKEN',token);
// // //         }
// // //         else{
// // //             localStorage.removeItem('ACCESS_TOKEN');
// // //         }
// // //     }
// // //     return (
// // //         <StateContext.Provider value={{
// // //             user,
// // //             token,
// // //             setUser,
// // //             setToken
// // //         }}>
// // //             {children}
// // //         </StateContext.Provider>
// // //     )
// // // }

// // // export const useStateContext = () => useContext(StateContext)