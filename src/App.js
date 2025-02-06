import React from 'react';
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Blogdetails from "./Pages/Blogdetails";
import Bloglists from "./Pages/Bloglists";
import Career from "./Pages/Career";
import Contact from "./Pages/Contact";
import Careerdetails from "./Pages/Careerdetails";
import Pricing from "./Pages/Pricing";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
   <>
     <BrowserRouter>
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} />
         <Route path="/services" element={<Services />} />
         <Route path="/bloglists" element={<Bloglists />} />
         <Route path="/blogdetails" element={<Blogdetails />} />
         <Route path="/contact" element={<Contact />} />
         <Route path="/career" element={<Career />} />
         <Route path="/careerdetails" element={<Careerdetails />} />
         <Route path="/pricing" element={<Pricing />} />
         <Route path="/register" element={<Register />} />
         <Route path="/login" element={<Login />} />
       </Routes>
     </BrowserRouter>
   </>
  );
}

export default App;
