import { BrowserRouter as Router } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <GoogleOAuthProvider clientId="1010661446468-j6stho9jprjshqos1hdanqtrbk6i4r8a.apps.googleusercontent.com">
      <Router>
        <AppRoutes />
      </Router>
    </GoogleOAuthProvider>
  );
}

export default App;
