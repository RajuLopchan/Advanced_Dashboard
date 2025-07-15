import { TextField, Typography } from "@mui/material";
import { useFormContext } from "react-hook-form";
type CustomTextFieldProps = {
  label: string;
  type?: string;
  name:string;
}
const CustomTextField = ({
  label,
  name,
  type = "text",
  ...props
}: CustomTextFieldProps) => {
  const { formState: { errors }, register } = useFormContext();
  const fieldError = errors[name];
  return (
    <>
      <Typography variant="body1" color="text.primary" >
        {label}
      </Typography>
      <TextField
        placeholder={label}
        fullWidth
        variant="outlined"
        size="small"
        error={!!fieldError}
        type={type}
        {...props}
        {...register(name )}
        sx={{mb:1.5}}
      />
      {fieldError && (
        <Typography variant="caption" color="error" mt={0.5}>
          {fieldError?.message as string}
        </Typography>
      )}
    </>
  );
};
export default CustomTextField;