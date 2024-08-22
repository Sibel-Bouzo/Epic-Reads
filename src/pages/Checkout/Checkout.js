import React, { useState } from "react";
import { useGlobalContext } from "../../contexts/context";
import { StepOne } from "./Components/StepOne";
import { StepTwo } from "./Components/StepTwo";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export const Checkout = () => {
  const { cart, clearAll } = useGlobalContext();

  const [currentStep, setCurrentStep] = useState(1);
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    email: "",
    phonenumber: "",
  });
  const [libraryCardInfo, setLibraryCardInfo] = useState({
    fullName: "",
    cardNumber: "",
  });
  const [isChecked, setIsChecked] = useState(false);

  const navigate = useNavigate();

  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePreviousStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const handleCheckout = () => {
    if (window.confirm("Are you sure you want to confirm borrowing?")) {
      toast("Checkout complete! ✅");
      clearAll();
      setCurrentStep(1);
      navigate("/");
    }
  };

  return (
    <div className="checkout px-16">
      <h2>Check Out</h2>
      {currentStep === 1 && (
        <>
          <StepOne
            personalInfo={personalInfo}
            setPersonalInfo={setPersonalInfo}
            libraryCardInfo={libraryCardInfo}
            setLibraryCardInfo={setLibraryCardInfo}
            handleNextSt={handleNextStep}
          />
          <button
            onClick={handleNextStep}
            disabled={!libraryCardInfo.fullName || !libraryCardInfo.cardNumber}
          >
            Next
          </button>
        </>
      )}

      {currentStep === 2 && (
        <StepTwo
          personalInfo={personalInfo}
          libraryCardInfo={libraryCardInfo}
          handlePreviousStep={handlePreviousStep}
          handleCheckboxChange={handleCheckboxChange}
          handleCheckout={handleCheckout}
          cart={cart}
          isChecked={isChecked}
        />
      )}
    </div>
  );
};
