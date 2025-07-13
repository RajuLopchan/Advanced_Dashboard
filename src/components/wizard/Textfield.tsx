import React from "react";
import { Typography, TextField } from "@mui/material";
import { useFormContext } from "react-hook-form";

interface TextfieldProps {
  label: string;
  placeholder?: string;
  name: string;
  variant?: "outlined" | "filled" | "standard";
  type?: React.InputHTMLAttributes<unknown>["type"];
}

const Textfield: React.FC<TextfieldProps> = ({
  label,
  placeholder,
  name,
  variant = "outlined",
  type = "text",
}) => {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div>
      <Typography sx={{ mb: 1 }}>{label}</Typography>
      <TextField
        {...register(name)}
        placeholder={placeholder}
        name={name}
        variant={variant}
        type={type}
        fullWidth
        size="small"
        error={!!errors[name]}
        helperText={errors[name]?.message as string}
      />
    </div>
  );
};

export default Textfield;
