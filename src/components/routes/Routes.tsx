import Dashboard from '../../pages/Dashboard';
import Analytics from '../../pages/Analytics';
import NewProjectForm from '../../pages/NewProject';
import Setting from '../../pages/Setting';

const publicRoutes = [
  {
    path: '/',
    element: Dashboard,
    index: true,
  },
  {
    path: 'dashboard',
    element: Dashboard,
  },
  {
    path: 'analytics',
    element: Analytics,
  },
  {
    path: 'projects/newproject',
    element: NewProjectForm,
  },
  {
    path: 'account/setting',
    element: Setting,
  },
];

export default publicRoutes;
