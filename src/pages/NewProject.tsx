import {
  Box,
  Typography,
} from '@mui/material';
// import CloudUploadIcon from '@mui/icons-material/CloudUpload';

// const tags = ['Choice 1', 'Choice 2', 'Choice 3'];

const NewProject = () => {
  return (
    <Box
      sx={{
        height: '100%',
        bgcolor: '#f9fafb',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        p: 2,
      }}
    >
    <Typography variant="h6">New Project</Typography>
    </Box>
  );
};

export default NewProject;
