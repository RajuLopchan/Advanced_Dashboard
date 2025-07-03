import{Box} from '@mui/material'
import DashboardCard from '../components/card/DashboardCard'
import SalesByAgeChart from '../components/charts/SalesByAgeChart'
import DashboardRightSidebar from '../components/sidebar/DashboardRightSidebar'
function Dashboard() {
  return (
     <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          {/* Main scrollable content */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 3,
              width: '940px',
              overflowY: 'auto',
              zIndex: 0,
              p:2,
              mt: 7
            }}
          >
            <DashboardCard />
            <SalesByAgeChart />
          </Box>
          <DashboardRightSidebar />
        </Box>
  )
}

export default Dashboard
