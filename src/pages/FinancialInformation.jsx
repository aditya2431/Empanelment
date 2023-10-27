import React from "react";
import "./Home1.css";
import MiniDrawer from "../components/MiniDrawer";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { setMultistepFormObject } from "../redux/actions";
import generalInformation from "../assets/financial.jpg";
import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FinancialInformationval } from "./validations";
function FinancialInformation(props) {
  const dispatch = useDispatch();

  const [accountType, setAccountType] = useState("");
  const [ifscCode, setIfscCode] = useState("");
  const [branchName, setBranchName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [beneficiaryName, setBeneficiaryName] = useState("");
  const [gstinNumber, setGstinNumber] = useState("");
  const [panNo, setPanNo] = useState("");
  const [legalName, setLegalName] = useState("");
  const [tradeName, setTradeName] = useState("");
  const [
    centralSalesTaxRegistrationNumber,
    setCentralSalesTaxRegistrationNumber,
  ] = useState("");
  const [tinUnderValueAddedTax, setTinUnderValueAddedTax] = useState("");
  const [lowerTds, setLowerTds] = useState("");
  const [lowerTdsLimit, setLowerTdsLimit] = useState("");
  const [nurseBedRatio, setNurseBedRatio] = useState("");
  const [providerRemarks, setProviderRemarks] = useState("");
  const [averageDischargeTime, setAverageDischargeTime] = useState("");
  const [tdsExemptionStartDate, setTdsExemptionStartDate] = useState("");
  const [tdsExemptionEndDate, setTdsExemptionEndDate] = useState("");
  const [tiNNo, setTiNNo] = useState("");

  let financialInformationObject = {
    id: 3,
    "Account Type": accountType,
    "IFSC Code": ifscCode,
    "Branch Name": branchName,
    "Account Number": accountNumber,
    "Beneficiary Name": beneficiaryName,
    "GSTIN Number": gstinNumber,
    "PAN No": panNo,
    "Legal Name": legalName,
    "Trade Name": tradeName,
    "Central Sales Tax Registration Number": centralSalesTaxRegistrationNumber,
    "TIN under Value Added Tax": tinUnderValueAddedTax,
    "Lower TDS %": lowerTds,
    "Lower TDS Limit ": lowerTdsLimit,
    "Provider Remarks": providerRemarks,
    "TDS Exemption start date": tdsExemptionStartDate,
    "TDS Exemption end date": tdsExemptionEndDate,
    "TIN No": tiNNo,
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(FinancialInformationval) });

  const onSubmit = () => {
    props.handleNext();
    dispatch(setMultistepFormObject(financialInformationObject));
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

                    <h4 className="info">Financial Information</h4>
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
                          required
                          {...register("accountType")}
                          label="Account Type"
                          error={!!errors.accountType}
                          helperText={errors.accountType?.message}
                          variant="outlined"
                          sx={{
                            width: 450,
                            height: 50,
                            backgroundColor: "#f7f7f7",
                          }}
                          onBlur={(e) => setAccountType(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="form-outline form-group required">
                      <div className="form-group">
                        <TextField
                          required
                          // {...register("provider")}
                          label="IFSC Code"
                          // error={!!errors.provider}
                          // helperText={errors.provider?.message}
                          variant="outlined"
                          sx={{
                            width: 450,
                            height: 50,
                            backgroundColor: "#f7f7f7",
                          }}
                          onBlur={(e) => setIfscCode(e.target.value)}
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
                          // {...register("provider")}
                          label=" Branch Name"
                          // error={!!errors.provider}
                          // helperText={errors.provider?.message}
                          variant="outlined"
                          sx={{
                            width: 450,
                            height: 50,
                            backgroundColor: "#f7f7f7",
                          }}
                          onBlur={(e) => setBranchName(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="form-outline form-group required">
                      <div className="form-group">
                        <TextField
                          required
                          // {...register("provider")}
                          label="Account Number"
                          // error={!!errors.provider}
                          // helperText={errors.provider?.message}
                          variant="outlined"
                          sx={{
                            width: 450,
                            height: 50,
                            backgroundColor: "#f7f7f7",
                          }}
                          onBlur={(e) => setAccountNumber(e.target.value)}
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
                          // {...register("provider")}
                          label="Beneficiary Name"
                          // error={!!errors.provider}
                          // helperText={errors.provider?.message}
                          variant="outlined"
                          sx={{
                            width: 450,
                            height: 50,
                            backgroundColor: "#f7f7f7",
                          }}
                          onBlur={(e) => setBeneficiaryName(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="form-outline form-group required">
                      <div className="form-group">
                        <TextField
                          // required
                          // {...register("provider")}
                          label="GSTIN Number"
                          // error={!!errors.provider}
                          // helperText={errors.provider?.message}
                          variant="outlined"
                          sx={{
                            width: 450,
                            height: 50,
                            backgroundColor: "#f7f7f7",
                          }}
                          onBlur={(e) => setGstinNumber(e.target.value)}
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
                          // {...register("provider")}
                          label="PAN No."
                          // error={!!errors.provider}
                          // helperText={errors.provider?.message}
                          variant="outlined"
                          sx={{
                            width: 450,
                            height: 50,
                            backgroundColor: "#f7f7f7",
                          }}
                          onBlur={(e) => setPanNo(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="form-outline form-group required">
                      <div className="form-group">
                        <TextField
                          // required
                          // {...register("provider")}
                          label="Legal Name"
                          // error={!!errors.provider}
                          // helperText={errors.provider?.message}
                          variant="outlined"
                          sx={{
                            width: 450,
                            height: 50,
                            backgroundColor: "#f7f7f7",
                          }}
                          onBlur={(e) => setLegalName(e.target.value)}
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
                          // required
                          // {...register("provider")}
                          label="Trade Name, If any"
                          // error={!!errors.provider}
                          // helperText={errors.provider?.message}
                          variant="outlined"
                          sx={{
                            width: 450,
                            height: 50,
                            backgroundColor: "#f7f7f7",
                          }}
                          onBlur={(e) => setTradeName(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="form-outline form-group required">
                      <div className="form-group">
                        <TextField
                          // required
                          // {...register("provider")}
                          label="Central Sales Tax Registration Number"
                          // error={!!errors.provider}
                          // helperText={errors.provider?.message}
                          variant="outlined"
                          sx={{
                            width: 450,
                            height: 50,
                            backgroundColor: "#f7f7f7",
                          }}
                          onBlur={(e) =>
                            setCentralSalesTaxRegistrationNumber(e.target.value)
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
                          // required
                          // {...register("provider")}
                          label="TIN under Value Added Tax"
                          // error={!!errors.provider}
                          // helperText={errors.provider?.message}
                          variant="outlined"
                          sx={{
                            width: 450,
                            height: 50,
                            backgroundColor: "#f7f7f7",
                          }}
                          onBlur={(e) =>
                            setTinUnderValueAddedTax(e.target.value)
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="form-outline form-group required">
                      <div className="form-group">
                        <TextField
                          // required
                          // {...register("provider")}
                          label=" Lower TDS % (* if TDS exemption is yes)"
                          // error={!!errors.provider}
                          // helperText={errors.provider?.message}
                          variant="outlined"
                          sx={{
                            width: 450,
                            height: 50,
                            backgroundColor: "#f7f7f7",
                          }}
                          onBlur={(e) => setLowerTds(e.target.value)}
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
                          // required
                          // {...register("provider")}
                          label=" Lower TDS Limit (in INR) (* if TDS exemption is yes)"
                          // error={!!errors.provider}
                          // helperText={errors.provider?.message}
                          variant="outlined"
                          sx={{
                            width: 450,
                            height: 50,
                            backgroundColor: "#f7f7f7",
                          }}
                          onBlur={(e) => setLowerTdsLimit(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="form-outline form-group required">
                      <div className="form-group">
                        <TextField
                          // required
                          // {...register("provider")}
                          label=" Provider Remarks"
                          // error={!!errors.provider}
                          // helperText={errors.provider?.message}
                          variant="outlined"
                          sx={{
                            width: 450,
                            height: 50,
                            backgroundColor: "#f7f7f7",
                          }}
                          onBlur={(e) => setProviderRemarks(e.target.value)}
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
                          // required
                          // {...register("provider")}
                          label="TDS Exemption start date(* if TDS exemption is yes)"
                          // error={!!errors.provider}
                          // helperText={errors.provider?.message}
                          variant="outlined"
                          sx={{
                            width: 450,
                            height: 50,
                            backgroundColor: "#f7f7f7",
                          }}
                          onBlur={(e) =>
                            setTdsExemptionStartDate(e.target.value)
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="form-outline form-group required">
                      <div className="form-group">
                        <TextField
                          // required
                          // {...register("provider")}
                          label="TDS Exemption end date (* if TDS exemption is yes)"
                          // error={!!errors.provider}
                          // helperText={errors.provider?.message}
                          variant="outlined"
                          sx={{
                            width: 450,
                            height: 50,
                            backgroundColor: "#f7f7f7",
                          }}
                          onBlur={(e) => setTdsExemptionEndDate(e.target.value)}
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
                          // required
                          // {...register("provider")}
                          label="TIN No"
                          // error={!!errors.provider}
                          // helperText={errors.provider?.message}
                          variant="outlined"
                          sx={{
                            width: 450,
                            height: 50,
                            backgroundColor: "#f7f7f7",
                          }}
                          onBlur={(e) => setTiNNo(e.target.value)}
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

export default FinancialInformation;
