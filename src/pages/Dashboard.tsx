import{Box, Grid} from '@mui/material'
import DashboardCard from '../components/card/DashboardCard'
import SalesByAgeChart from '../components/charts/SalesByAgeChart'
import DashboardRightSidebar from '../components/sidebar/DashboardRightSidebar'
function Dashboard() {
  return (
     <>
        
          {/* Main scrollable content */}
          <Grid container spacing={2}>
            <Grid size={9}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 3,
              overflowY: 'auto',
              zIndex: 0,
              pl: 2,
              width: '100%',
            }}
          >

            <DashboardCard />
            <SalesByAgeChart />
          </Box>
          </Grid>
          <Grid size={7}>
          <DashboardRightSidebar />
          </Grid>
          </Grid>
        </>
  )
}

export default Dashboard
