import CustomButton from "./CustomButton"
import { Stack, Box, Typography, Chip } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PushPinIcon from '@mui/icons-material/PushPin';
import MenuIcon from '@mui/icons-material/Menu';

function buton() {
  return (
    <div><Stack spacing={4} padding={4} alignItems="center">
      {/* Large button */}
      <CustomButton label="Button" size="large" />
      {/* Medium button */}
      <CustomButton label="Button" size="medium" />
      {/* Small button */}
      <CustomButton label="Button" size="small" />
      {/* Small outlined button */}
      <CustomButton label="Button" variant="outlined" size="small" />
      {/* Medium outlined button */}
      <CustomButton label="Button" variant="outlined" size="medium" />
      {/* Text button with icon */}
      <CustomButton label="Button" variant="text" size="small" endIcon={<ExpandMoreIcon />} />
      {/* Pinned button */}
      <Box display="flex" alignItems="center" gap={1}>
        <CustomButton label="Button" variant="text" size="small" />
        <PushPinIcon fontSize="small" />
        <Typography variant="body2" color="text.secondary">PINNED</Typography>
      </Box>
      {/* Toggle style buttons (mock) */}
      <Box display="flex">
        <CustomButton
          label="Text"
          variant="text"
          size="medium"
          startIcon={<MenuIcon />}
          sx={{
            backgroundColor: '#f0f0ff',
            color: '#6e6e6e',
            width: 92,
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
          }}
        />
        <CustomButton
          label="Text"
          variant="contained"
          size="medium"
          startIcon={<MenuIcon />}
          sx={{
            backgroundColor: '#6E39CB',
            color: '#fff',
            width: 92,
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0
          }}
        />
      </Box>
      {/* Outlined + icon */}
      <CustomButton
        label="Add Friend"
        variant="outlined"
        size="small"
        endIcon={<PersonAddIcon />}
        sx={{ width: 113, height: 32, fontSize: '12px' }}
      />
      {/* Pill-style orange filled */}
      <CustomButton
        label="9.7%"
        size="small"
        sx={{
          backgroundColor: '#FFE1AD',
          color: '#fff',
          borderRadius: '999px',
          width: 92,
          height: 27
        }}
      />
      {/* Grey border pill */}
      <CustomButton
        label="Showing your Activity"
        variant="outlined"
        size="medium"
        sx={{
          width: 151,
          height: 31,
          fontSize: '12px',
          borderRadius: 1,
          border: '1px solid #B4B2B7',
        }}
      />
      {/* Dashed large with + icon */}
      <CustomButton
        label=""
        variant="outlined"
        size="large"
        startIcon={<AddIcon />}
        sx={{
          border: '2px dashed #B4B2B7',
          color: '#3A3541',
          fontSize: '24px'
        }}
      />
      {/* Purple rounded label */}
      <Chip label="Today" sx={{ bgcolor: '#EDE7F6', color: '#6E39CB', fontWeight: 500, width: 61, height: 24 }} />
    </Stack></div>
  )
}

export default buton