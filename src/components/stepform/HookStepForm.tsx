import { Box, Button } from "@mui/material";
import About from "../../components/wizard/About";
import Account from "../../components/wizard/Account";
import Address from "../../components/wizard/Address";
import StepperHeader from "../../components/wizard/StepperHeader";
import useStepper from "../hooks/UseStepper";

const HookStepForm = () => {
  const steps = ["About", "Account", "Address"];
  const { activeStep, handleNext, handlePrevious, totalSteps } = useStepper(steps.length);

  const StepContentWrapper = ({ children }: { children: React.ReactNode }) => (
    <Box
      sx={{
        p: 3,
        borderRadius: 2,
        width: "50%",
        marginX: "auto",
        backgroundColor: "white",
      }}
    >
      {children}
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          mt: 3,
          gap: 3,
          width: "100%",
        }}
      >
        <Button variant="outlined" size="small" disabled={activeStep === 0} onClick={handlePrevious}>
          Previous
        </Button>

        <Button variant="contained" size="small" onClick={handleNext}>
          {activeStep === totalSteps - 1 ? "Finish" : "Next"}
        </Button>
      </Box>
    </Box>
  );

  const getStepContent = (stepIndex: number) => {
    switch (stepIndex) {
      case 0:
        return (
          <StepContentWrapper>
            <About />
          </StepContentWrapper>
        );
      case 1:
        return (
          <StepContentWrapper>
            <Account />
          </StepContentWrapper>
        );
      case 2:
        return (
          <StepContentWrapper>
            <Address />
          </StepContentWrapper>
        );
      default:
        return null;
    }
  };

  return (
    <Box sx={{ width: "100%" }}>
      <StepperHeader steps={steps} activeStep={activeStep} />
      {getStepContent(activeStep)}
    </Box>
  );
};

export default HookStepForm;
