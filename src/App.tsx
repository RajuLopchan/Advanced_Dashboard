import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Dashboard from './pages/Dashboard';
import Analytics from './pages/Analytics';
import Setting from './pages/Setting';
import NewProjectForm from './pages/NewProject';

function App() {
  return (
    <Router>
      <Routes>
        {/* Layout Route */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} /> {/* default / renders Dashboard */}
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="projects/newproject" element={<NewProjectForm />} />
          <Route path="account/setting" element={<Setting />} />
          {/* Add more nested routes here */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
