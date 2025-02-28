import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import {Link} from 'react-router-dom';

function Preboard() {
  return (
    <>
     <Header />
        <h2> Registration Successful</h2>

        <p>Thank you for registering with us. Your account has been created and you can now access your banking account.</p>
        {/* <p>Please check your email for a confirmation link to activate your account.</p> */}
        {/* <p>Once activated, you can login to your account using your email and password.</p> */}
        <p>Click <button as={Link} to="/onboard">Here</button> to validate pin for transactions</p>
      <Footer />
    </>
   
  )
}

export default Preboard
