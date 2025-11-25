// src/AppRoutes.jsx
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Profile from "./pages/Profile";

import PrivateRoute from "./components/PrivateRoute";

// Existing
import RecipePage from "./pages/RecipePage";

// New (Create Recipe Page)
import CreateRecipe from "./pages/CreateRecipe";   // <-- Added

const AppRoutes = () => (
  <Routes>
    {/* Public Routes */}
    <Route path="/" element={<HomePage />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/register" element={<RegisterPage />} />

    {/* Recipes Page */}
    <Route path="/recipes" element={<RecipePage />} />

    {/* Create New Recipe Page */}
    <Route path="/recipes/create" element={<CreateRecipe />} />

    {/* Protected Routes */}
    <Route
      path="/profile"
      element={
        <PrivateRoute>
          <Profile />
        </PrivateRoute>
      }
    />
  </Routes>
);

export default AppRoutes;
