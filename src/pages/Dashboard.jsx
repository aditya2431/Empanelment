// TableComponent.js
import React from 'react';
import './TableComponent.css'; // Import the CSS file
import { Link } from "react-router-dom";
import MiniDrawer from '../components/MiniDrawer';
import Logo from "../assets/Logo.JPG";
import BackgroundImage from "../assets/background1.avif"
import "./Dashboard.css"
const Dashboard = () => {
  return (
    <>
    <img
        className="card-img"
        src={Logo}
        alt="Card"
        style={{position:'absolute'}}
      />
      <MiniDrawer />  
      <div className="main-container">  
        <img className='background-container' src={BackgroundImage} alt="xyz" />
        <div style={{
          position: 'absolute',
          width: '100%',
          top:0
        }}>
          <h1 style={{ fontSize: 20, marginBottom: 20, fontWeight: "bold",display:'flex',justifyContent:'center' }}>DashBoard For RM</h1>
          <div>
            <table className="custom-table">
              <thead>
                <tr>
                  <th>Activity Name</th>
                  <th>Count</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Total request raised</td>
                  <td><Link to={"/subDashboard"}>10</Link></td>
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
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
