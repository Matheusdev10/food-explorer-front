import { BrowserRouter } from 'react-router-dom';
import { useAuth } from '../hooks/auth';
import { AppAdminRoutes } from './app.admin.routes';
import { AppRoutes } from './app.routes';
import { AuthRoutes } from './auth.routes';

export const Routes = () => {
  const { user } = useAuth();
  return (
    <BrowserRouter>
      {user ? (
        user.isAdmin === 1 ? (
          <AppAdminRoutes />
        ) : (
          <AppRoutes />
        )
      ) : (
        <AuthRoutes />
      )}
    </BrowserRouter>
  );
};
