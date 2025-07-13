// Success.tsx
import { Box, Typography } from "@mui/material";

const Success = () => {
  return (
    <Box sx={{ textAlign: "center", mt: 8 }}>
      <Typography variant="h4" color="green">
        🎉 Form Successfully Submitted!
      </Typography>
      <Typography variant="subtitle1" mt={2}>
        Thank you for completing the form.
      </Typography>
    </Box>
  );
};

export default Success;
