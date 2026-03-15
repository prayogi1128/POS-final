import React from 'react';
import LoginLayout from '../../components/auth/LoginLayout';
import ForgotForm from '../../components/auth/ForgotForm';
import { useNavigate } from 'react-router-dom'; // Kita pakai hook navigate agar lebih smooth

const ForgotPage = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    // Pindah ke halaman reset setelah sukses kirim email
    navigate('/reset-password');
  };

  return (
    <LoginLayout showHeader={false}>
      <div style={{ textAlign: 'center', marginBottom: '24px' }}>
        <h1 className="welcome-title">Lupa Password?</h1>
        <p className="welcome-subtitle">Jangan khawatir, kami akan bantu Anda reset.</p>
      </div>
      
      <ForgotForm onNext={handleNext} />
      
      <div className="register-footer">
        <p>
          Ingat password Anda?{' '}
          <a href="/login" className="register-link">Kembali ke Login</a>
        </p>
      </div>
    </LoginLayout>
  );
};

export default ForgotPage;