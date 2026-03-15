import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Import Halaman Auth
import LoginPage from './pages/login/LoginPage';
import RegisterPage from './pages/register/RegisterPage';
import ForgotPage from './pages/forgot-reset/ForgotPage';
import ResetPage from './pages/forgot-reset/ResetPage';

// Import Halaman Dashboard
import DashboardPage from './pages/dashboard/DashboardPage';

function App() {
  // 1. CEK LOCALSTORAGE SAAT APLIKASI MULAI
  // Jika ada data 'isLogged' bernilai 'true', maka anggap sudah login
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem('isLogged') === 'true'
  );

  // Fungsi dipanggil saat login berhasil
  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
    // SIMPAN STATUS KE LOCALSTORAGE AGAR TAHAN REFRESH
    localStorage.setItem('isLogged', 'true');
  };

  // Fungsi dipanggil saat logout
  const handleLogout = () => {
    setIsAuthenticated(false);
    // HAPUS STATUS DARI LOCALSTORAGE
    localStorage.removeItem('isLogged');
    window.location.href = '/login';
  };

  return (
    <Routes>
      {/* --- RUTE PUBLIK --- */}
      <Route path="/login" element={<LoginPage onLoginSuccess={handleLoginSuccess} />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/forgot-password" element={<ForgotPage />} />
      <Route path="/reset-password" element={<ResetPage />} />

      {/* --- RUTE PRIVAT (DASHBOARD) --- */}
      <Route 
        path="/dashboard" 
        element={
          isAuthenticated ? (
            <DashboardPage onLogout={handleLogout} />
          ) : (
            <Navigate to="/login" replace />
          )
        } 
      />

      {/* Redirect otomatis ke login jika buka root (/) */}
      <Route path="/" element={<Navigate to="/login" replace />} />
      
      {/* Jika akses halaman aneh-aneh, lempar ke login */}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

export default App;