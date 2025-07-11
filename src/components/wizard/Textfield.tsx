import { Typography, TextField } from "@mui/material";

interface TextfieldProps {
  label: string;
  placeholder?: string;
  name?: string;
}

const Textfield: React.FC<TextfieldProps> = ({ label, placeholder, name }) => {
  return (
    <div>
      <Typography>{label}</Typography>
      <TextField
        placeholder={placeholder}
        name={name}
      />
    </div>
  );
};

export default Textfield;
