// import { useState, useEffect } from "react";
// // import useAxiosPrivate from "../hooks/useAxiosPrivate";
// import axios from "../api/axios";
// import useRefreshToken from "../hooks/useRefreshToken";
// import { useNavigate, useLocation } from "react-router-dom";


// const Users = () => {
//     const [users, setUsers] = useState();
//     const refresh = useRefreshToken();
//     // const axiosPrivate = useAxiosPrivate();

//     const navigate = useNavigate();
//     const location = useLocation();

//     useEffect(() => {
//       let isMounted = true;
//       const controller = new AbortController();

//       const getUsers = async  () => {
//         try {
//           // const response = await axiosPrivate.get("/user", {
//           const response = await axios.get("/user", {
//             signal: controller.signal
//           });
//           console.log(response.data);
//           isMounted && setUsers(response.data)
//         } catch(err) {
//             console.error();
//             navigate('/login', { state: { from: location }, replace: true });
//         } 

//       }
      
//       getUsers();

//       return () => {
//         isMounted = false;
//         controller.abort();
//       }

//       // Clean up function to prevent memory leaks
//     }, [])

//   return (
//     <article>
//         <h2>Users List</h2>
//        <h2> {user?.name
//           // ?(
//           //   <ul>
//           //     {user.map((user, i) => <li key={i}>{user?.phone_number}</li> )}
//           //   </ul>
//           // ) : <p>No users to display</p>
//         }</h2>
//         <button onClick={()=> refresh()}>Refresh</button>
//         <br />
      
//     </article>
//   )
// }

// export default Users;
import React from 'react'

const Users = () => {
    let loginUser  = JSON.parse(localStorage.getItem("user"));
  return (
    <div>
        <h2>Dashboard</h2>
    </div>
  )
}

export default Users
