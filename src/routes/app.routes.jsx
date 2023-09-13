import { Routes, Route } from 'react-router-dom';
import { DisheDetails } from '../pages/DisheDetails';
import { Home } from '../pages/Home';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products/:id" element={<DisheDetails />} />
    </Routes>
  );
}
