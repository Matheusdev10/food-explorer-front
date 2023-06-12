import { Routes, Route } from 'react-router-dom';
import { DisheDetailsAdmin } from '../pages/DisheDetailsAdmin';
import { HomeAdmin } from '../pages/HomeAdmin';
import { AddDishe } from '../pages/AddDishe';
import { EditDishe } from '../pages/EditDishe';

export function AppAdminRoutes() {
  return (
    <Routes>
      <Route path="/products/:id" element={<DisheDetailsAdmin />} />
      <Route path="/addDishe" element={<AddDishe />} />
      <Route path="/editDishe/:id" element={<EditDishe />} />
      <Route path="/editDishe" element={<EditDishe />} />
      <Route path="/" element={<HomeAdmin />} />
    </Routes>
  );
}
