import { Routes, Route } from 'react-router-dom';
import { DisheDetailsAdmin } from '../pages/DisheDetailsAdmin';
import { HomeAdmin } from '../pages/HomeAdmin';
import { AddDishe } from '../pages/AddDishe';
import { EditDishe } from '../pages/EditDishe';

export function AppAdminRoutes() {
  return (
    <Routes>
      <Route path="/disheDetailsAdmin/:id" element={<DisheDetailsAdmin />} />
      <Route path="/addDishe" element={<AddDishe />} />
      <Route path="/products/:id" element={<EditDishe />} />
      <Route path="/" element={<HomeAdmin />} />
    </Routes>
  );
}
