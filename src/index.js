import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import reduxStore from "./redux/store"
// import { Home, AddNewRecord, ShowDetails, ContactPage, Login, Register, PageNotFound, ViewDetails,} from "./pages";
import Login from "./pages/adminlogin";
import Dashboard from "./pages/Dashboard";
// import Home from "./pages/Home";
import App from './App';
import Register from './pages/Register';
import VerifyOtp from './pages/VerifyOtp';
import UserLogin from './pages/UserLogin';
import NatDashboard from './pages/NatDashboard';
import AuditTrail from './pages/AuditTrail';
import AdminRegister from './pages/AdminRegister';
import SubDashboard from './pages/Sub-Dashboard';
import Profile from './pages/Profile';
import './index.css'

const store=reduxStore();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
      {/* <Route path="/home" element={<Home />} /> */}
      <Route path="/dashboard" element={<Dashboard/>} />
       <Route path="/home" element={<App/>} />
       <Route path="/register" element={<Register/>} />
       <Route path="/" element={<Login/>} />
       <Route path="/verifyOtp" element={<VerifyOtp/>} />
       <Route path="/userLogin" element={<UserLogin/>} />
       <Route path="/natDashboard" element={<NatDashboard/>} />
       <Route path="/audit" element={<AuditTrail/>} />
       <Route path="/adminRegister" element={<AdminRegister/>} />
       <Route path="/subDashboard" element={<SubDashboard/>} />
       <Route path="/profile" element={<Profile/>} />
       {/* <Route path="/h" element = {<Home/>}/> */}
        {/* <Route path="/addNewRecord" element={<AddNewRecord />} />
        <Route path="/showDetails" element={<ShowDetails />} />
        <Route path="/viewDetails" element={<ViewDetails />} />
        <Route path="/contact" element={<ContactPage />} />
        
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/enterCR" element={<Entercr/>} />
        <Route path="/viewCR" element = {<Viewcr/>}/>
        <Route path="/update/:id" element = {<UpdateDetails/>}/>
        <Route path="/updatePassword" element = {<UpdatePassword/>}/>
        <Route path="*" element={<PageNotFound />} /> */}
      </Routes>
    </Provider>
  </BrowserRouter>
);