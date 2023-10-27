import React, { useState } from "react";
import "./styles.css";

const AdvanceSignFormWizard = () => {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div>
            <h1>Account Information</h1>
            <label htmlFor="username">Username</label>
            <input type="text" name="username" />
            <label htmlFor="password">Password</label>
            <input type="password" name="password" />
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type="password" name="confirmPassword" />
            <button onClick={handleNext}>Next</button>
          </div>
        );
      case 2:
        return (
          <div>
            <h1>Personal Information</h1>
            <label htmlFor="firstName">First Name</label>
            <input type="text" name="firstName" />
            <label htmlFor="lastName">Last Name</label>
            <input type="text" name="lastName" />
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
            <button onClick={handlePrevious}>Previous</button>
            <button onClick={handleNext}>Next</button>
          </div>
        );
      case 3:
        return (
          <div>
            <h1>Payment Information</h1>
            <label htmlFor="cardNumber">Card Number</label>
            <input type="text" name="cardNumber" />
            <label htmlFor="expirationDate">Expiration Date</label>
            <input type="text" name="expirationDate" />
            <label htmlFor="cvv">CVV</label>
            <input type="text" name="cvv" />
            <button onClick={handlePrevious}>Previous</button>
            <button onClick={handleNext}>Next</button>
          </div>
        );
      case 4:
        return (
          <div>
            <h1>Confirm Your Details</h1>
            <p>Please review your information and make sure it is correct.</p>
            <button onClick={handlePrevious}>Previous</button>
            <button type="submit">Submit</button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="advance-sign-form-wizard">
      <div className="step-indicator">
        <span className="step active">Step 1</span>
        <span className="step">Step 2</span>
        <span className="step">Step 3</span>
        <span className="step">Step 4</span>
      </div>
      <div className="step-content">{renderStep()}</div>
    </div>
  );
};

export default AdvanceSignFormWizard;
