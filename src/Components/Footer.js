import React from 'react';

import "./Footer.css"


function Footer() {
  return (
    <>
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>        
    </nav>
    <div className='Footer'>
        <div className='container'>
            <div className='row'>
                <div className="col-md-6 col-lg-5 col-12 ft-1">
                <img src="/img/logo-2.png" width="90px" height="33px" alt="brandimg" />
                    <h3><span>PLAX </span> FINANCE & FINTECH</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet mattis vel, elementum in dui.</p>
                    <div className='footer-icons'>
                        <i class="fa-brands fa-facebook"></i>
                        <i class="fa-solid fa-x"></i>
                        <i class="fa-brands fa-instagram"></i>
                        <i class="fa-brands fa-linkedin-in"></i>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3 col-12 ft-2">
                    <h5>Quick Links</h5>
                    <ul>
                        <li className='nav-item'>
                            <a className='nav-link' href='/'>Services</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href='/'>About</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href='/'>Contact Us</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href='/'>Blogs</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href='/'>Contact Us</a>
                        </li>
                    </ul>
                </div>
                <div className="col-md-6 col-lg-4 col-12 ft-3">
                <h5>Contact Info</h5>
                <p><i class="fa-solid fa-phone-volume"></i>01-444-888</p>
                <p><i class="fa-regular fa-envelope"></i>support@plax.com</p>
                <p><i class="fa-regular fa-paper-plane"></i>New York, USA</p>
                </div> 
            </div>

        </div>
    </div>
    <hr className='col-11.5 mx-4'/>
    <div className='Last-footer'>
        <p>© 2024 Plax Finance & Fintech Design</p>
    </div>
    </>
  );
  
}

export default Footer
