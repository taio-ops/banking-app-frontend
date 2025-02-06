import React from 'react';
import { useState } from'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { useNavigate } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [msg, setMsg] = useState();
  const navigate = useNavigate();

  async function login(){
      let userInfo = {email, password}
      let result = await fetch("http://localhost:8000/api/auth/login", {
          method: 'POST',
          headers: {
              "Content-Type": 'application/json',
              "Accept": 'application/json'
          }, 
          body: JSON.stringify(userInfo)
      }) 

      result = await result.json();
      if(result['error']) {
          setMsg(result['error'])
      } else {
          localStorage.setItem('userInfo', JSON.stringify(result));
          setMsg("Login Successful");
          navigate('/career');
          console.log(result);
      }
  }
  return (
    <>
    <Header/>
    <div className="mil-blog-list mip-p-0-160">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xl-5">
                  <form>
                    <h1 className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</h1>
                    <Badge bg="secondary">{msg}</Badge>
                            <input class="mil-input mil-up mil-mb-15" type="email" placeholder="Your e-mail"  name="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                            <input class="mil-input mil-up mil-mb-15" type="password" placeholder="Password" name='password' value={password} onChange={(e) => setPassword(e.target.value)} required/>
                          
                            
                            <button onClick={login}>Login</button>
                       
                    </form>   
                </div>
            </div>
        </div>      
    </div>
    <Footer/>
    </>
  )
}
