import { useState } from 'react';
import type { TextFieldProps } from '@mui/material';
import {TextField, InputAdornment, IconButton,} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

type Props = {
label: string;
type?: 'text' | 'password' | 'email' | 'date';
} & TextFieldProps;

const Inputbox = ({ label, type = 'text', ...rest }: Props) => {
const [show, setShow] = useState(false);
const isPassword = type === 'password';

return (
    <TextField
    label={type === 'date' ? undefined : label}
    type={isPassword ? (show ? 'text' : 'password') : type}
    variant="outlined"
    fullWidth
    slotProps={{
        ...(type === 'date' && { inputLabel: { shrink: true } }),
        ...(isPassword && {
        input: {
            endAdornment: (
            <InputAdornment position="end">
                <IconButton onClick={() => setShow(!show)} edge="end">
                {show ? <VisibilityOff /> : <Visibility />}
                </IconButton>
            </InputAdornment>
            ),
        },
        }),
    }}
    {...rest}
    />
);
};

export default Inputbox;
