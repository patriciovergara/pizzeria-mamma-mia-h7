// src/router/AppRouter.jsx
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "../components/Navbar";

import Home from "../pages/Home";
import Pizza from "../pages/Pizza";
import Cart from "../pages/Cart";
import Profile from "../pages/Profile";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import NotFound from "../pages/NotFound";

import ProtectedRoute from "./ProtectedRoute";
import { useUser } from "../context/UserContext";

const AppRouter = () => {
  const { token } = useUser();

  return (
    <>
      <Navbar />
      <Routes>
        {/* Públicas */}
        <Route path="/" element={<Home />} />
        <Route path="/pizza/:id" element={<Pizza />} />
        <Route path="/cart" element={<Cart />} />

        {/* Login / Register bloqueados si hay token */}
        <Route
          path="/login"
          element={token ? <Navigate to="/" replace /> : <LoginPage />}
        />
        <Route
          path="/register"
          element={token ? <Navigate to="/" replace /> : <RegisterPage />}
        />

        {/* Ruta protegida */}
        <Route element={<ProtectedRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route>

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AppRouter;
