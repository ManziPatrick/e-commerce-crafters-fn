import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from '../pages/Homepage';

const AppRoutes: React.FC = () => (
  <div>
    <Routes>
      <Route path="/" element={<Homepage />} />
    </Routes>

  </div>
);

export default AppRoutes;
