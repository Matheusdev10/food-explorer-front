import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './app.routes';
import { AuthRoutes } from './auth.routes';
import { AppAdminRoutes } from './app.admin.routes';
import { useAuth } from '../hooks/auth';

export function Routes() {
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
}
