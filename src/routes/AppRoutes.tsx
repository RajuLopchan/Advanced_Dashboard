import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ProtectedRoute from "../routes/ProtectedRoutes"; 
import { layoutRoutes, authRoutes } from "./Routes";

const AppRoutes = () => {
  return (
    <Routes>
      {authRoutes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={React.createElement(route.element)}
        />
      ))}

      <Route
        element={
          <ProtectedRoute>
            <MainLayout />
          </ProtectedRoute>
        }
      >
        {layoutRoutes.map((route) => (
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
