import React, { useState } from 'react';
import './LoginPage.css';
import Logo from "../../assets/Logo.JPG";
import { Navigate, useNavigate } from 'react-router-dom';
import Background from "../../assets/background1.avif"
function Login() {
  const [OTP, setOTP] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleLogin = () => {
   if(OTP==="123456"){
    navigate("/home");
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
          <p style={{fontFamily:"Noto Sans"}}>Enter the 6-Digit OTP received to initiate the journey
          </p>
          
        </div>
        <div className="login-card-right-user">
          <h2 style={{fontFamily:"Noto Sans"}}>Verify OTP</h2>
          <div className="form-group1">
            {/* <label>Email:</label> */}
            <div className="input-with-icon">
            <i className="fas fa-user-alt" />
            <input
             className='textBox-border'
              type="text"
              value={OTP}
              placeholder='Enter 6-digit OTP'
              onChange={(e) => setOTP(e.target.value)}
            />
            </div>
          </div>
          <button onClick={handleLogin}>Verify</button>
          
        </div>
    
    </div>
    </div>
  );
}

export default Login;
