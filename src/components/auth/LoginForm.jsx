import React, { useState } from 'react';
import InputField from '../ui/InputField';
import Button from '../ui/Button';

const LoginForm = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulasi proses login (1.5 detik)
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsLoading(false);
    console.log('Login Success:', { username, password });
    
    // 1. Panggil fungsi untuk update status login & simpan ke localStorage
    if (onLoginSuccess) {
      onLoginSuccess();
    }

    // 2. LANGSUNG PINDAH KE DASHBOARD (Tanpa Alert)
    // Menggunakan window.location.href agar halaman refresh dan state terbaca ulang
    window.location.href = '/dashboard';
  };

  const toggleIcon = showPassword ? (
    <svg onClick={() => setShowPassword(false)} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" /></svg>
  ) : (
    <svg onClick={() => setShowPassword(true)} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
  );

  return (
    <form onSubmit={handleLogin}>
      <InputField 
        id="username"
        label="Username" 
        type="text" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
        placeholder="Enter your username" 
        required 
      />
      
      <div className="form-group">
        <label htmlFor="password" className="form-label">Password</label>
        <div className="password-wrapper">
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="form-input"
            required
          />
          <button type="button" className="password-toggle">
            {toggleIcon}
          </button>
        </div>
        <a href="/forgot-password" className="forgot-link">Forgot Password?</a>
      </div>

      <Button type="submit" isLoading={isLoading}>
        Login
      </Button>
    </form>
  );
};

export default LoginForm;