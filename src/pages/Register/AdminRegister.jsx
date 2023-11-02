import React, { useState } from 'react';
import '../Login/LoginPage.css';
import Logo from "../../assets/Logo.JPG";
import { Navigate, useNavigate } from 'react-router-dom';
import Background from "../../assets/background1.avif"
function AdminRegister() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [mobileNumber,setMobileNumber] = useState('');
  const [role,setRole] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleLogin = () => {
   if(email==="admin"&& password==="admin"){
    navigate("/dashboard");
   }
  };
console.log(role);
  return (
    <div className="main-container" >
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
              value={name}
              placeholder='Name'
              onChange={(e) => setName(e.target.value)}
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
              value={mobileNumber}
              placeholder='Mobile Number'
              onChange={(e) => setMobileNumber(e.target.value)}
            />
          </div>
          {/* className="form-group1" */}

          <div className="form-group1">
              <select
              
                style={{ backgroundColor: "#f7f7f7",borderRadius: 5,padding: 12,width: 205 ,borderLeft: "solid", borderLeftColor: "#e77c75" }}
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="" disabled selected hidden>Role </option>
                <option value="RM">RM</option>
                <option value="ZM">ZM</option>
                <option value="NAT">NAT</option>
              </select>
            </div>

          <button onClick={handleLogin}>Register</button>
          
        </div>
      </div>
    </div>
  );
}

export default  AdminRegister;
    
