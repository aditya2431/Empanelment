import React, { useState } from 'react';
import './LoginPage.css';
import Logo from "../assets/Logo.JPG";
import { Navigate, useNavigate } from 'react-router-dom';
import { TextField } from "@mui/material";
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
    <>
     <img
        className="login-img"
        src={Logo}
        alt="Card"
        />
    <div className="login-container">
      <div className="login-card">
        <div className="login-card-left">
        <div className="icon">
            {/* You can add suitable icons here */}
            {/* <i className="fa fa-user"></i> */}
          </div>
          <h1 >Welcome to Aditya Birla Capital Family</h1>
          <p >You are a few steps away. Login to start your journey with us.</p>
          
        </div>
        <div className="login-card-right">
          <h2 >Login</h2>
          <div className="form-group1">
            {/* <label>Email:</label> */}
            <input
            style={{borderLeft:"solid",borderLeftColor:"blue"}}
              type="text"
              value={email}
              placeholder='Email'
              onChange={(e) => setEmail(e.target.value)}
            />
             {/* <TextField
                        label = "Password"
                        type='password'
                        variant="outlined"
                        sx={{width:210,height:40}}
                        size="xsmall"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        /> */}
          </div>
          <div className="form-group1">
            {/* <label>Password:</label> */}
            <input
            placeholder='Password'
            style={{borderLeft:"solid",borderLeftColor:"blue"}}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button onClick={handleLogin}>Login</button>
          
        </div>
      </div>
    </div>
    </>
  );
}

export default Login;
