import Dashboard from '../../pages/Dashboard';
import Analytics from '../../pages/Analytics';
import NewProjectForm from '../../pages/NewProject';
import Setting from '../../pages/Setting';
import Billing from '../../pages/Billing';
import Invoice from '../../pages/Invoice';
import Security from '../../pages/Security';
import ProfileOverview from '../../pages/ProfileOverview';
import Teams from '../../pages/Teams';
import AllProject from '../../pages/AllProject';
import Reports from '../../pages/Reports';
import NewUser from '../../pages/NewUser';
import GeneralProject from '../../pages/GeneralProject';
import Timeline from '../../pages/Timeline';
import PricingPage from '../../pages/PricingPage';
import Charts from '../../pages/Charts';
import Notification from '../../pages/Notification';
import Chat from '../../pages/Chat';
import Kanban from '../../pages/Kanban';
import Wizard from '../../pages/Wizard';
import DataTable from '../../pages/DataTable';
import Calendar from '../../pages/Calander';
import EcommerceOverview from '../../pages/EcommerceOverview';
import Products from '../../pages/Products';
import Orders from '../../pages/Orders';
import Login from '../../pages/Login';
import Register from '../../pages/Register';
import ForgotPassword from '../../pages/ForgetPassword';
import AccountSetting from '../../pages/AccountSetting';

const publicRoutes = [
  { path: '/', element: Dashboard, index: true },
  { path: '/dashboard', element: Dashboard },
  { path: '/analytics', element: Analytics },

  // Projects
  { path: '/projects/newproject', element: NewProjectForm },
  { path: '/projects/general', element: GeneralProject },
  { path: '/projects/timeline', element: Timeline },

  // Account related
  { path: '/account/setting', element: Setting },
  { path: '/account/billing', element: Billing },
  { path: '/account/invoice', element: Invoice },
  { path: '/account/security', element: Security },
  { path: '/account/accountsetting', element: AccountSetting },

  // Profile
  { path: '/pages/profile/overview', element: ProfileOverview },
  { path: '/pages/profile/teams', element: Teams },
  { path: '/pages/profile/allproject', element: AllProject },

  // Users
  { path: '/pages/users/reports', element: Reports },
  { path: '/pages/users/newuser', element: NewUser },

  // Pages
  { path: '/pages/pricing', element: PricingPage },
  { path: '/pages/charts', element: Charts },
  { path: '/pages/notification', element: Notification },
  { path: '/pages/chat', element: Chat },

  // Applications
  { path: '/applications/kanban', element: Kanban },
  { path: '/applications/wizard', element: Wizard },
  { path: '/applications/datatable', element: DataTable },
  { path: '/applications/calendar', element: Calendar },

  // E-commerce
  { path: '/ecommerce/overview', element: EcommerceOverview },
  { path: '/ecommerce/products', element: Products },
  { path: '/ecommerce/orders', element: Orders },

  // Authentication
  { path: '/auth/login', element: Login },
  { path: '/auth/register', element: Register },
  { path: '/auth/forgot-password', element: ForgotPassword },
];

export default publicRoutes;
