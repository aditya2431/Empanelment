import React, { useState } from 'react';
import './LoginPage.css';
import Logo from "../../assets/Logo.JPG";
import { Navigate, useNavigate } from 'react-router-dom';
import Background from "../../assets/background1.avif"
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
          <p style={{fontFamily:"Noto Sans"}}>Login to start your journey with us.<br></br>
          Enter your Email ID to get the OTP</p>
          
        </div>
        <div className="login-card-right-user">
          <h2 style={{fontFamily:"Noto Sans"}}>Login</h2>
          <div className="form-group1">
            {/* <label>Email:</label> */}
            <div className="input-with-icon">
            <i className="fas fa-user-alt" />
            <input
            className='textBox-border'
              type="text"
              value={email}
              placeholder='Email'
              onChange={(e) => setEmail(e.target.value)}
            />
            </div>
          </div>
          <button onClick={handleLogin}>Send OTP</button>
          
        </div>
      </div>
    </div>
  );
}

export default Login;
