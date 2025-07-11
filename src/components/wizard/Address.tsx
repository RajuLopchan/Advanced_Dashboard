import { Box, Card,Grid} from "@mui/material";
import FormHeader from "./FormHeader";
import Textfield from "./Textfield";

const Address = () => {
  return (
    <>
    <Card sx={{ p: 3, borderRadius: 2, width:'50%', marginX: 'auto', backgroundColor: 'white',mt:2}}>
      <Box sx={{mb:2,textAlign:'center'}}>
      <FormHeader
      title="What are you doing? (checkboxes)"
      subtitle={
        <>
          Give us more detail about you. What do you enjoy doing in <br /> your spare time?
        </>
      }
    />
      </Box>
      <form>
         <Grid container spacing={3}>
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

      </form>
   </Card>
    </>
  );
};

export default Address;
