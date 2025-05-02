import { Route, Routes } from 'react-router-dom';
import { AddDishe } from '../pages/AddDishe';
import { DisheDetailsAdmin } from '../pages/DisheDetailsAdmin';
import { EditDishe } from '../pages/EditDishe';
import { HomeAdmin } from '../pages/HomeAdmin';

export const AppAdminRoutes = () => {
  return (
    <Routes>
      <Route path="/products/:id" element={<DisheDetailsAdmin />} />
      <Route path="/addDishe/" element={<AddDishe />} />
      <Route path="/editDishe/:id" element={<EditDishe />} />
      <Route path="/" element={<HomeAdmin />} />
    </Routes>
  );
};
