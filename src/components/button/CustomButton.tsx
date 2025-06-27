import  Button  from '@mui/material/Button';
import type { ButtonProps } from '@mui/material';

// Custom props, extending all MUI ButtonProps
type Props = {
  label: string; // Custom required prop
} & ButtonProps; // Include all default MUI Button props

// Functional component
const CustomButton = ({ label, ...rest }: Props) => {
  return <Button {...rest}>{label}</Button>;
};

export default CustomButton;