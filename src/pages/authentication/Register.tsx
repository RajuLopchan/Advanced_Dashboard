import { Grid } from "@mui/material"
import { TextField, Typography, Button,Box } from "@mui/material"

function Register() {
  return (
    <Grid container spacing={4} width={'55%'} marginX={'auto'} marginTop={8} sx={{ borderRadius: 2,backgroundColor: 'white' }} >
      <Grid size={6} p={2}>
         <Typography variant="h4"  gutterBottom color='rgba(60, 59, 59, 1)' fontSize={'1.5rem'}>
          Sign up
        </Typography>
         <Typography color="text.secondary" mb={2}  fontSize={'0.8rem'}>
          Start your 30-day free trial.
        </Typography>
         <TextField
              fullWidth
              placeholder="Full Name"
              sx={{ mb: 1 }}
          />
          <TextField
              fullWidth
              placeholder="Email Address"
              sx={{ mb: 1 }}
          />
          <TextField
              fullWidth
              placeholder="Password"
              sx={{ mb: 1 }}
          />
           <Typography color="text.secondary" mb={2}  fontSize={'0.8rem'}>
          You are agreeing to the <a href="">Terms of Services</a> <br /> and <a href="">Privacy Policy</a>
        </Typography>

         <Button
          fullWidth
          variant="contained"
          size="large"
          sx={{ mb: 2.5, py: 1.5 }}
        >
          Get started
        </Button>
        <Typography color="text.secondary" mb={2}  fontSize={'0.8rem'}>
       
          <Box sx={{ display: 'flex', gap: 2 }}>
          Already a member? <a href="">Sign in</a>
           </Box>
        </Typography>
      </Grid>
      <Grid size={6}>
        <img src="/assets/images/LoginFrame.svg" alt="" width={'100%'} height={'100%'}/>
      </Grid>
    </Grid>
  )
}

export default Register;
