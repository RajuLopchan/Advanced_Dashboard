import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { useGoogleLogin } from "@react-oauth/google";

import {
  Grid,
  TextField,
  Typography,
  Button,
  Box,
  FormControl,
  FormHelperText,
} from "@mui/material";

const schema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(1, "Password is required"),
});

type LoginForm = z.infer<typeof schema>;

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors},
  } = useForm<LoginForm>({
    resolver: zodResolver(schema),
  });

  const googleLogin = useGoogleLogin({
  onSuccess: tokenResponse => {
    console.log("Google login success", tokenResponse);
    // Save access_token to localStorage
    localStorage.setItem("token", tokenResponse.access_token);
    alert("Google login successful!");
  },
  onError: () => {
    alert("Google login failed");
  },
});

  const onSubmit = async (data: LoginForm) => {
    try {
      const res = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      console.log(res, 'login Response');

    const result = await res.json();
    if (!res.ok) throw new Error();

    localStorage.setItem("token", result.token);
    alert("Login successful!");
   }    catch {
    alert("Login failed");
  }
  };

  return (
    <Grid
      p={4}
      container
      spacing={4}
      width="55%"
      mx="auto"
      mt={4}
      sx={{ borderRadius: 2, backgroundColor: "white" }}
    >
      <Grid size={6}>
        <Typography
          variant="h4"
          gutterBottom
          color="rgba(60, 59, 59, 1)"
          fontSize="1.5rem"
        >
          Login
        </Typography>
        <Typography color="text.secondary" mb={2} fontSize="0.8rem">
          How do i get started lorem ipsum dolor at?
        </Typography>

        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <FormControl fullWidth sx={{ mb: 1 }} error={!!errors.username}>
            <TextField
              placeholder="Username"
              {...register("username")}
              error={!!errors.username}
            />
            <FormHelperText>{errors.username?.message}</FormHelperText>
          </FormControl>

          <FormControl fullWidth sx={{ mb: 2 }} error={!!errors.password}>
            <TextField
              type="password"
              placeholder="Password"
              {...register("password")}
              error={!!errors.password}
            />
            <FormHelperText>{errors.password?.message}</FormHelperText>
          </FormControl>

          <Typography
            color="text.secondary"
            mb={2}
            fontSize="0.8rem"
            textAlign="end"
          >
            <a href="" style={{ textDecoration: "none", fontSize: "1rem" }}>
              Forgot password
            </a>
          </Typography>

          <Button
            fullWidth
            variant="contained"
            size="large"
            sx={{ mb: 2.5, py: 1.5 }}
            type="submit"
          >
            Sign in
          </Button>
        </form>

       <Button
  fullWidth
  variant="outlined"
  size="large"
  sx={{
    mb: 2.5,
    py: 1.5,
    borderRadius: 5,
    borderColor: "rgba(60, 59, 59, 1)",
    color: "rgba(60, 59, 59, 1)",
  }}
  startIcon={
    <Box
      component="img"
      src="/assets/images/Googlee.svg"
      alt="Google"
      sx={{ width: 20, height: 20 }}
    />
  }
  onClick={() => googleLogin()}
>
  Sign in with Google
</Button>


        <Button
          fullWidth
          variant="outlined"
          size="large"
          sx={{
            mb: 2.5,
            py: 1.5,
            borderRadius: 5,
            borderColor: "rgba(60, 59, 59, 1)",
            color: "rgba(60, 59, 59, 1)",
          }}
          startIcon={
            <Box
              component="img"
              src="/assets/images/Facebook.svg"
              alt="Facebook"
              sx={{ width: 20, height: 20 }}
            />
          }
        >
          Sign in with Facebook
        </Button>

        <Typography color="text.secondary" mb={2} fontSize="0.8rem">
          <Box sx={{ display: "flex", gap: 2 }}>
            Don’t have an account.{" "}
            <a href="" style={{ textDecoration: "none", fontSize: "0.9rem" }}>
              Sign up
            </a>
          </Box>
        </Typography>
      </Grid>

      <Grid size={6}>
        <img
          src="/assets/images/LoginFrame.svg"
          alt=""
          width="100%"
          height="100%"
        />
      </Grid>
    </Grid>
  );
}

export default Login;
