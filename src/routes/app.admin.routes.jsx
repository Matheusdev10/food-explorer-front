import { Routes, Route } from 'react-router-dom';
import { DisheDetailsAdmin } from '../pages/DisheDetailsAdmin';
import { HomeAdmin } from '../pages/HomeAdmin';

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/disheDetailsAdmin/:id" element={<DisheDetailsAdmin />} />
      <Route path="/homeAdmin" element={<HomeAdmin />} />
    </Routes>
  );
}
