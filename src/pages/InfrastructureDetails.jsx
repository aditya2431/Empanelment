import React from "react";
import "./Home1.css";
import MiniDrawer from "../components/MiniDrawer";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { setMultistepFormObject } from "../redux/actions";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import generalInformation from "../assets/infrastructure.png";
import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { InfrastructureDetailsval } from "./validations";

function InfrastructureDetails(props) {
  const [totalBedStrengthOfTheHospital, setTotalBedStrengthOfTheHospital] =
    useState("");
  const [numberOfDoctors, setNumberOfDoctors] = useState("");
  const [
    totalNumberOfFullTimeDoctorsWithQualificationApprovedByMci,
    setTotalNumberOfFullTimeDoctorsWithQualificationApprovedByMci,
  ] = useState("");
  const [numberOfConsultants, setNumberOfConsultants] = useState("");
  const [
    numberOfSurgeonsOrInterventionists,
    setNumberOfSurgeonsOrInterventionists,
  ] = useState("");
  const [
    totalNumberOfQualifiedNursesInTheHospital,
    setTotalNumberOfQualifiedNursesInTheHospital,
  ] = useState("");
  const [
    totalNumberOfIcuBedsInTheHospital,
    setTotalNumberOfIcuBedsInTheHospital,
  ] = useState("");
  const [
    numberOfDoctorsExclusivelyAvailableForIcu,
    setNumberOfDoctorsExclusivelyAvailableForIcu,
  ] = useState("");
  const [
    numberOfQualifiedNursesAvailableExclusivelyInTheIcuTakingAllTheShiftsTogether,
    setNumberOfQualifiedNursesAvailableExclusivelyInTheIcuTakingAllTheShiftsTogether,
  ] = useState("");
  const [
    accreditationReceivedByTheHospital,
    setAccreditationReceivedByTheHospital,
  ] = useState("");
  const [doctorBedRatioInIcu, setDoctorBedRatioInIcu] = useState("");
  const [nurseBedRatioInIcu, setNurseBedRatioInIcu] = useState("");
  const [doctorBedRatio, setDoctorBedRatio] = useState("");
  const [nurseBedRatio, setNurseBedRatio] = useState("");
  const [averageAdmissionTime, setAverageAdmissionTime] = useState("");
  const [averageDischargeTime, setAverageDischargeTime] = useState("");
  const [
    averageLengthOfStayForMedicalCases,
    setAverageLengthOfStayForMedicalCases,
  ] = useState("");
  const [
    averageLengthOfStayForSurgicalCases,
    setAverageLengthOfStayForSurgicalCases,
  ] = useState("");
  const [cSectionRate, setCSectionRate] = useState("");
  const [websiteLink, setWebsiteLink] = useState("");

  let infrastructureDetailsObject = {
    id: 2,
    "Total Bed strength of the Hospital": totalBedStrengthOfTheHospital,
    "Number of Doctors": numberOfDoctors,
    "Total number of Full time doctors with qualification approved by MCI":
      totalNumberOfFullTimeDoctorsWithQualificationApprovedByMci,
    "Number of Consultants": numberOfConsultants,
    "Number of surgeons or interventionists":
      numberOfSurgeonsOrInterventionists,
    "Total number of qualified nurses in the hospital":
      totalNumberOfQualifiedNursesInTheHospital,
    "Total number of ICU beds in the hospital":
      totalNumberOfIcuBedsInTheHospital,
    "Number of doctors (with Qualification of MBBS/MD) exclusively available for ICU":
      numberOfDoctorsExclusivelyAvailableForIcu,
    "Number of qualified nurses available exclusively in the ICU taking all the shifts together":
      numberOfQualifiedNursesAvailableExclusivelyInTheIcuTakingAllTheShiftsTogether,
    "Accreditation received by the Hospital":
      accreditationReceivedByTheHospital,
    "Doctor-Bed Ratio": doctorBedRatio,
    "Nurse-Bed Ratio": nurseBedRatio,
    "Doctor-Bed Ratio in ICU": doctorBedRatioInIcu,
    "Nurse-Bed Ratio in ICU": nurseBedRatioInIcu,
    "Average admission Time": averageAdmissionTime,
    "Average Discharge Time": averageDischargeTime,
    "Average Length of Stay for Medical Cases":
      averageLengthOfStayForMedicalCases,
    "Average Length of stay for Surgical Cases":
      averageLengthOfStayForSurgicalCases,
    "C-Section Rate": cSectionRate,
    "Website Link": websiteLink,
  };
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(InfrastructureDetailsval) });
  const onSubmit = () => {
    props.handleNext();
    dispatch(setMultistepFormObject(infrastructureDetailsObject));
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

                    <h4 className="info">Infrastrucure Details</h4>
                    {/* <h7  style={{marginLeft: "390px", fontFamily: "revert" , fontWeight: "bold",}}>Step 1-5</h7>  */}
                  </div>
                </div>
              </div>

              <form class="mb-0" onSubmit={handleSubmit(onSubmit)}>
                <div class="row mb-4">
                  <div class="col">
                    <div class="form-outline form-group required">
                      <div className="form-group">
                        <TextField
                          // {...register("addressLine1")}
                          // error={!!errors.addressLine1}
                          // helperText={errors.addressLine1?.message}
                          label="Total Bed Strength Of Hospital"
                          variant="outlined"
                          type="number"
                          sx={{
                            width: 450,
                            height: 50,
                            backgroundColor: "#f7f7f7",
                          }}
                          required
                          size="string"
                          // value={addressLine1}
                          onBlur={(e) =>
                            setTotalBedStrengthOfTheHospital(e.target.value)
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="form-outline form-group required">
                      <div className="form-group">
                        <TextField
                          // {...register("addressLine1")}
                          // error={!!errors.addressLine1}
                          // helperText={errors.addressLine1?.message}
                          label=" Number of Doctors"
                          variant="outlined"
                          type="number"
                          sx={{
                            width: 450,
                            height: 50,
                            backgroundColor: "#f7f7f7",
                          }}
                          required
                          size="string"
                          // value={addressLine1}
                          onBlur={(e) => setNumberOfDoctors(e.target.value)}
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
                          // {...register("addressLine1")}
                          // error={!!errors.addressLine1}
                          // helperText={errors.addressLine1?.message}
                          label=" Total number of Full time doctors with qualification approved by MCI"
                          variant="outlined"
                          type="number"
                          sx={{
                            width: 450,
                            height: 50,
                            backgroundColor: "#f7f7f7",
                          }}
                          required
                          size="string"
                          // value={addressLine1}
                          onBlur={(e) =>
                            setTotalNumberOfFullTimeDoctorsWithQualificationApprovedByMci(
                              e.target.value
                            )
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="form-outline form-group required">
                      <div className="form-group">
                        <TextField
                          // {...register("addressLine1")}
                          // error={!!errors.addressLine1}
                          // helperText={errors.addressLine1?.message}
                          label="Number of Consultants"
                          variant="outlined"
                          type="number"
                          sx={{
                            width: 450,
                            height: 50,
                            backgroundColor: "#f7f7f7",
                          }}
                          required
                          size="string"
                          // value={addressLine1}
                          onBlur={(e) => setNumberOfConsultants(e.target.value)}
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
                          // {...register("addressLine1")}
                          // error={!!errors.addressLine1}
                          // helperText={errors.addressLine1?.message}
                          label="Number of surgeons or interventionists"
                          variant="outlined"
                          type="number"
                          sx={{
                            width: 450,
                            height: 50,
                            backgroundColor: "#f7f7f7",
                          }}
                          // required
                          size="string"
                          // value={addressLine1}
                          onBlur={(e) =>
                            setNumberOfSurgeonsOrInterventionists(
                              e.target.value
                            )
                          }
                        />
                      </div>
                    </div>
                  </div>

                  <div class="col">
                    <div class="form-outline form-group required">
                      <div className="form-group">
                        <TextField
                          // {...register("addressLine1")}
                          // error={!!errors.addressLine1}
                          // helperText={errors.addressLine1?.message}
                          label=" Total number of qualified nurses in the hospital"
                          variant="outlined"
                          type="number"
                          sx={{
                            width: 450,
                            height: 50,
                            backgroundColor: "#f7f7f7",
                          }}
                          required
                          size="string"
                          // value={addressLine1}
                          onBlur={(e) =>
                            setTotalNumberOfQualifiedNursesInTheHospital(
                              e.target.value
                            )
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
                          // {...register("addressLine1")}
                          // error={!!errors.addressLine1}
                          // helperText={errors.addressLine1?.message}
                          label=" Total number of ICU beds in the hospital"
                          variant="outlined"
                          type="number"
                          sx={{
                            width: 450,
                            height: 50,
                            backgroundColor: "#f7f7f7",
                          }}
                          // required
                          size="string"
                          // value={addressLine1}
                          onBlur={(e) =>
                            setTotalNumberOfIcuBedsInTheHospital(e.target.value)
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="form-outline form-group required">
                      <div className="form-group">
                        <TextField
                          // {...register("addressLine1")}
                          // error={!!errors.addressLine1}
                          // helperText={errors.addressLine1?.message}
                          label="Number of doctors (with Qualification of MBBS/MD) exclusively available for ICU"
                          variant="outlined"
                          type="number"
                          sx={{
                            width: 450,
                            height: 50,
                            backgroundColor: "#f7f7f7",
                          }}
                          required
                          size="string"
                          // value={addressLine1}
                          onBlur={(e) =>
                            setNumberOfDoctorsExclusivelyAvailableForIcu(
                              e.target.value
                            )
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
                          // {...register("addressLine1")}
                          // error={!!errors.addressLine1}
                          // helperText={errors.addressLine1?.message}
                          label=" Number of qualified nurses available exclusively in the ICU taking all the shifts together"
                          variant="outlined"
                          type="number"
                          sx={{
                            width: 450,
                            height: 50,
                            backgroundColor: "#f7f7f7",
                          }}
                          required
                          size="string"
                          // value={addressLine1}
                          onBlur={(e) =>
                            setNumberOfQualifiedNursesAvailableExclusivelyInTheIcuTakingAllTheShiftsTogether(
                              e.target.value
                            )
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="form-outline form-group required">
                      <div className="form-group">
                        <TextField
                          // {...register("addressLine1")}
                          // error={!!errors.addressLine1}
                          // helperText={errors.addressLine1?.message}
                          label="Accreditation received by the Hospital"
                          variant="outlined"
                          sx={{
                            width: 450,
                            height: 50,
                            backgroundColor: "#f7f7f7",
                          }}
                          required
                          size="string"
                          // value={addressLine1}
                          onBlur={(e) =>
                            setAccreditationReceivedByTheHospital(
                              e.target.value
                            )
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
                          {...register("doctorBedRatio")}
                          error={!!errors.doctorBedRatio}
                          helperText={errors.doctorBedRatio?.message}
                          label="Doctor-Bed Ratio"
                          variant="outlined"
                          sx={{
                            width: 450,
                            height: 50,
                            backgroundColor: "#f7f7f7",
                          }}
                          required
                          size="string"
                          // value={addressLine1}
                          onBlur={(e) => setDoctorBedRatio(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="form-outline form-group required">
                      <div className="form-group">
                        <TextField
                          {...register("nurseBedRatio")}
                          error={!!errors.nurseBedRatio}
                          helperText={errors.nurseBedRatio?.message}
                          label=" Nurse-Bed Ratio"
                          variant="outlined"
                          sx={{
                            width: 450,
                            height: 50,
                            backgroundColor: "#f7f7f7",
                          }}
                          required
                          size="string"
                          // value={addressLine1}
                          onBlur={(e) => setNurseBedRatio(e.target.value)}
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
                          {...register("doctorBedRatioInIcu")}
                          error={!!errors.doctorBedRatioInIcu}
                          helperText={errors.doctorBedRatioInIcu?.message}
                          label="Doctor-Bed Ratio in ICU"
                          variant="outlined"
                          sx={{
                            width: 450,
                            height: 50,
                            backgroundColor: "#f7f7f7",
                          }}
                          required
                          size="string"
                          // value={addressLine1}
                          onBlur={(e) => setDoctorBedRatio(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="form-outline form-group required">
                      <div className="form-group">
                        <TextField
                          {...register("nurseBedRatioInIcu")}
                          error={!!errors.nurseBedRatioInIcu}
                          helperText={errors.nurseBedRatioInIcu?.message}
                          label="Nurse-Bed Ratio in ICU"
                          variant="outlined"
                          sx={{
                            width: 450,
                            height: 50,
                            backgroundColor: "#f7f7f7",
                          }}
                          required
                          size="string"
                          // value={addressLine1}
                          onBlur={(e) => setNurseBedRatioInIcu(e.target.value)}
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
                          // {...register("addressLine1")}
                          // error={!!errors.addressLine1}
                          // helperText={errors.addressLine1?.message}
                          label=" Average admission Time"
                          variant="outlined"
                          sx={{
                            width: 450,
                            height: 50,
                            backgroundColor: "#f7f7f7",
                          }}
                          required
                          size="string"
                          // value={addressLine1}
                          onBlur={(e) =>
                            setAverageAdmissionTime(e.target.value)
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="form-outline form-group required">
                      <div className="form-group">
                        <TextField
                          // {...register("addressLine1")}
                          // error={!!errors.addressLine1}
                          // helperText={errors.addressLine1?.message}
                          label="  Average Discharge Time"
                          variant="outlined"
                          sx={{
                            width: 450,
                            height: 50,
                            backgroundColor: "#f7f7f7",
                          }}
                          required
                          size="string"
                          // value={addressLine1}
                          onBlur={(e) =>
                            setAverageDischargeTime(e.target.value)
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
                          // {...register("addressLine1")}
                          // error={!!errors.addressLine1}
                          // helperText={errors.addressLine1?.message}
                          label=" Average Length of Stay for Medical Cases"
                          type="number"
                          variant="outlined"
                          sx={{
                            width: 450,
                            height: 50,
                            backgroundColor: "#f7f7f7",
                          }}
                          required
                          size="string"
                          // value={addressLine1}
                          onBlur={(e) =>
                            setAverageLengthOfStayForMedicalCases(
                              e.target.value
                            )
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="form-outline form-group required">
                      <div className="form-group">
                        <TextField
                          // {...register("addressLine1")}
                          // error={!!errors.addressLine1}
                          // helperText={errors.addressLine1?.message}
                          label=" Average Length of stay for Surgical Cases"
                          type="number"
                          variant="outlined"
                          sx={{
                            width: 450,
                            height: 50,
                            backgroundColor: "#f7f7f7",
                          }}
                          required
                          size="string"
                          // value={addressLine1}
                          onBlur={(e) =>
                            setAverageLengthOfStayForSurgicalCases(
                              e.target.value
                            )
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
                          {...register("cSectionRate")}
                          error={!!errors.cSectionRate}
                          helperText={errors.cSectionRate?.message}
                          label="C-Section Rate"
                          variant="outlined"
                          sx={{
                            width: 450,
                            height: 50,
                            backgroundColor: "#f7f7f7",
                          }}
                          // required
                          size="string"
                          // value={addressLine1}
                          onBlur={(e) => setCSectionRate(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="form-outline form-group required">
                      <div className="form-group">
                        <TextField
                          {...register("websiteLink")}
                          error={!!errors.websiteLink}
                          helperText={errors.websiteLink?.message}
                          label="  Website Link"
                          variant="outlined"
                          sx={{
                            width: 450,
                            height: 50,
                            backgroundColor: "#f7f7f7",
                          }}
                          required
                          size="string"
                          // value={addressLine1}
                          onBlur={(e) => setWebsiteLink(e.target.value)}
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

export default InfrastructureDetails;
