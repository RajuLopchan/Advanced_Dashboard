import { useState } from "react";

const useStepper = (totalSteps: number) => {
  const [activeStep, setActiveStep] = useState(0);

  const nextStep = () => setActiveStep((prev) => Math.min(prev + 1, totalSteps - 1));
  const previousStep = () => setActiveStep((prev) => Math.max(prev - 1, 0));

  return {
    activeStep,
    nextStep,
    previousStep,
    isFirstStep: activeStep === 0,
    isLastStep: activeStep === totalSteps - 1,
    totalSteps,
  };
};

export default useStepper;
