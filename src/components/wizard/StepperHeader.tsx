import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { Box } from "@mui/material";

interface StepperHeaderProps {
  steps: string[];
  activeStep: number;
}

function StepperHeader({ steps, activeStep }: StepperHeaderProps) {
  return (
    <Box sx={{ width: "50%", mt: 1.5, mb: 2, mx: "auto" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={index}>
            <StepLabel
              sx={{
                "& .MuiStepLabel-label": {
                  fontSize: "1.2rem",
                  marginLeft: "7px",
                },
              }}
            >
              {label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}

export default StepperHeader;
