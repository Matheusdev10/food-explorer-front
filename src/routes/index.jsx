import { createBrowserRouter } from 'react-router-dom';
import { SignUp } from '../pages/SignUp';
import { Home } from '../pages/Home';
import { SignIn } from '../pages/SignIn';
import { Details } from '../pages/Details';
export const routes = createBrowserRouter([
  {
    path: '/signup',
    element: <SignUp />,
  },
  {
    path: '/',
    element: <SignIn />,
  },
  {
    path: '/home',
    element: <Home />,
  },

  {
    path: '/details',
    element: <Details />,
  },
]);
