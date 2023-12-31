// TableComponent.js
import React from 'react';
import './TableComponent.css'; // Import the CSS file
import { Link } from "react-router-dom";
import MiniDrawer from '../components/MiniDrawer';
import Logo from "../assets/Logo.JPG";
const Dashboard = () => {
  return (
    <>
    <MiniDrawer/>
    <img
        className="card-img"
        src={Logo}
        alt="Card"
        />
    <h1 style={{fontSize:20,marginLeft:570,marginBottom:20,fontFamily:"Noto Sans",fontWeight:"bold"}}>DashBoard For NAT</h1>
    <div className="table-container">
      <table className="custom-table">
        <thead>
          <tr>
            <th>State</th>
            <th>Count</th>
            <th>Total Pendency with NAT for QC</th>
            <th>TAT</th>
            <th>Request Creation Date</th>
            
          </tr>
        </thead>
        <tbody>
          {/* <tr>
            <td>Total request raised</td>
            <td><Link to={"/home"}>10</Link></td>
          </tr>
          <tr>
            <td>Activity 2</td>
            <td>15</td>
          </tr>
          <tr>
            <td>Activity 3</td>
            <td>8</td>
          </tr>
          <tr>
            <td>Activity 4</td>
            <td>20</td>
          </tr> */}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default Dashboard;
