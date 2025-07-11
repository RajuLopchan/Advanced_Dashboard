import React from "react";
import { Typography } from "@mui/material";

interface FormHeaderProps {
  title: string;
  subtitle: React.ReactNode;
}

const FormHeader: React.FC<FormHeaderProps> = ({ title, subtitle }) => {
  return (
    <>
      <Typography variant="h6" mb={1} style={{ color: "rgba(63, 62, 62, 0.95)" , fontSize: "1.2rem"}}>
        {title}
      </Typography>
        <Typography variant="body2" mb={2} color="text.secondary" fontSize={"0.8rem"}>
          {subtitle}
        </Typography>

    </>
  );
};

export default FormHeader;
