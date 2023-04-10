import { createBrowserRouter } from 'react-router-dom';
import { SignUp } from '../pages/SignUp';
import { Home } from '../pages/Home';
import { SignIn } from '../pages/SignIn';
import { DisheDetails } from '../pages/DisheDetails';
import { AddDishe } from '../pages/AddDishe';
import { EditDishe } from '../pages/EditDishe';
import { DisheDetailsAdmin } from '../pages/DisheDetailsAdmin';
import { HomeAdmin } from '../pages/HomeAdmin';
export const routes = createBrowserRouter([
  {
    path: '/signUp',
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
    path: '/dishedetails',
    element: <DisheDetails />,
  },
  {
    path: '/addDishe',
    element: <AddDishe />,
  },
  {
    path: '/editdishe',
    element: <EditDishe />,
  },
  {
    path: '/dishedetailsadmin',
    element: <DisheDetailsAdmin />,
  },

  {
    path: '/homeadmin',
    element: <HomeAdmin />,
  },
]);
