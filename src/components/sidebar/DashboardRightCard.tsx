import { Box, Card } from '@mui/material';
import EarningsCard from '../card/EarningCard';
import ImpressionCard from '../card/ImpressionCard';
import EarningsByItemCard from '../card/EarningsByItemCard';
function DashboardRightCard() {
  return (
    <Box
    sx={{
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
  }}
    >
      <EarningsCard />
      <EarningsByItemCard />
      <ImpressionCard />    
    </Box>
  );
}

export default DashboardRightCard;
