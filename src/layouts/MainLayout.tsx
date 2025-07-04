import { Outlet } from 'react-router-dom';
import Sidebar from '../components/sidebar/Sidebar';
import Navbar from '../components/Navbar/Navbar';
import { Box } from '@mui/material';

function MainLayout() {
  const sidebarWidth = 280; // ✅ match sidebar width

  return (
 <>
      <Navbar />
      <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Box
        component="main"
        sx={{
          width: { md: `calc(100vw - ${sidebarWidth}px)` }, // ✅ updated width calculation
          bgcolor: 'pink',
          border: '4px solid black',
          minHeight: 'calc(100vh - 60px)',
          mt: '60px',
        }}
      >
        <Outlet />
      </Box>
      </Box>
      </>
  );
}

export default MainLayout;
