import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ProtectedRoute from "../routes/ProtectedRoutes";
import { layoutRoutes, authRoutes } from "./Routes";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* Public/auth routes */}
      {authRoutes.map(({ path, element: Element }) => (
        <Route key={path} path={path} element={<Element />} />
      ))}

      {/* Protected routes with layout */}
      <Route
        element={
          <ProtectedRoute>
            <MainLayout />
          </ProtectedRoute>
        }
      >
        {layoutRoutes.map(({ path, element: Element, index }) => (
          <Route
            key={path}
            path={path}
            index={index || false}
            element={<Element />}
          />
        ))}
      </Route>
    </Routes>
  );
};

export default AppRoutes;
