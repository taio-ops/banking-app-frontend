import React, { useRef,useState, useEffect} from 'react';
// import Header from '../Components/Header';
// import Footer from '../Components/Footer';
import { faCheck, faTimes, faInfoCircle} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import axiosClient from '../api/axiosClient';
import axios from "axios";
import { Link } from "react-router-dom";
import { useStateContext } from "../Contexts/ContextProvider";


import "./Register.css";


// import Badge from 'react-bootstrap/Badge';

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const PHONE_REGEX = /^0[789][01]\d{8}$|^\+234[789][01]\d{8}$/;
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;




function Register() {

  const userRef = useRef();
  const errRef = useRef();

  const [name, setName] = useState('');
  const [validName, setValidName] = useState(false);
  const [nameFocus, setNameFocus] = useState(false);

  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  const [EmailFocus, setEmailFocus] = useState(false);

  const [password, setPwd] = useState('');
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [phone_number, setPhoneNumber] = useState('');
  const [validPhone, setValidPhone] = useState(false);
  const [phone_numberFocus, setPhoneNumberFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState('');
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  const {setUser, setToken} = useStateContext();

  useEffect(() => {
    userRef.current.focus();
  }, [])

  useEffect(() => {
    setValidName(USER_REGEX.test(name));
}, [name])

useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
}, [email])

useEffect(() => {
    setValidPwd(PWD_REGEX.test(password));
    setValidMatch(password === matchPwd);
}, [password, matchPwd])

useEffect(() => {
    setValidPhone(PHONE_REGEX.test(phone_number));
}, [phone_number])

useEffect(() => {
    setErrMsg('');
}, [name, phone_number, password, matchPwd])

const handleSubmit = async (e) => {
  e.preventDefault();
  // if button enabled with JS hack
  const v1 = USER_REGEX.test(name);
  const v2 = PWD_REGEX.test(password);
  const v3 = PHONE_REGEX.test(phone_number);
  const v4 = EMAIL_REGEX.test(email);
  if (!v1 || !v2 || !v3 || !v4) {
      setErrMsg("Invalid Entry");
      return;
  }
  axiosClient.post("/register",
      JSON.stringify({ name, email, phone_number, password }),
      {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: false
      }
      .then(({data})=>{
        setUser(data.user);
        setToken(data.token);
        // console.log(JSON.stringify(response?.data));
           //console.log(JSON.stringify(response))
           setSuccess(true);
           //clear state and controlled inputs
           setName('');
           setPhoneNumber('');
           setEmail('');
           setPwd('');
           setMatchPwd('');
}).catch(err => {
    const response = err.response;
    if(response && response.status === 422){
        console.log(response.data.errors);
    }
    errRef.current.focus();
  })
)}
//   );
//    // TODO: remove console.logs before deployment
//    console.log(JSON.stringify(response?.data));
//    //console.log(JSON.stringify(response))
//    setSuccess(true);
//    //clear state and controlled inputs
//    setName('');
//    setPhoneNumber('');
//    setEmail('');
//    setPwd('');
//    setMatchPwd('');
//   } catch (err) { 
//     if (!err?.response) {
//       setErrMsg('No Server Response');
//   } else if (err.response?.status === 409) {
//       setErrMsg('Username Taken');
//   } else {
//       setErrMsg('Registration Failed')
//   }
//   errRef.current.focus();

//   }

// }
  return (
    
    <>
    {success ? (
      <section>
          <h1>Success!</h1>
          <p>
              <a href="#">Sign In</a>
          </p>
      </section>
  ) : (
    <section>
      <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
          <label htmlFor='name'> Name:
          <FontAwesomeIcon icon={faCheck} className={validName ? "valid" : "hide"} />
          <FontAwesomeIcon icon={faTimes} className={validName || !name ? "hide" : "invalid"} />
          </label> 
          <input
           type="text"
           id="name"
           ref={userRef}
           autoComplete="off"
           onChange={(e) => setName(e.target.value)}
           value={name}
           required
           aria-invalid={validName ? "false" : "true"}
           aria-describedby="uidnote"
           onFocus={() => setNameFocus(true)}
           onBlur={() => setNameFocus(false)}
          />
           <p id="uidnote" className={nameFocus && name && !validName ? "instructions" : "offscreen"}>
              <FontAwesomeIcon icon={faInfoCircle} />
                  4 to 24 characters.<br />
                  Must begin with a letter.<br />
                  Letters, numbers, underscores, hyphens allowed.
           </p>

          <label htmlFor='email'> Email:
          <FontAwesomeIcon icon={faCheck} className={validEmail ? "valid" : "hide"} />
          <FontAwesomeIcon icon={faTimes} className={validEmail || !email ? "hide" : "invalid"} />
          </label> 
          <input
           type="email"
           id="email"
           ref={userRef}
           autoComplete="off"
           onChange={(e) => setEmail(e.target.value)}
           value={email}
           required
           aria-invalid={validEmail ? "false" : "true"}
           aria-describedby="eidnote"
           onFocus={() => setEmailFocus(true)}
           onBlur={() => setEmailFocus(false)}
          />
           <p id="eidnote" className={EmailFocus && email && !validEmail ? "instructions" : "offscreen"}>
              <FontAwesomeIcon icon={faInfoCircle} />
                  4 to 24 characters.<br />
                  Must begin with a letter.<br />
                  Letters, numbers, underscores, hyphens allowed.<br />
                  with @ symbol then mail domain                 
           </p>

          <label htmlFor='phone_number'> Phone:
          <FontAwesomeIcon icon={faCheck} className={validPhone ? "valid" : "hide"} />
          <FontAwesomeIcon icon={faTimes} className={validPhone || !phone_number ? "hide" : "invalid"} />
          </label> 
          <input
           type="phone"
           id="phone_number"
           ref={userRef}
           autoComplete="off"
           onChange={(e) => setPhoneNumber(e.target.value)}
           value={phone_number}
           required
           aria-invalid={validPhone ? "false" : "true"}
           aria-describedby="pidnote"
           onFocus={() => setPhoneNumberFocus(true)}
           onBlur={() => setPhoneNumberFocus(false)}
          />
           <p id="pidnote" className={phone_numberFocus && phone_number && !validPhone ? "instructions" : "offscreen"}>
              <FontAwesomeIcon icon={faInfoCircle} />
                  11 to 15 digits.<br />
                  Must begin with a number or plus sign.                 
           </p>

           <label htmlFor="password">
                Password:
                <FontAwesomeIcon icon={faCheck} className={validPwd ? "valid" : "hide"} />
                <FontAwesomeIcon icon={faTimes} className={validPwd || !password ? "hide" : "invalid"} />
            </label>
            <input
                type="password"
                id="password"
                onChange={(e) => setPwd(e.target.value)}
                value={password}
                required
                aria-invalid={validPwd ? "false" : "true"}
                aria-describedby="pwdnote"
                onFocus={() => setPwdFocus(true)}
                onBlur={() => setPwdFocus(false)}
            />
            <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                <FontAwesomeIcon icon={faInfoCircle} />
                8 to 24 characters.<br />
                Must include uppercase and lowercase letters, a number and a special character.<br />
                Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
            </p>

            <label htmlFor="confirm_pwd">
              Confirm Password:
              <FontAwesomeIcon icon={faCheck} className={validMatch && matchPwd ? "valid" : "hide"} />
              <FontAwesomeIcon icon={faTimes} className={validMatch || !matchPwd ? "hide" : "invalid"} />
            </label>
                <input
                    type="password"
                    id="confirm_pwd"
                    onChange={(e) => setMatchPwd(e.target.value)}
                    value={matchPwd}
                    required
                    aria-invalid={validMatch ? "false" : "true"}
                    aria-describedby="confirmnote"
                    onFocus={() => setMatchFocus(true)}
                    onBlur={() => setMatchFocus(false)}
                />
              <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                  <FontAwesomeIcon icon={faInfoCircle} />
                  Must match the first password input field.
              </p>

              <button disabled={!validName || !validPhone || !validPwd || !validMatch ? true : false}>Sign Up</button>
            </form>
              <p>
                        Already registered?<br />
                        <span className="line">
                            <Link to="/">Sign In</Link>
                        </span>
                    </p>
         
         
      
    </section>
  )}
  </>
  )
}

export default Register



