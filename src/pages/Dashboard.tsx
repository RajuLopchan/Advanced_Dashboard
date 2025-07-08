import{Box, Grid} from '@mui/material'
import DashboardCard from '../components/card/DashboardCard'
import SalesByAgeChart from '../components/charts/SalesByAgeChart'
import DashboardRightCard from '../components/sidebar/DashboardRightCard'
function Dashboard() {
  return (
     <> 
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Grid container spacing={9} display={'flex'}>
          <Grid size={9}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 3,
              overflowY: 'auto',
              zIndex: 0,
              width: '100%',
            }}
          >

            <DashboardCard />
            <SalesByAgeChart />
          </Box>
          </Grid>

          <Grid size={3}>
          <DashboardRightCard />
          </Grid>
          
          </Grid>
          </Box>
        </>
  )
}

export default Dashboard
