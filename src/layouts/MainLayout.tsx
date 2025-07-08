import { Outlet } from 'react-router-dom';
import Sidebar from '../components/sidebar/Sidebar';
import Navbar from '../components/Navbar/Navbar';
import { Box } from '@mui/material';

function MainLayout() {
  return (
    <Box sx={{ display: 'flex', width: '100%', height: '100vh' }}>
      <Sidebar />

      <Box sx={{ display: 'flex', flexDirection: 'column', flex:'1' }}>
          <Navbar />

        <Box sx={{
          backgroundColor: "rgb(246, 246, 246)",
          flex: 1,
          overflowY: 'auto',
        }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}

export default MainLayout;
