import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import publicRoutes from './Routes';

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        {publicRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            index={route.index || false}
            element={React.createElement(route.element)}
          />
        ))}
      </Route>
    </Routes>
  );
};

export default AppRoutes;
