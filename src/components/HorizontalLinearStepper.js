import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { AddCircle, AccountBox, LocationOn, AttachMoney, Description, Send, Home } from "@mui/icons-material";
// import Home from '../pages/Home';
import ProviderInformation from "../pages/ProviderInformation";
import Home1 from "../pages/Home1";
import { useNavigate } from "react-router-dom";
import InfrastructureDetails from "../pages/InfrastructureDetails";
import FinancialInformation from "../pages/FinancialInformation";
import Documentation from "../pages/Documentation";
import Actions from "../pages/Actions";
import Logo from "../assets/Logo.JPG";
import "./HorizontalLinearStepper.css";
import {setMultistepFormObject} from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";



const steps = [
  "General Information",
  "Provider Infromation",
  "Infrastructure Details",
  "Financial Information",
  "Documentation",
  "Actions"
];
// const steps = [
//   {
//     label: "General Information",
//     icon: <AccountBox />,
//   },
//   {
//     label: "Provider Information",
//     icon: <LocationOn />,
//   },
//   {
//     label: "Infrastructure Details",
//     icon: <AddCircle />,
//   },
//   {
//     label: "Financial Information",
//     icon: <AttachMoney />,
//   },
//   {
//     label: "Documentation",
//     icon: <Description />,
//   },
//   {
//     label: "Actions",
//     icon: <Send />,
//   },
// ];

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };
console.log("");
  const handleNext = () => {
 

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    // setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  const handleSave = () => {
    console.log("hello");
  };

  return (
    <Box sx={{ width: "100%",pr:8,pt:5, pl: 15,pb:2,mb:2 }}>
      <img
        className="card-img"
        src={Logo}
        alt="Card"
        />
        {/* // width={50}
        // height={100} */}
      {/* //<div><br /></div> */}
      <Stepper sx={{ml: 20,mb:3 }} activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption"></Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          {activeStep === 0 && <Home1 handleBack={handleBack} handleNext={handleNext} activeStep={activeStep} steps={steps}/>}
          {activeStep === 1 && <ProviderInformation handleBack={handleBack}  handleNext={handleNext} activeStep={activeStep} steps={steps}/>}
          {activeStep === 2 && <InfrastructureDetails handleBack={handleBack}  handleNext={handleNext} activeStep={activeStep} steps={steps}/>}
          {activeStep === 3 && <FinancialInformation handleBack={handleBack}  handleNext={handleNext} activeStep={activeStep} steps={steps}/>}
          {activeStep === 4 && <Documentation handleBack={handleBack}  handleNext={handleNext} activeStep={activeStep} steps={steps}/>}
          {activeStep === 5 && <Actions handleBack={handleBack}  handleNext={handleNext} activeStep={activeStep} steps={steps}/>}

        </React.Fragment>
      )}
    </Box>
  );
}
