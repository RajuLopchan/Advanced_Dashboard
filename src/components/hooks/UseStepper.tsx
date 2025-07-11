import { useState } from "react";

const useStepper = (totalSteps: number) => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prev) => Math.min(prev + 1, totalSteps));
  };

  const handlePrevious = () => {
    setActiveStep((prev) => Math.max(prev - 1, 0));
  };


  return {
    activeStep,
    handleNext,
    handlePrevious,
    totalSteps,
  };
};

export default useStepper;
