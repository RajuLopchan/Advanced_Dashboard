import { Box } from '@mui/material';
import EarningsCard from '../card/EarningCard';
import ImpressionCard from '../card/ImpressionCard';
import EarningsByItemCard from '../card/EarningsByItemCard';
function DashboardRightSidebar() {
  return (
    <Box
     sx={{
    position: 'fixed',
    right: 10,
    top: '70px',
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
    width: 260,
  }}
    >
      <EarningsCard />
      <EarningsByItemCard />
      <ImpressionCard />    
    </Box>
  );
}

export default DashboardRightSidebar;
