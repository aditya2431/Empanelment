import React, { useState } from 'react';
import '../Login/LoginPage.css';
import Logo from "../../assets/Logo.JPG";
import { Navigate, useNavigate } from 'react-router-dom';
import Background from "../../assets/background1.avif"
import { TextField,Link } from "@mui/material";
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleLogin = () => {
   if(email==="admin"&& password==="admin"){
    navigate("/dashboard");
   }
  };

  return (
    <div className="main-container">
     <img
        className="login-img"
        src={Logo}
        alt="Card"
        />
       <img className='login-container' src={Background} alt="xyz"/>

      <div className="login-card">
        <div className="login-card-left">
        <div className="icon">
            {/* You can add suitable icons here */}
            {/* <i className="fa fa-user"></i> */}
          </div>
          <h1 style={{fontFamily:"Noto Sans"}}>Welcome to Aditya Birla Capital Family</h1>
          <p style={{fontFamily:"Noto Sans"}}>Register To initiate the journey</p>
          
        </div>
        <div className="login-card-right-register">
          <h2 style={{fontFamily:"Noto Sans"}}>Register</h2>
          <div className="form-group1">
            {/* <label>Email:</label> */}
            <input
             className='textBox-border'
              type="text"
              value={email}
              placeholder='Provide Name'
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group1">
            {/* <label>Email:</label> */}
            <input
             className='textBox-border'
              type="text"
              value={email}
              placeholder='Email'
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group1">
            {/* <label>Email:</label> */}
            <input
            className='textBox-border'
              type="text"
              value={email}
              placeholder='Mobile Number'
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group1">
            {/* <label>Email:</label> */}
            <input
             className='textBox-border'
              type="text"
              value={email}
              placeholder='Address'
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group1">
            {/* <label>Password:</label> */}
            <input
            placeholder='Pin Code'
             className='textBox-border'
              type="integer"
              
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button onClick={handleLogin}>Send Link</button>
          
        <Link href="/verifyOtp">Verify Otp</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
