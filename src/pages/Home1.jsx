import React from "react";
import "./Home1.css";
import MiniDrawer from "../components/MiniDrawer";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
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
import { setWorkflowObject } from "../redux/actions";
// import {toast} from 'react-toastify';

function Home1(props) {
  const [getResponse, setGetResponse] = useState("");
  const [apiResponse, setApiResponse] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [providerName, setProviderName] = useState("");
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [longitude, setLongitude] = useState("");
  const [latitude, setLatitude] = useState("");
  const [flag, setFlag] = useState(false);
  // const [firstSaveOccurred, setFirstSaveOccurred] = useState(false);
  // const [workflowNo,setWorkflowNo] = useState("");

  // hardcoded value of workflowNo

  // let workflowNo = "H23000009";

  const workflowNo = useSelector((state) => state?.workflowObject);
  console.log(workflowNo);
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm({ resolver: yupResolver(Schema) });

  const dispatch = useDispatch();
  let generalInformationObject = {
    providerName: providerName,
    addressLine1: addressLine1,
    addressLine2: addressLine2,
    zipcode: zipcode,
    city: city,
    district: district,
    country: country,
    state: state,
    longitude: longitude,
    latitude: latitude,
    //need to change later
    workflowNo: workflowNo.workflowNo,
    // complianceFlag: true,
    // licenceFlag: true,
  };
console.log(generalInformationObject.providerName);
  const nextButton = () => {
    props.handleNext();

    console.log(getResponse);
    dispatch(setMultistepFormObject(generalInformationObject));
  };
  console.log(flag);

  const onSubmit = async () => {
    if (flag) {
      const isValid = await trigger();

      if (isValid) {
        onSave();
      } else {
      }

      //  await trigger();

      //  onSave();

      // if (flag) {
      //   await onSave();
      // }
    } else {
      // const request =
      // {generalInformationObject}
      // axios.post('http://10.81.1.250:8080/abhi_timesheet/api/timesheet', request, {credentials: 'include'})

      axios
        .post(
          "http://localhost:8181/api/generalInfo/saveGeneralInfo",
          generalInformationObject,
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
    }
  };

 

  const fetchData = () => {
    // fetch("http://10.81.1.250:8080/abhi_timesheet/api/timesheet")
    fetch("http://localhost:8181/api/generalInfo/getByWorkflowNo/" + workflowNo)
      .then((response) => {
        if (response.status === 200) {
          setFlag(true);
        }
        return response.json();
      })
      .then((data) => {
        setGetResponse(data);
      });
  };

  const onSave = async () => {
    // const request =
    // {generalInformationObject}
    // axios.post('http://10.81.1.250:8080/abhi_timesheet/api/timesheet', request, {credentials: 'include'})

    // axios
    //   .post("http://localhost:8181/api/generalInfo/saveGeneralInfo", generalInformationObject, {
    //     credentials: "include",
    //   })
    axios
      .post(
        "http://localhost:8181/api/generalInfo/saveGeneralInfo",
        getResponse,
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
      
  };
  useEffect(() => {
    
    fetchData();
    
  }, []);
  console.log(getResponse);

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

              {flag ? (
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
                            InputLabelProps={{ shrink: true }}
                            required
                            {...register("provider")}
                            label="Provider Name"
                            error={!!errors.provider}
                            helperText={errors.provider?.message}
                            // helperText={!!errors.provider ? errors.provider.message : ""}
                            variant="outlined"
                            sx={{
                              width: 450,
                              height: 50,
                              backgroundColor: "#f7f7f7",
                            }}
                            value={getResponse.providerName}
                            //  onChange={(e) =>
                            //    setGetResponse({...getResponse ,providerName: e.target.value })
                            //  }
                            onChange={(e) => {
                              setGetResponse({
                                ...getResponse,
                                providerName: e.target.value,
                              });
                              // setValue("provider", e.target.value); // Update form value
                              //                       const hasError = !!errors.provider;
                              //                       console.log(hasError);
                              // if (hasError) {
                              //   // Trigger validation manually
                              //   trigger("provider");
                              // }
                            }}

                            // onChange={(e) => setProviderName(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    <div class="col">
                      <div class="form-outline form-group required">
                        <div className="form-group">
                          <TextField
                            InputLabelProps={{ shrink: true }}
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
                            value={getResponse.addressLine1}
                            onChange={(e) =>
                              setGetResponse({
                                ...getResponse,
                                addressLine1: e.target.value,
                              })
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
                            InputLabelProps={{ shrink: true }}
                            label="Address Line 2"
                            variant="outlined"
                            sx={{
                              width: 450,
                              height: 50,
                              backgroundColor: "#f7f7f7",
                            }}
                            size="string"
                            value={getResponse.addressLine2}
                            onChange={(e) =>
                              setGetResponse({
                                ...getResponse,
                                addressLine2: e.target.value,
                              })
                            }
                          />
                        </div>
                      </div>
                    </div>

                    <div class="col">
                      <div class="form-outline form-group required">
                        <TextField
                          InputLabelProps={{ shrink: true }}
                          label="Zip Code"
                          variant="outlined"
                          sx={{
                            width: 450,
                            height: 50,
                            backgroundColor: "#f7f7f7",
                            fontSize: 16,
                          }}
                          required
                          {...register("zipCode")}
                          error={!!errors.zipCode}
                          helperText={errors.zipCode?.message}
                          size="string"
                          value={getResponse.zipcode}
                          onChange={(e) =>
                            setGetResponse({
                              ...getResponse,
                              zipcode: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row mb-4">
                    <div class="col">
                      <div class="form-outline form-group required">
                        <TextField
                          InputLabelProps={{ shrink: true }}
                          label="City"
                          variant="outlined"
                          sx={{
                            width: 450,
                            height: 50,
                            backgroundColor: "#f7f7f7",
                          }}
                          required
                          size="string"
                          value={getResponse.city}
                          onChange={(e) =>
                            setGetResponse({
                              ...getResponse,
                              city: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                    <div class="col">
                      <div class="form-outline form-group required">
                        <TextField
                          InputLabelProps={{ shrink: true }}
                          label="District"
                          variant="outlined"
                          sx={{
                            width: 450,
                            height: 50,
                            backgroundColor: "#f7f7f7",
                          }}
                          required
                          size="string"
                          value={getResponse.district}
                          onChange={(e) =>
                            setGetResponse({
                              ...getResponse,
                              district: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row mb-4">
                    <div class="col">
                      <div class="form-outline form-group required">
                        <TextField
                          InputLabelProps={{ shrink: true }}
                          label="Country"
                          variant="outlined"
                          sx={{
                            width: 450,
                            height: 50,
                            backgroundColor: "#f7f7f7",
                          }}
                          required
                          size="string"
                          value={getResponse.country}
                          onChange={(e) =>
                            setGetResponse({
                              ...getResponse,
                              country: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                    <div class="col">
                      <div class="form-outline form-group required">
                        <TextField
                          InputLabelProps={{ shrink: true }}
                          label="State"
                          variant="outlined"
                          sx={{
                            width: 450,
                            height: 50,
                            backgroundColor: "#f7f7f7",
                          }}
                          required
                          size="string"
                          value={getResponse.state}
                          onChange={(e) =>
                            setGetResponse({
                              ...getResponse,
                              state: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row mb-4">
                    <div class="col">
                      <div class="form-outline form-group required">
                        <TextField
                          InputLabelProps={{ shrink: true }}
                          label="Latitude"
                          variant="outlined"
                          sx={{
                            width: 450,
                            height: 50,
                            backgroundColor: "#f7f7f7",
                          }}
                          required
                          size="string"
                          value={getResponse.latitude}
                          onChange={(e) =>
                            setGetResponse({
                              ...getResponse,
                              latitude: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                    <div class="col">
                      <div class="form-outline form-group required">
                        <TextField
                          InputLabelProps={{ shrink: true }}
                          label="Longitude"
                          variant="outlined"
                          sx={{
                            width: 450,
                            height: 50,
                            backgroundColor: "#f7f7f7",
                          }}
                          required
                          size="string"
                          value={getResponse.longitude}
                          onChange={(e) =>
                            setGetResponse({
                              ...getResponse,
                              longitude: e.target.value,
                            })
                          }
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
                          onClick={onSubmit}
                          className="btn btn-outline-primary"
                        >
                          Save
                        </Button>
                      </div>
                    )}

                    {props.activeStep != 5 && (
                      <div className="buttons">
                        <Button type="submit" onClick={nextButton}>
                          {props.activeStep === props.steps.length - 1
                            ? "Finish"
                            : "Next"}
                        </Button>
                      </div>
                    )}
                  </Box>
                </form>
              ) : (
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
                            // value={getResponse.providerName}
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
                          {...register("zipCode")}
                          error={!!errors.zipCode}
                          helperText={errors.zipCode?.message}
                          size="string"
                          // value={zipCode}
                          onBlur={(e) => setZipcode(e.target.value)}
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
                          type="submit"
                          className="btn btn-outline-primary"
                        >
                          Save
                        </Button>
                      </div>
                    )}

                    {props.activeStep != 5 && (
                      <div className="buttons">
                        <Button type="submit" onClick={nextButton}>
                          {props.activeStep === props.steps.length - 1
                            ? "Finish"
                            : "Next"}
                        </Button>
                      </div>
                    )}
                  </Box>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      <Toaster />
    </>
  );
}

export default Home1;
