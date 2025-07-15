import { useGoogleAuth } from "../../googleAuth/useGoogleAuth";
import CustomButton from "../../components/customButton/CustomButton";
import CustomTextField from "../../components/customTextfield/CustomTextfield";
import asioxInstance from "../../../axiosInstance";
import FormWrapper from "../../authForm/FormWrapper";
import { Link } from "react-router-dom";

import { Grid, Typography, Box } from "@mui/material";
import theme from "../../customtheme/Theme";

function Login() {
  const googleLogin = useGoogleAuth();

  const handleSubmit = async (data: FormData) => {
    try {
      const res = await asioxInstance.post("/auth/login", data);
      console.log("Login response:", res);
      localStorage.setItem("token", res.data.token);
      alert("Login successful!");
    } catch (error: any) {
      console.error("Login error:", error);
      alert(error.response?.data?.error || "Login failed");
    }
  };

  return (
    <Grid
      p={4}
      container
      spacing={4}
      width="60%"
      mx="auto"
      mt={4}
      sx={{ borderRadius: 2, backgroundColor: "white" }}
    >
      <Grid size={6}>
        <Box width={"85%"} height={"60%"} mx="auto" my={4}>
          <Typography
            variant="h4"
            gutterBottom
            color="rgba(60, 59, 59, 1)"
            fontSize="1.5rem"
          >
            Login
          </Typography>

          <Typography color="text.secondary" mb={2} fontSize="0.8rem">
            How do I get started lorem ipsum dolor at?
          </Typography>

          <FormWrapper onSubmit={handleSubmit}>
            <CustomTextField label="Username" name="username" />
            <CustomTextField label="Password" name="password" type="password" />

            <Typography
              color="text.secondary"
              mb={2}
              fontSize="0.8rem"
              textAlign="end"
            >
              <Link
                to="/register"
                style={{ textDecoration: "none", fontSize: "0.9rem" }}
              >
                Forgot Password
              </Link>
            </Typography>

            <CustomButton
              label="Sign in"
              size="large"
              fullWidth
              variant="contained"
              type="submit"
              sx={{ mb: 2.5, borderRadius: 2 }}
            />

            <CustomButton
              label="Sign in with Google"
              size="large"
              fullWidth
              variant="outlined"
              imageSrc="/assets/images/Googlee.svg"
              sx={{
                borderRadius: 5,
                borderColor: theme.palette.text.secondary,
                color: "rgba(60, 59, 59, 1)",
                mb: 2.5,
              }}
              onClick={() => googleLogin()}
            />
            <Box sx={{ display: "flex", gap: 1.5, justifyContent: "center" }}>
              <Typography color="text.secondary" mb={2} fontSize="0.8rem">
                Don’t have an account?
              </Typography>
              <Link
                to="/auth/register"
                style={{ textDecoration: "none", fontSize: "0.9rem" }}
              >
                Sign up
              </Link>
            </Box>
          </FormWrapper>
        </Box>
      </Grid>

      <Grid size={6}>
        <img
          src="/assets/images/LoginFrame.svg"
          alt="Login illustration"
          width="100%"
          height="100%"
        />
      </Grid>
    </Grid>
  );
}

export default Login;
