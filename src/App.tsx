import { Box } from '@mui/material';
import Sidebar from './components/sidebar/Sidebar'
// import CustomCard from './components/customcard/CustomCard';

// import { BarChart } from "@mui/icons-material";
// import LineChart from "./components/chart/LineChart";

function App() {
  return (
    <>
  {/* <Box>
      <Inputbox label="Text Input" type="text" />
      <br /><br />
      <Inputbox label="Password Input" type="password" />
      <br /><br />
      <Inputbox label="Email Address" type="email" />
      <br /><br />
      <Inputbox label="Pick a Date" type="date" />
      <br /><br />
      <Inputbox label="Multiline Description" type="text" multiline />
  </Box> */}


  <Box sx={{ p: 2, m:4 }}>
    <Sidebar />
    </Box>

  {/* <CustomCard /> */}
  {/* <BarChart />
  <LineChart /> */}
  </>
  );
}

export default App;