import { Box, Avatar, Typography, Grid, Card} from "@mui/material";
import FormHeader from "./FormHeader";
import Textfield from "./Textfield";

const About = () => {
  return (
    <>
    <Card sx={{ p: 3, borderRadius: 2, width:'50%', marginX: 'auto', backgroundColor: 'white',mt:2}}>
      <Box sx={{mb:2,textAlign:'center'}}>
      <FormHeader
      title="Let’s start with the basic information"
      subtitle={
        <>
          Let us know your name and email address. Use an address you don’t<br />
          mind other users contact you at
        </>
      }
    />
      </Box>
      <Box display="flex" gap={3}sx={{mb:4}}>
        <Avatar sx={{ width: 56, height: 56 }}>
          <img src="/assets/images/AboutProfile.png" alt="" width={56} />
        </Avatar>
        <Box>
        <Typography variant="h6" style={{ color: "rgba(83, 81, 81, 0.95)", fontSize: "1rem" }}>
          Profile photo
        </Typography>
        <Typography variant="subtitle1" sx={{ color: "rgba(111, 111, 111, 0.95)", fontSize: "0.8rem" }}>This will be displayed on your profile.</Typography>
        </Box>
      </Box>
      <form>
        <Grid container spacing={3}>
            <Grid size={6}>
              <Textfield label="First name" placeholder="Kame" name="firstName" />
            </Grid>
             <Grid size={6}>
              <Textfield label="Last name" placeholder="Williamson" name="lastName" />
            </Grid>
             <Grid size={6}>
              <Textfield label="Email Address" placeholder="kame@example.com" name="email" />
            </Grid>
             <Grid size={6}>
              <Textfield label="Date of Birth" placeholder="dd/mm/yyyy" name="dateOfBirth" />
            </Grid>
             <Grid size={6}>
              <Textfield label="City" placeholder="Berlin, Germany" name="city" />
            </Grid>
             <Grid size={6}>
              <Textfield label="Postal Code" placeholder="87532" name="postalCode" />
            </Grid>

        </Grid>

      </form>
   </Card>
    </>
  );
};

export default About;
