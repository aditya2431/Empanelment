// TableComponent.js
import React, {useState}from 'react';
import './TableComponent.css'; // Import the CSS file
import { Link } from "react-router-dom";
import MiniDrawer from '../components/MiniDrawer';
import Logo from "../assets/Logo.JPG";
import Form from "react-bootstrap/Form";
const Dashboard = () => {

  const [search, setSearch] = useState("");
  return (
    

    <>
    <MiniDrawer/>
    <img
        className="card-img"
        src={Logo}
        alt="Card"
        />
    {/* <h1 style={{fontSize:20,marginLeft:570,marginBottom:20,fontFamily:"Noto Sans",fontWeight:"bold"}}>DashBoard For RM</h1> */}
    <div className="table-container">
    <div >

          <div className="formCR">
            <Form>
              <Form.Group class="my-3">
              
                <Form.Control
                  class="px-3"
                  type="text"
                  placeholder="Search using workflow Number"
                  onChange={(e) => setSearch(e.target.value)}
                />
              </Form.Group>
            </Form>
            <br></br>
          </div>
          <div className="text-center">
           
      <table className="custom-table">
        <thead>
          <tr>
            <th>WorkFlow Number</th>
            <th>Submitted By</th>
            <th>Submitted on</th>
            <th>Status</th>
          </tr>
        </thead>
       
      </table>
    </div>
    </div>
    </div>
    </>
  );
};

export default Dashboard;
