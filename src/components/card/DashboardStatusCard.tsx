import StatCard from './StatusCard';
import { Box } from '@mui/material';

function DashboardCards() {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly', width: '840px' }}>
      <StatCard
        imageSrc="/assets/images/Users.png"
        title="Users"
        value="35K"
        progress={45}
        progresscolor='primary'
        imageSize={30}
      />
      <StatCard
        imageSrc="/assets/images/Clicks.png"
        title="Clicks"
        value="1m"
        progress={45}
        progresscolor='success'
        imageSize={30}
      />
      <StatCard
        imageSrc="/assets/images/Sales.png"
        title="Sales"
        value="345$"
        progress={45}
        progresscolor='error'
        imageSize={30}
      />
      <StatCard
        imageSrc="/assets/images/Items.png"
        title="Items"
        value="68%"
        progress={45}
        progresscolor='info'
        imageSize={30}
      />
    </Box>
  );
}

export default DashboardCards;
