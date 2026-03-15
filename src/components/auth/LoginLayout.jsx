import React from 'react';
import Logo from '../ui/Logo';
import '../../LoginStyles.css';

// LANGKAH 1: Import gambar sebagai variabel di paling atas
// Perhatikan jumlah titik '../' harus sesuai dengan posisi folder
import bgImage from '../../assets/images/loginBG.png'; 

const LoginLayout = ({ children, showHeader = true }) => {
  return (
    // LANGKAH 2: Gunakan variabel 'bgImage' di dalam template literal (tanda `)
    <div 
      className="login-container"
      style={{
        // Gunakan backtick (`) bukan kutip biasa
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'right center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="login-card">
        
        {showHeader && (
          <>
            <div className="logo-area">
              <Logo />
            </div>
            <h1 className="welcome-title">Welcome Back!</h1>
            <p className="welcome-subtitle">Please enter your credentials to access PadiPos.</p>
          </>
        )}

        {children}

        {showHeader && (
          <div className="register-footer">
            <p>
              Don't have an account?{' '}
              <a href="/register" className="register-link">Register here</a>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginLayout;