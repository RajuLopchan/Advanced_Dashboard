import { Box } from "@mui/material";
import FormHeader from "./FormHeader";
import CheckboxGrid from "./CheckboxGrid";

const AccountStep = () => {
  return (
    <>
      <Box sx={{ mb: 2, textAlign: "center" }}>
        <FormHeader
          title="What are you doing? (checkboxes)"
          subtitle={
            <>
              Give us more detail about you. What do you enjoy doing in <br /> your spare time?
            </>
          }
        />
      </Box>
      <CheckboxGrid />
    </>
  );
};

export default AccountStep;
