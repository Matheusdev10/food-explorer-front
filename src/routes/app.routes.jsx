import { Routes, Route } from 'react-router-dom';
//
import { AddDishe } from '../pages/AddDishe';
import { DisheDetails } from '../pages/DisheDetails';
import { EditDishe } from '../pages/EditDishe';
import { Home } from '../pages/Home';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products/:id" element={<DisheDetails />} />
      <Route path="/addDishe" element={<AddDishe />} />
      <Route path="/editDishe" element={<EditDishe />} />
    </Routes>
  );
}
