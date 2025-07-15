import { useState } from "react";
import { ZodError, type ZodIssue } from "zod";
import {
  Box,
  Button,
  Snackbar,
  Alert
} from "@mui/material";
import {
  FormProvider,
  useForm,
  type FieldValues,
  type UseFormSetError,
  type ErrorOption,
  type Path,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowBackRounded, ArrowForwardRounded } from "@mui/icons-material";

import { aboutSchema, accountSchema, addressSchema } from "../../components/wizard/Schemas";
import AboutStep from "../wizard/AboutStep";
import AccountStep from "../wizard/AccountStep";
import AddressStep from "../wizard/AddressStep";
import StepperHeader from "../../components/wizard/StepperHeader";
import useStepper from "../../hooks/UseStepper";

const combinedSchema = aboutSchema.merge(accountSchema).merge(addressSchema);

const steps = [
  { label: "About", schema: aboutSchema, element: <AboutStep /> },
  { label: "Account", schema: accountSchema, element: <AccountStep /> },
  { label: "Address", schema: addressSchema, element: <AddressStep /> },
];

function handleZodErrors<TFieldValues extends FieldValues>(
  error: ZodError,
  setError: UseFormSetError<TFieldValues>
) {
  error.errors.forEach((issue: ZodIssue) => {
    if (issue.path.length === 0) return;
    const fieldName = issue.path.join(".") as Path<TFieldValues>;
    const errorOptions: ErrorOption = {
      type: "manual",
      message: issue.message,
    };
    setError(fieldName, errorOptions);
  });
}

const HookStepForm = () => {
  const methods = useForm({
    mode: "onChange",
    resolver: zodResolver(combinedSchema),

  });

  const { handleSubmit, getValues, setError, reset } = methods;
  const { activeStep, isFirstStep, isLastStep, nextStep, previousStep } = useStepper(steps.length);

  const [successOpen, setSuccessOpen] = useState(false);

  const handleNext = async () => {
    const currentSchema = steps[activeStep].schema;
    try {
      await currentSchema.parseAsync(getValues());
      if (isLastStep) {
        handleSubmit(onSubmit)();
      } else {
        nextStep();
      }
    } catch (error) {
      if (error instanceof ZodError) {
        handleZodErrors(error, setError);
      }
    }
  };

  const onSubmit = (data: FieldValues) => {
    console.log("Final form submission data:", data);
    setSuccessOpen(true);
    reset();
  };

  const handleClose = () => {
    setSuccessOpen(false);
  };

  const CurrentStep = steps[activeStep].element;

  return (
    <>
      <StepperHeader steps={steps.map((s) => s.label)} activeStep={activeStep} />
      <Box sx={{ padding: "24px", maxWidth: "650px", margin: "0 auto", backgroundColor: "white" }}>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box mb="24px">{CurrentStep}</Box>
            <Box display="flex" justifyContent="flex-end" gap="16px">
              {!isFirstStep && (
                <Button variant="outlined" onClick={previousStep} startIcon={<ArrowBackRounded />}>
                  Previous
                </Button>
              )}
              <Button variant="contained" onClick={handleNext} endIcon={<ArrowForwardRounded />}>
                {isLastStep ? "Finish" : "Next"}
              </Button>
            </Box>
          </form>
        </FormProvider>
      </Box>

      <Snackbar
        open={successOpen}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Form submitted successfully!
        </Alert>
      </Snackbar>
    </>
  );
};

export default HookStepForm;
