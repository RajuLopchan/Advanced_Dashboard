import { Drawer, List, Box } from '@mui/material';
import SidebarGroup from './SidebarGroup';
import UserProfile from './UserProfile';

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        '& .MuiDrawer-paper': {
          backgroundColor: '#ffffff',
          boxSizing: 'border-box',
          border: '1px solid #DBDCDE',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
      }}
    >
      <Box sx={{ m: 4, display: 'flex', justifyContent: 'center' }}>
        <img src="/assets/images/logo.svg" alt="Logo" style={{ width: 100, height: 80 }} />
      </Box>

      <Box>
        <List sx={{ m: 2, width: 250 }}>
          <SidebarGroup />
        </List>

        <Box sx={{ mt: '190px' }}>
          <UserProfile />
        </Box>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
