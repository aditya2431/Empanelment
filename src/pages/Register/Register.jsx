import React, { useState } from 'react';
import '../Login/LoginPage.css';
import Logo from "../../assets/Logo.JPG";
import { Navigate, useNavigate } from 'react-router-dom';
import Background from "../../assets/background1.avif"
import { TextField,Link } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import { setWorkflowObject } from "../../redux/actions";
import axios from "axios";
function Login() {
  const [apiResponse,setApiResponse] = useState('');
  const [providerName,setProviderName] = useState('');
  const [mobileNumber,setMobileNumber] = useState('');
  const [address,setAddress]  = useState('');
  const [pincode,setPincode] = useState('');
  const [email, setEmail] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  let workflowNumber = apiResponse.workflowNo;
  const sendLinkObject ={
    "providerName":providerName,
    "email":email,
    "mobileNumber":mobileNumber,
    "address":address,
    "pincode":pincode,
    "workflowNo":workflowNumber
    
  }
 

  const handleSendLink = async() => {
    axios
    .post(
      "http://localhost:8181//api/sendLink/saveSendLink",
      sendLinkObject,
      {
        credentials: "include",
      }
    )
    .then((response) => {
      if (response.status === 200) {
        setApiResponse(response.data);
        setIsProcessing(false);
        toast.dismiss();
        if (apiResponse) {
          toast.success("Details submitted successfully.");
        }
      } else {
        alert("Error scenario");
        setIsProcessing(false);
        toast.dismiss();
        toast.error("Something went wrong");
      }
    })
    .catch((error) => {
      console.log(error);
      alert(error.message, "Please try again with CORS free browser");
      setIsProcessing(false);
      toast.dismiss();
      toast.error("Something went wrong");
    });
    dispatch(setWorkflowObject(sendLinkObject));
    // navigate("/home");
  };


console.log(sendLinkObject);
const dispatch = useDispatch();
console.log(apiResponse.workflowNo);

  return (
    <>
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
              value={providerName}
              placeholder='Provider Name'
              onChange={(e) => setProviderName(e.target.value)}
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
          <div className="form-group1">
            {/* <label>Email:</label> */}
            <input
             className='textBox-border'
              type="text"
              value={address}
              placeholder='Address'
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="form-group1">
            {/* <label>Password:</label> */}
            <input
            placeholder='Pin Code'
             className='textBox-border'
              type="integer"
              
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
            />
          </div>
          <button onClick={handleSendLink}>Send Link</button>
          
        <Link href="/verifyOtp">Verify Otp</Link>
        </div>
      </div>
    </div>
    <Toaster/>
    </>
  );
}

export default Login;
