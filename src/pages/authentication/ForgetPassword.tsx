import { Typography, TextField, Button, Card } from "@mui/material";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <Card
      sx={{
        px: 12,
        py: 7,
        borderRadius: 5,
        mx: "auto",
        width: 500,
        mt: 10,
        backgroundColor: "white",
      }}
    >
      <Typography
        variant="h5"
        gutterBottom
        textAlign={"center"}
        color="rgba(60, 59, 59, 1)"
        fontSize={"1.2rem"}
      >
        Forgot password?
      </Typography>

      <Typography
        color="text.secondary"
        mb={3}
        textAlign={"center"}
        fontSize={"0.8rem"}
      >
        No worries, we'll send you reset instruction.
      </Typography>

      <Typography variant="subtitle2" mb={1} color="rgba(60, 59, 59, 1)">
        Email
      </Typography>
      <TextField fullWidth placeholder="Enter your email" sx={{ mb: 2 }} />

      <Button
        fullWidth
        variant="contained"
        size="large"
        sx={{ mb: 3, py: 1.5 }}
      >
        Reset Password
      </Button>

      <Link
        to="/auth/login"
        style={{ textDecoration: "none", fontSize: "0.9rem",display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        Back to login
      </Link>
    </Card>
  );
};

export default ForgotPassword;

