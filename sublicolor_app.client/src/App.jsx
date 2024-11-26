import "./App.css";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./context/ProtectedRoute";
import LoginPage from "./pages/Login/LoginPage";
import { AuthProvider } from "./context/AuthContext.jsx";
import ForgotPasswordPage from "./pages/ForgotPassword/ForgotPasswordPage.jsx";
import HomePage from "./pages/Home/HomePage.jsx";
import Layout from "./Layout/Layout.jsx";
import { PrimeReactProvider } from "primereact/api";

function App() {
  return (
    <PrimeReactProvider>
      <AuthProvider>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Layout>
                  <HomePage />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/home2"
            element={
              <ProtectedRoute>
                <Layout>
                  <HomePage />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/recuperarContrasena" element={<ForgotPasswordPage />} />
        </Routes>
      </AuthProvider>
    </PrimeReactProvider>
  );
}

export default App;
