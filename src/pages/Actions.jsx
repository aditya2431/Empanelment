import React from 'react'
import "./Home1.css";
import MiniDrawer from "../components/MiniDrawer";
import { useDispatch, useSelector} from "react-redux";
import{ useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Multiselect from 'multiselect-react-dropdown';
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

function Actions(props) {
    const [generalInformation,setgeneralInfromation] = useState({});
    const [status,setStatus] = useState("");
    const dispatch = useDispatch();
    const flag = "";
    console.log(flag);
    const Information = useSelector((state) => state?.generalInformation);
  return (
    <>
    <MiniDrawer />
  
    <div class="row  mx-9" >
        <div class="col-md-9 justify-content-center" className='general'>
          <div class="card card-custom pb-4">
            <div class="card-body mt-0 mx-5">
              <div class="text-center mb-3 pb-2 mt-3">
                <h4>Actions</h4>
              </div>
              <div>
             
                <select
                 class="dropdown form my-300"
                 className="dropdown"
                  value={status}
                //   required
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option value=""></option>
                  <option value="Approve" >Approve</option>
                  <option value="Reject">Reject</option>
                  <option value="Query" >Query</option>
                </select>
              </div>
{console.log(status)}
            
                {(status === "Reject") &&
              <div class="form  my-3">
                  <label for="Password"></label>
                  <textarea
                    rows={9}
                    class="form-control"
                    id="Password"
                    placeholder="Add Reason for rejection"
                  />
                </div>
}
{(status === "Query") &&
              <div class="form  my-3">
               

  <Multiselect
  displayValue="key"
  groupBy="issue"
  onKeyPressFn={function noRefCheck(){}}
  onRemove={function noRefCheck(){}}
  onSearch={function noRefCheck(){}}
  onSelect={function noRefCheck(){}}
  options={[
    {
      issue: 'Address Related',
      key: 'Mismatch in Address Details Obtained from Portal and Details in the mandatory documents received'
    },
    {
      issue: 'Address Related',
      key: 'Address in wrong Format'
    },
    {
      issue: 'RC Related',
      key: 'Wrong RC document '
    },
    {
      issue: 'RC Related',
      key: 'Expired RC '
    },
    {
      issue: 'RC Related',
      key: 'RC No. not found'
    },
    {
      issue: 'RC Related',
      key: 'Stamp Of Authority Missing'
    },
    {
      issue: 'SOC Related',
      key: 'Invalid SOC'
    },
    {
      issue: 'SOC Related',
      key: 'Partial SOC'
    },
    {
      issue: 'ROHINI ID Related',
      key: 'Invalid ROHINI Certificate '
    },
    {
      issue: 'ROHINI ID Related',
      key: 'Expired ROHINI certificate '
    },
    {
      issue: 'Infrastructure Detail Related',
      key: 'Proper Photos of facility not provided'
    },
    {
      issue: 'Infrastructure Detail Related',
      key: 'As Specified by NAT (any one or more of the IRDAI 20 fields)'
    },
    {
      issue: 'HIS Related',
      key: 'Details missing in the HIS'
    },
    {
      issue: 'HIS Related',
      key: 'Sign and Stamp missing '
    },
    {
      issue: 'HIS Related',
      key: 'Required document Missing'
    },
    {
      issue: 'MOU Related',
      key: 'Invalid MOU '
    },
  ]}
  selectedValues={[
    {
      issue: 'Address Realted',
      key: 'Mismatch in Address Details Obtained from Portal and Details in the mandatory documents received'
      
    },
    {
      issue: 'Infrastructure Detail Related',
      key: 'Proper Photos of facility not provided'
    }
  ]}
  style={{
    chips: {
      background: 'red'
    },
    multiselectContainer: {
      color: 'red'
    },
    searchBox: {
      width:'800px',
      border: 'none',
      'border-top':'1px solid black',
      'border-bottom': '1px solid black',
      'border-right':'1px solid black',
      'border-left':'1px solid black',
      'border-radius': '10px',
      'margin-left':'120px'
    }
  }}
  showCheckbox
/>
                </div>
}
            </div>
          </div>
        </div>
      </div>
      <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
        <Button
          color="inherit"
          disabled={props.activeStep === 0}
          onClick={props.handleBack}
          sx={{ mr: 1 }}
        >
          Back
        </Button>

       
        {props.activeStep === 5 && <Button>Submit</Button>}
        {props.activeStep != 5 && (
          <div className="save">
            <Button
              className="btn btn-outline-primary"
              onClick={props.handleSave}
            >
              Save
            </Button>
          </div>
        )}

        {props.activeStep != 5 && (
          <div className="buttons">
            {/* onClick={handleSubmit} */}
            <Button >
              {props.activeStep === props.steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </div>
        )}
      </Box>
      </>
  )
}

export default Actions