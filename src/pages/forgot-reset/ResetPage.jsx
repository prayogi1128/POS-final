import React from 'react';
import LoginLayout from '../../components/auth/LoginLayout';
import ResetForm from '../../components/auth/Reform';

const ResetPage = () => {
  return (
    <LoginLayout showHeader={false}>
      <div style={{ textAlign: 'center', marginBottom: '24px' }}>
        <h1 className="welcome-title">Buat Password Baru</h1>
        <p className="welcome-subtitle">Pastikan password Anda kuat dan mudah diingat.</p>
      </div>
      
      <ResetForm />
      
      <div className="register-footer">
        <p>
          Batal reset?{' '}
          <a href="/login" className="register-link">Kembali ke Login</a>
        </p>
      </div>
    </LoginLayout>
  );
};

export default ResetPage;