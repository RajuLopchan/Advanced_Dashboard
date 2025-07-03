import { Box } from '@mui/material';
import Sidebar from './components/sidebar/Sidebar';
import Navbar from './components/Navbar/Navbar';
// import DashboardRightSidebar from './components/sidebar/DashboardRightSidebar';
import Dashboard from './pages/Dashboard';

// 🚨 ADD these imports for routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NewProjectForm from './pages/NewProject';

function App() {
  return (
    // 🚨 Wrap your entire layout with <Router>
    <Router>
      <Box sx={{ display: 'flex', minHeight: '100vh', backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        <Sidebar />

        <Box sx={{ display: 'flex', flexDirection: 'column', left: '280px', width: '100%' }}>
          <Navbar />

          {/* 🚨 Define Routes here */}
          <Routes>
            <Route path="/" element={<Dashboard />} /> {/* Default route */}
            <Route path="/dashboard" element={<Dashboard />} /> {/* Dashboard route */}
            <Route path="/projects/newproject" element={<NewProjectForm />} />
            {/* Add other routes here in the future */}
          </Routes>
        </Box>
      </Box>
    </Router>
  );
}

export default App;
