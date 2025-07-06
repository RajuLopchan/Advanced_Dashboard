import { Outlet } from 'react-router-dom';
import Sidebar from '../components/sidebar/Sidebar';
import Navbar from '../components/Navbar/Navbar';
import { Box } from '@mui/material';

function MainLayout() {
  const sidebarWidth = 280; // match with Sidebar width

  return (
    <>
      <Navbar />

      <Box sx={{ display: 'flex' }}>
        <Sidebar />

        <Box
          component="main"
          sx={{
            width: { md: `calc(100vw - ${sidebarWidth}px)` },
            bgcolor: 'pink',
            border: '4px solid black',
            minHeight: 'calc(100vh - 60px)', // subtract navbar height
            mt: '60px', // navbar height margin-top
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </>
  );
}

export default MainLayout;
