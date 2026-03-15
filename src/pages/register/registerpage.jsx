import React from 'react';
import LoginLayout from '../../components/auth/LoginLayout';
import RegisterForm from '../../components/auth/Registerform';

const RegisterPage = () => {
  return (
    // Kita pakai LoginLayout TAPI tanpa children default-nya
    <LoginLayout showHeader={false}> 
      
      {/* Header Khusus Register */}
      <div style={{ textAlign: 'center', marginBottom: '32px' }}>
        <h1 className="welcome-title">Welcome Back!</h1>
        <p className="welcome-subtitle">Create your account here!</p>
      </div>

      {/* Form Register */}
      <RegisterForm />

      {/* Footer Khusus Register (Link ke Login) */}
      <div className="register-footer">
        <p>
          Sudah punya akun?{' '}
          <a href="/login" className="register-link">Login di sini</a>
        </p>
      </div>
      
    </LoginLayout>
  );
};

export default RegisterPage;