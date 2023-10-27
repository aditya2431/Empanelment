import React, { useRef } from 'react'
import "./Documentation.css";
import MiniDrawer from "../components/MiniDrawer";
import UploadFile from "../components/UploadFile";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
import{ useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMultistepFormObject } from "../redux/actions";
import generalInformation from "../assets/doc.jpg";



function Documentation(props) {
  const dispatch = useDispatch();
  const fileInputRef = useRef(null);
  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });
  const [registrationCertificate, setRegistrationCertificate] = useState("");
  const [hisSheet, setHisSheet] = useState("");
  const [rohiniIdCertificate, setrohiniIdCertificate] = useState("");
  const [cancelledCheque, setCancelledCheque] = useState("");
  const [bioMedicalCertificate, setBioMedicalCertificate] = useState("");
  const [bmwCertificate, setBmwCertificate] = useState("");
  const [pollutionCertificate, setPollutionCertificate] = useState("");

  

  let documentationObject= {
    "id":4,
  "Registration Certificate":registrationCertificate,
    "HIS Sheet":hisSheet,
    "Rohini ID Certificate":rohiniIdCertificate,
    "Cancelled Cheque":cancelledCheque,
    "Bio Medical Certificate":bioMedicalCertificate,
    "BMW Certificate":bmwCertificate,
    "Pollution Certificate":pollutionCertificate,
    
    

}
const handleUploadDocument = () => {
  // props.handleNext();
  dispatch(setMultistepFormObject(documentationObject));
};
const handleFileChange = (e) => {
  const file = e.target.files[0];

  if (file) {
    if (file.size > 15 * 1024 * 1024) {
      alert('File size is too large. Maximum allowed size is 15MB.');
      // Clear the selected file
      fileInputRef.current.value = '';
    } else {
      // Handle the file, e.g., upload it
      console.log('File selected:', file);
    }
  }
};
const handleRegistrationCertificateUpload = (event) => {
  const registrationCertificate = event.target.files[0];

  setRegistrationCertificate(registrationCertificate);
};
console.log(registrationCertificate)
  return (
    <>
    <MiniDrawer />
   
    
    <div class="row  mx-9" >
        <div class="col-md-9 justify-content-center" className='general'>
          <div class="card card-custom pb-4">
            <div class="card-body mt-0 mx-5">
            <div class="text-center mb-3 pb-2 mt-3">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div class="row">
                    <img
                      className="general-img"
                      src={generalInformation}
                      alt="Card"
                    />

                    <h4 className="info">Documentation</h4>
                    {/* <h7  style={{marginLeft: "390px", fontFamily: "revert" , fontWeight: "bold",}}>Step 1-5</h7>  */}
                  </div>
                </div>
              </div>
              <div>
                
              </div>
               <div class="row mb-4">
                  <div class="col">
                 <span class="text"> Registration Certificate</span>
                  </div>
                  <div class="col">
                  <input class="docInput" type="file" 
                  //  onChange = {handleFileChange}
                   onChange={handleRegistrationCertificateUpload}
                  />
                  {/* onClick={handleUploadDocument} */}
                  <div class="col">
      <button class="label-button" type="submit" >Upload document</button> 
                  {/* <UploadFile/> */}
                  </div>
                   </div>
                </div> 


                <div class="row mb-4">
                  <div class="col">
                 <span class="text"> HIS Sheet</span>
                  </div>
                  <div class="col-md-6" >
                  <input type="file"
                   value={hisSheet}
                   onChange={(e) => setHisSheet(e.target.files)} />
      <button type="submit">Upload document</button>
                  {/* <UploadFile/> */}
                  </div>
                </div>
                <div class="row mb-4">
                  <div class="col-md-6">
                 <span class="text"> Rohini ID Certificate</span>
                  </div>
                  <div class="col-md-6">
                  <input type="file" 
                  value={rohiniIdCertificate}
                  onChange={(e) => setrohiniIdCertificate(e.target.files)}/>
      <button type="submit">Upload document</button>
                  {/* <UploadFile/> */}
                  </div>
                </div>
                <div class="row mb-4">
                  <div class="col-md-6">
                 <span class="text"> Cancelled Cheque</span>
                  </div>
                  <div class="col-md-6">
                  <input type="file" 
                  value={cancelledCheque}
                   onChange={(e) => setCancelledCheque(e.target.files)}/>
      <button type="submit">Upload document</button>
                  {/* <UploadFile/> */}
                  </div>
                </div>
                <div class="row mb-4">
                  <div class="col">
                 <span class="text"> Bio Medical Certificate</span>
                  </div>
                  <div class="col-md-6" >
                  <input type="file" value={bioMedicalCertificate}
                   onChange={(e) => setBioMedicalCertificate(e.target.files)}/>
      <button type="submit">Upload document</button>
                  {/* <UploadFile/> */}
                  </div>
                </div>

                <div class="row mb-4">
                  <div class="col-md-6">
                 <span class="text"> BMW Certificate</span>
                  </div>
                  <div class="col-md-6" >
                  
                  <input type="file" 
                  value={bmwCertificate}
                  onChange={(e) => setBmwCertificate(e.target.files)}/>
      <button type="submit">Upload document</button>
                  {/* <UploadFile/> */}
                  </div>
                </div>
                <div class="row mb-4">
                  <div class="col-md-6">
                 <span class="text">Pollution Certificate </span>
                  </div>
                  <div class="col-md-6" >
                  <input type="file" class = " p-10" 
                  value={pollutionCertificate}
                  onChange={(e) => setPollutionCertificate(e.target.files)}/>
                 
      <button type="submit">Upload document</button>
      {/* <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
      Upload file
      <VisuallyHiddenInput type="file" />
    </Button> */}
                  {/* <UploadFile/> */}
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

        {/* <Box sx={{ flex: "1 1 auto" }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button> */}
        {/* )} */}
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
            
            <Button  onClick={props.handleNext}>
              {props.activeStep === props.steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </div>
        )}
      </Box>
      </div>
          </div>
        </div>
      </div>
      </>
  )
}

export default Documentation;