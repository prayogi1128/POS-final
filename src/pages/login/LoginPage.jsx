import React from 'react';
import LoginLayout from '../../components/auth/LoginLayout';
import LoginForm from '../../components/auth/LoginForm';

const LoginPage = ({ onLoginSuccess }) => {
  return (
    <LoginLayout>
      <LoginForm onLoginSuccess={onLoginSuccess} />
    </LoginLayout>
  );
};

export default LoginPage;