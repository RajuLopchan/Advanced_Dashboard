import { Drawer, List, Box } from '@mui/material';
import SidebarGroup from './SidebarGroup';
import UserProfile from './UserProfile';

const Sidebar = () => {
  return (
    <Drawer
  variant="permanent"
  sx={{
    width: 280, // ✅ set width here
    flexShrink: 0,
    '& .MuiDrawer-paper': {
      width: 280, // ✅ set same width for paper
      backgroundColor: '#ffffff',
      boxSizing: 'border-box',
      border: '1px solid #DBDCDE',
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
    },
  }}
>
      {/* Fixed logo at top */}
      <Box
        sx={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          my: 2,
          backgroundColor: '#ffffff',
        }}
      >
        <img src="/assets/images/logo.svg" alt="Logo" style={{ width: 90, height: 60 }} />
      </Box>

      {/* Sidebar content with top padding to avoid overlap */}
      <Box
        sx={{
          flex: 1,
          width: '100%',
          overflowY: 'auto',
          // Hide scrollbar but keep scroll functionality
        '&::-webkit-scrollbar': {
        display: 'none',
    },
        }}
      >
        <List sx={{ m: 1, width: 250 }}>
          <SidebarGroup />
        </List>
      </Box>

      {/* Fixed UserProfile at bottom */}
      <Box
        sx={{
          position: 'sticky',
          bottom: 0,
          zIndex: 1,
          width: '100%',
          backgroundColor: '#ffffff',
          display: 'flex',
          justifyContent: 'center',
          mb: 1,
        }}
      >
        <UserProfile />
      </Box>
    </Drawer>
  );
};

export default Sidebar;
