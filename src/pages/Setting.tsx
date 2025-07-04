import {
  Grid,
  Typography,
  TextField,
  Avatar,
  Box,
  Card,
  Button,
  Input,
} from '@mui/material';
import CustomButton from '../components/button/CustomButton';
import { CloudUpload } from '@mui/icons-material';
import { useForm, Controller } from 'react-hook-form';
import type { Control } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRef } from 'react';

const schema = z.object({
  fullName: z
    .string()
    .min(1, "Full Name is required")
    .regex(/^[a-zA-Z\s]+$/, "Full Name can only contain letters and spaces"),
  lastName: z
    .string()
    .min(1, "Last Name is required"),
  email: z
    .string()
    .email("Invalid email address")
    .refine((val) => val.toLowerCase().endsWith("@gmail.com"), {
      message: "Email must be a Gmail address (gmail.com)",
    }),
  username: z
    .string()
    .min(4, "Username must be at least 4 characters")
    .regex(/^[a-zA-Z0-9_]+$/, "Username can only contain letters, numbers, and underscores"),
  phone: z
  .string()
  .regex(/^\+?[0-9\s\-()]+$/, "Invalid phone number format")
  .refine(val => {
    const digits = val.replace(/\D/g, '');
    return digits.length >= 10 && digits.length <= 15;
  }, {
    message: "Phone number must be between 10 and 15 digits",
  }),
  city: z
    .string()
    .min(1, "City is required"),
  country: z
    .string()
    .min(1, "Country is required"),
  zip: z
    .string()
    .min(1, "Zip code is required")
    .max(10, "Zip code can't exceed 10 characters")
    .regex(/^[a-zA-Z0-9\s-]+$/, "Invalid zip code format"),
});

type FormData = z.infer<typeof schema>;

type FormInputProps = {
  label: string;
  name: keyof FormData;
  control: Control<FormData>;
  placeholder: string;
};

const FormInput = ({ label, name, control, placeholder }: FormInputProps) => (
  <Grid size={6}>
    <Typography variant="subtitle2" gutterBottom color="black">
      {label}
    </Typography>
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field, fieldState }) => (
        <TextField
          {...field}
          fullWidth
          placeholder={placeholder}
          variant="outlined"
          size="small"
          error={!!fieldState.error}
          helperText={fieldState.error ? fieldState.error.message : ""}
        />
      )}
    />
  </Grid>
);

const Setting = () => {

  const inputRef = useRef<HTMLInputElement>(null)
  const { control, handleSubmit, reset } = useForm<FormData>({
  resolver: zodResolver(schema),
    mode: "onBlur",
    defaultValues: {
    fullName: '',
    lastName: '',
    email: '',
    username: '',
    phone: '',
    city: '',
    country: '',
    zip: '',
  },
});

const onSubmit = (data: FormData) => {
  console.log(data);
  reset();
};


  const fields = [
    { label: 'Full Name', name: 'fullName', placeholder: 'Enter first name' },
    { label: 'Last Name', name: 'lastName', placeholder: 'Enter last name' },
    { label: 'Email Address', name: 'email', placeholder: 'Enter email address' },
    { label: 'Username', name: 'username', placeholder: 'Enter user name' },
    { label: 'Phone No', name: 'phone', placeholder: 'Enter phone no' },
    { label: 'City', name: 'city', placeholder: 'Enter your city' },
    { label: 'Country Name', name: 'country', placeholder: 'Enter country name' },
    { label: 'Zip code', name: 'zip', placeholder: 'Enter zip code' },
  ];

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Box
          sx={{
            p: 2,
            width: 1200,
            mt: 8,
            mr: 5,
            backgroundColor: 'white',
            borderRadius: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Box>
            <Typography variant="h5" gutterBottom color="black">
              Setting Details
            </Typography>
            <Typography variant="body1" gutterBottom color="black">
              Update your photo and personal details here.
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: 3 }}>
            <CustomButton label="Cancel" variant="outlined" size="small" />
            <CustomButton
              label="Save"
              variant="contained"
              size="small"
              onClick={handleSubmit(onSubmit)}
            />
          </Box>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }} mr={7}>
        <Grid container spacing={3} width={1170} sx={{ justifyContent: 'flex-end', mt: 3 }}>
          <Grid size={8}>
            <Card sx={{ p: 3, backgroundColor: 'smoke', borderRadius: 2 }}>
              <Typography variant="h6" sx={{ mb: 1, color: 'black' }}>
                Personal information
              </Typography>
              <hr />
              <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={5} mt={4}>
                  {fields.map((field, index) => (
                    <FormInput
                      key={index}
                      label={field.label}
                      name={field.name as keyof FormData}
                      control={control}
                      placeholder={field.placeholder}
                    />
                  ))}
                </Grid>
              </form>
            </Card>
          </Grid>

          <Grid size={4}>
            <Card sx={{ p: 3, backgroundColor: 'smoke', borderRadius: 2 }}>
              <Typography variant="h6" color="black">
                Your Photo
              </Typography>
              <hr />

              <Box
                sx={{
                  py: 1.5,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                }}
              >
                <Avatar
                  alt="Anita Cruz"
                  src="/assets/images/Profile.svg"
                  sx={{ width: 48, height: 48 }}
                />
                <Box>
                  <Typography variant="body1" color="black">
                    Edit Your Photo
                  </Typography>
                  <Typography variant="body2" color="black">
                    Delete Update
                  </Typography>
                </Box>
              </Box>

              <Box
                sx={{
                  border: '2px dashed rgb(108, 118, 211)',
                  py: 6,
                  textAlign: 'center',
                  borderRadius: 1,
                  mt: 2,
                }}
                onDragOver={(e) => {
                  e.preventDefault();
                  console.log('drag over', e);
                }}
                onDragLeave={(e) => {
                  e.preventDefault();
                  console.log('drag leave',e);
                }}
                onDragEnter={(e) => {
                  e.preventDefault();
                  console.log('drag enter',e);
                }}
                onClick={() => inputRef.current?.click()}
              >
                <input ref={inputRef} type="file" accept="image/.png" style={{ display: 'none' }} onChange={(e)=> console.log(e, 'file')}/>
                <CloudUpload fontSize="medium" />
                <Typography variant="body2" sx={{ mt: 1 }}>
                  Click to upload or drag and drop <br /> SVG, PNG, JPG or GIF <br /> (max size: 800x400px)
                </Typography>
              </Box>
            </Card>

            <Card
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                p: 2.5,
                backgroundColor: 'smoke',
                borderRadius: 2,
                mt: 3,
              }}
            >
              <Box>
                <img src="/assets/images/Google.png" alt="" />
                <Typography variant="body2" sx={{ mt: 1, color: 'black', fontSize: '0.8rem' }}>
                  Use Google to sign in to your <br /> account.{' '}
                  <a href="" style={{ color: 'blue', textDecoration: 'none' }}>
                    Click here to learn more.
                  </a>
                </Typography>
              </Box>
              <Button
                variant="contained"
                size="small"
                sx={{ backgroundColor: 'rgb(107, 120, 234)' }}
              >
                Connected
              </Button>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Setting;
