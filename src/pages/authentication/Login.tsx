import { Grid } from "@mui/material"
import { TextField, Typography } from "@mui/material"

function Login() {
  return (
   
    <Grid container spacing={2} width={'70%'} marginX={'auto'} marginTop={4} >
      <Grid size={6}>
         <Typography variant="h5"  gutterBottom color='rgba(60, 59, 59, 1)' fontSize={'1.2rem'}>
          Forgot password?
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
      </Grid>
      <Grid size={6}>
        <img src="/assets/images/LoginFrame.svg" alt="" width={'100%'}/>
      </Grid>
    </Grid>

  )
}

export default Login
