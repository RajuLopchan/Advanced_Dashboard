import { Box, Grid } from "@mui/material";
import FormHeader from "./FormHeader";
import Textfield from "./Textfield";

const AddressStep = () => {
  return (
    <>
      <Box sx={{ mb: 2, textAlign: "center" }}>
        <FormHeader
          title="Your address details"
          subtitle="Fill in your street, city, and country information."
        />
      </Box>

      <Grid container spacing={2}>
        <Grid size={6}>
          <Textfield label="Street name" placeholder="Soft" name="streetname" />
        </Grid>
        <Grid size={6}>
          <Textfield label="Street no" placeholder="197" name="streetno" />
        </Grid>
        <Grid size={6}>
          <Textfield label="City" placeholder="Berlin" name="city" />
        </Grid>
        <Grid size={6}>
          <Textfield label="Country" placeholder="Germany" name="country" />
        </Grid>
      </Grid>
    </>
  );
};

export default AddressStep;
