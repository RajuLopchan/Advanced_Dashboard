import Button from '@mui/material/Button';
import type { ButtonProps } from '@mui/material';

type Props = {
  label: string;
  imageSrc?: string;
  imageAlt?: string;
} & ButtonProps;

const CustomButton = ({ label, imageSrc, imageAlt = "", ...rest }: Props) => {
  return (
    <Button {...rest}>
      {imageSrc && (
        <img
          src={imageSrc}
          alt={imageAlt}
          style={{ width: 20, height: 20, marginRight: 8 }}
        />
      )}
      
      {label}
    </Button>
  );
};

export default CustomButton;