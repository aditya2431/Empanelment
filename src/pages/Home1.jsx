import React from "react";
import "./Home1.css";
import MiniDrawer from "../components/MiniDrawer";

import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { setMultistepFormObject } from "../redux/actions";
import generalInformation from "../assets/images.jpg";
import { useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Schema } from "./validations";

function Home1(props) {
  const [providerName, setProviderName] = useState("");
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [longitude, setLongitude] = useState("");
  const [latitude, setLatitude] = useState("");
  const [isInputFocused, setIsInputFocused] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(Schema) });

  const dispatch = useDispatch();
  let generalInformationObject = {
    id: 0,
    providerName: providerName,
    "Address Line 1": addressLine1,
    "Address Line 2": addressLine2,
    "Zip Code": zipCode,
    City: city,
    District: district,
    Country: country,
    State: state,
    Longitude: longitude,
    Latitude: latitude,
  };
  const onSubmit = () => {
    props.handleNext();
    dispatch(setMultistepFormObject(generalInformationObject));
  };

  return (
    <>
      <MiniDrawer />

      {console.log(generalInformationObject)}

      <div class="row ">
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

                    <h4 className="info">General Information</h4>
                    {/* <h7  style={{marginLeft: "390px", fontFamily: "revert" , fontWeight: "bold",}}>Step 1-5</h7>  */}
                  </div>
                </div>
              </div>

              <form
                style={{ padding: "20", marginTop: "10" }}
                class="mb-0"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div class="row mb-4">
                  <div class="col">
                    <div class="form-outline form-group ">
                      <div className="form-group">
                        <TextField
                          required
                          {...register("provider")}
                          label="Provider Name"
                          error={!!errors.provider}
                          helperText={errors.provider?.message}
                          variant="outlined"
                          sx={{
                            width: 450,
                            height: 50,
                            backgroundColor: "#f7f7f7",
                          }}
                          // value={providerName}
                          onBlur={(e) => setProviderName(e.target.value)}

                          // onChange={(e) => setProviderName(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="form-outline form-group required">
                      <div className="form-group">
                        <TextField
                          {...register("addressLine1")}
                          error={!!errors.addressLine1}
                          helperText={errors.addressLine1?.message}
                          label="Address Line 1"
                          variant="outlined"
                          sx={{
                            width: 450,
                            height: 50,
                            backgroundColor: "#f7f7f7",
                          }}
                          required
                          size="string"
                          // value={addressLine1}
                          onBlur={(e) => setAddressLine1(e.target.value)}
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
                          label="Address Line 2"
                          variant="outlined"
                          sx={{
                            width: 450,
                            height: 50,
                            backgroundColor: "#f7f7f7",
                          }}
                          size="string"
                          // value={addressLine2}
                          onBlur={(e) => setAddressLine2(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="form-outline form-group required">
                      <TextField
                        label="Zip Code"
                        variant="outlined"
                        sx={{
                          width: 450,
                          height: 50,
                          backgroundColor: "#f7f7f7",
                          fontSize: 16,
                        }}
                        required
                        size="string"
                        // value={zipCode}
                        onBlur={(e) => setZipCode(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div class="row mb-4">
                  <div class="col">
                    <div class="form-outline form-group required">
                      <TextField
                        label="City"
                        variant="outlined"
                        sx={{
                          width: 450,
                          height: 50,
                          backgroundColor: "#f7f7f7",
                        }}
                        required
                        size="string"
                        // value={city}
                        onBlur={(e) => setCity(e.target.value)}
                      />
                    </div>
                  </div>
                  <div class="col">
                    <div class="form-outline form-group required">
                      <TextField
                        label="District"
                        variant="outlined"
                        sx={{
                          width: 450,
                          height: 50,
                          backgroundColor: "#f7f7f7",
                        }}
                        required
                        size="string"
                        // value={district}
                        onBlur={(e) => setDistrict(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div class="row mb-4">
                  <div class="col">
                    <div class="form-outline form-group required">
                      <TextField
                        label="Country"
                        variant="outlined"
                        sx={{
                          width: 450,
                          height: 50,
                          backgroundColor: "#f7f7f7",
                        }}
                        required
                        size="string"
                        // value={country}
                        onBlur={(e) => setCountry(e.target.value)}
                      />
                    </div>
                  </div>
                  <div class="col">
                    <div class="form-outline form-group required">
                      <TextField
                        label="State"
                        variant="outlined"
                        sx={{
                          width: 450,
                          height: 50,
                          backgroundColor: "#f7f7f7",
                        }}
                        required
                        size="string"
                        // value={state}
                        onBlur={(e) => setState(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div class="row mb-4">
                  <div class="col">
                    <div class="form-outline form-group required">
                      <TextField
                        label="Latitude"
                        variant="outlined"
                        sx={{
                          width: 450,
                          height: 50,
                          backgroundColor: "#f7f7f7",
                        }}
                        required
                        size="string"
                        // value={latitude}
                        onBlur={(e) => setLatitude(e.target.value)}
                      />
                    </div>
                  </div>
                  <div class="col">
                    <div class="form-outline form-group required">
                      <TextField
                        // InputLabelProps={{ shrink: true }}
                        label="Longitude"
                        variant="outlined"
                        sx={{
                          width: 450,
                          height: 50,
                          backgroundColor: "#f7f7f7",
                        }}
                        required
                        size="string"
                        // value={longitude}
                        onBlur={(e) => setLongitude(e.target.value)}
                      />
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

export default Home1;
