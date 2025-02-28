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
import Preboard from "./Pages/Preboard";
import Onboard from "./Pages/Onboard";
import Layout from './Components/Layout';
import Missing from './Pages/Missing';
import Users from './Pages/Users';
// import Unauthorized from './Pages/Unauthorized';
import Linkpage from './Pages/Linkpage';
import { Routes, Route} from 'react-router-dom';
import RequireAuth from './Components/RequireAuth';


function App() {
  return (
   <>
     {/* <BrowserRouter> */}
       <Routes>
          <Route path="/" element={<Layout />}>
            {/* public routes */}
            <Route path="/register" element={<Register />} />        
            <Route path="/login" element={<Login />} /> 
            {/* <Route path="/unauthorized" element={<Unauthorized />} />  */}
            <Route path="/linkpage" element={<Linkpage />} /> 
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/bloglists" element={<Bloglists />} />
            <Route path="/blogdetails" element={<Blogdetails />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/career" element={<Career />} />
            <Route path="/careerdetails" element={<Careerdetails />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/users" element={<Users />} />

             {/* we want to protect this route */}
            {/* <Route element = {<RequireAuth />}> */}
              <Route path="/" element={<Home />} />
              {/* <Route path="/dashboard" element={<Dashboard />} /> */}
              <Route path="/onboard" element={<Onboard />} />
              <Route path="/preboard" element={<Preboard />} />
             
            {/* </Route> */}

             {/* catch all */}
             <Route path="*" element={<Missing />} />
           
           
          </Route>           
       </Routes>
     {/* </BrowserRouter> */}
   </>
  );
}

export default App;
