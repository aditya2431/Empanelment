import React from "react";
import "./Home1.css";
import MiniDrawer from "../components/MiniDrawer";
import Button from "@mui/material/Button";
import { setMultistepFormObject } from "../redux/actions";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import generalInformation from "../assets/images.jpg";
import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ProviderInformationval } from "./validations";

function ProviderInformation(props) {
 
  const [rohiniID, setRohiniID] = useState("");
  const [rohiniCodeExpiryDate, setRohiniCodeExpiryDate] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [subSpecialization, setSubSpecialization] = useState("");
  const [hfrID, setHfrId] = useState("");
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [registrationIssuingAuthority, setregistrationIssuingAuthority] =
    useState("");
  const [placeOfRegistration, setplaceOfRegistration] = useState("");
  const [registrationExpiryDate, setregistrationExpiryDate] = useState("");
  const [levelOfCare, setlevelOfCare] = useState("");
  const [ownershipType, setownershipType] = useState("");
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(ProviderInformationval) });

  const providerInformationObject = {
    id: 1,
    "Rohini ID": rohiniID,
    "Rohini Code Expiry Date": rohiniCodeExpiryDate,
    Specialization: specialization,
    "Sub-Specialization": subSpecialization,
    "HFR ID": hfrID,
    "Registration Number": registrationNumber,
    "Place of Registration": placeOfRegistration,
    "Registration Expiry Date": registrationExpiryDate,
    "Registration Issuing Authority": registrationIssuingAuthority,
    "Level of Care": levelOfCare,
    "Ownership Type": ownershipType,
  };
 
  const onSubmit = () => {
    props.handleNext();
    dispatch(setMultistepFormObject(providerInformationObject));
  };

  return (
    <>
      <MiniDrawer />

      <div class="row  mx-9">
        <div class="col-md-9 justify-content-center" className="general">
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

                    <h4 className="info">Provider Information</h4>
                    {/* <h7  style={{marginLeft: "390px", fontFamily: "revert" , fontWeight: "bold",}}>Step 1-5</h7>  */}
                  </div>
                </div>
              </div>

              {/* onSubmit={handleSubmit(onSubmit)} */}
              <form class="mb-0 " onSubmit={handleSubmit(onSubmit)}>
                <div class="row mb-4">
                  <div class="col">
                    <div class="form-outline form-group required">
                      <div className="form-group">
                        <TextField
                          required
                          {...register("rohini")}
                          error={!!errors.rohini}
                          helperText={errors.rohini?.message}
                          label="Rohini ID"
                          variant="outlined"
                          sx={{
                            width: 450,
                            height: 50,
                            backgroundColor: "#f7f7f7",
                          }}
                          size="string"
                          // value={addressLine2}
                          onBlur={(e) => setRohiniID(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="form-outline form-group required">
                      <div className="form-group">
                        <TextField
                          required
                          {...register("rohiniExpiry")}
                          error={!!errors.rohiniExpiry}
                          helperText={errors.rohiniExpiry?.message}
                          type="date"
                          label=" Rohini Code Expiry Date"
                          variant="outlined"
                          sx={{
                            width: 450,
                            height: 50,
                            backgroundColor: "#f7f7f7",
                          }}
                          size="string"
                          // value={addressLine2}
                          onBlur={(e) =>
                            setRohiniCodeExpiryDate(e.target.value)
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row mb-4">
                  <div class="col">
                    <div class="form-outline form-group required">
                      <div className="form-group">
                        <TextField
                          required
                          label="Specialization"
                          variant="outlined"
                          sx={{
                            width: 450,
                            height: 50,
                            backgroundColor: "#f7f7f7",
                          }}
                          size="string"
                          // value={addressLine2}
                          onBlur={(e) => setSpecialization(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="form-outline form-group required">
                      <div className="form-group">
                        <TextField
                          required
                          label=" Sub-Specialization"
                          variant="outlined"
                          sx={{
                            width: 450,
                            height: 50,
                            backgroundColor: "#f7f7f7",
                          }}
                          size="string"
                          // value={addressLine2}
                          onBlur={(e) => setSubSpecialization(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div class="row mb-4">
                  <div class="col">
                    <div class="form-outline form-group required">
                      <div className="form-group">
                        <TextField
                          label=" HFR ID"
                          variant="outlined"
                          sx={{
                            width: 450,
                            height: 50,
                            backgroundColor: "#f7f7f7",
                          }}
                          size="string"
                          // value={addressLine2}
                          onBlur={(e) => setHfrId(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="form-outline form-group required">
                      <div className="form-group">
                        <TextField
                          required
                          label=" Registration Number"
                          variant="outlined"
                          sx={{
                            width: 450,
                            height: 50,
                            backgroundColor: "#f7f7f7",
                          }}
                          size="string"
                          // value={addressLine2}
                          onBlur={(e) => setRegistrationNumber(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div class="row mb-4">
                  <div class="col">
                    <div class="form-outline form-group required">
                      <div className="form-group">
                        <TextField
                          required
                          label="Place Of Registration"
                          variant="outlined"
                          sx={{
                            width: 450,
                            height: 50,
                            backgroundColor: "#f7f7f7",
                          }}
                          size="string"
                          // value={addressLine2}
                          onBlur={(e) => setplaceOfRegistration(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="form-outline form-group required">
                      <div className="form-group">
                        <TextField
                          required
                          {...register("registrationExpiry")}
                          error={!!errors.registrationExpiry}
                          helperText={errors.registrationExpiry?.message}
                          type="date"
                          label="Registration Expiry Date"
                          variant="outlined"
                          sx={{
                            width: 450,
                            height: 50,
                            backgroundColor: "#f7f7f7",
                          }}
                          size="string"
                          // value={addressLine2}
                          onBlur={(e) =>
                            setregistrationExpiryDate(e.target.value)
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div class="row mb-4">
                  <div class="col">
                    <div class="form-outline form-group required">
                      <div className="form-group">
                        <TextField
                          required
                          label="Registration Issuing Authority"
                          variant="outlined"
                          sx={{
                            width: 450,
                            height: 50,
                            backgroundColor: "#f7f7f7",
                          }}
                          size="string"
                          // value={addressLine2}
                          onBlur={(e) =>
                            setregistrationIssuingAuthority(e.target.value)
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="form-outline form-group required">
                      <div className="form-group">
                        <TextField
                          required
                          label="Level Of Care"
                          variant="outlined"
                          sx={{
                            width: 450,
                            height: 50,
                            backgroundColor: "#f7f7f7",
                          }}
                          size="string"
                          // value={addressLine2}
                          onBlur={(e) => setlevelOfCare(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div class="row mb-4">
                  <div class="col-md-6">
                    <div class="form-outline form-group required">
                      <div className="form-group">
                        <TextField
                          required
                          label="Ownership Type"
                          variant="outlined"
                          sx={{
                            width: 450,
                            height: 50,
                            backgroundColor: "#f7f7f7",
                          }}
                          size="string"
                          // value={addressLine2}
                          onBlur={(e) => setownershipType(e.target.value)}
                        />
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
                      <Button type="submit">
                        {props.activeStep === props.steps.length - 1
                          ? "Finish"
                          : "Next"}
                      </Button>
                    </div>
                  )}
                </Box>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProviderInformation;
