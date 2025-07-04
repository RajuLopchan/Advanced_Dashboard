import { Box, Typography} from '@mui/material';
import DashboardStatusCard from './DashboardStatusCard';
import { Description } from '@mui/icons-material';
import GradientBarChart from '../charts/GradientBarChart';
function DashboardCard() {
return (
    <Box sx={{
        bgcolor: 'white',
        p: 2,
        borderRadius: 2,
        boxShadow: 2,
    }}>
        <Typography variant="h6" sx={{ fontSize: '1rem', fontWeight: 'bold', ml: 3, mt: 2, color: "#333"}}>
            Active users right now
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 8}}>
        <Box >
        <Typography variant="h1" sx={{ fontSize: '3rem', fontWeight: 'bold', ml: 3, mt: 2, color: "primary.main"}}>
            300
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box>
                <Description sx={{ color: 'primary.main', fontSize: '1.5rem', ml: 3, mt: 2 }} />
            </Box>
            <Box>
                <Typography variant="body2" sx={{ fontSize: '0.8rem', fontWeight: 'bold', ml: 3, mt: 2,mb: 2, color: "#333"}}>
                    Page view per <br /> minute
                </Typography>
            </Box>
        </Box>
        <Box sx={{height:'75px'}}>
        <img src="/assets/images/Vectors.svg" alt=""/>
        </Box>
        <Typography variant="body2" sx={{ fontSize: '0.8rem', fontWeight: 'bold', ml: 3,mb: 7, color: "#333"}}>
            Upgrade your payout <br /> method in setting
        </Typography>
        </Box>
        <Box>
            <GradientBarChart />
        </Box>
        </Box>
        <DashboardStatusCard />
    </Box>
);
};

export default DashboardCard;