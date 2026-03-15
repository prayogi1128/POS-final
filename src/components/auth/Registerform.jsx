import React, { useState } from 'react';
import '../../LoginStyles.css'; // Import CSS yang sudah kita update

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Hapus error saat user mengetik
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.username.trim()) newErrors.username = 'Username wajib diisi';
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email wajib diisi';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Format email tidak valid';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password wajib diisi';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password minimal 6 karakter';
    }
    
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Password tidak sama';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsLoading(false);
    console.log('Registrasi Berhasil:', formData);
    alert('Akun berhasil dibuat! Silakan login.');
  };

  const toggleIcon = (isShow) => isShow ? (
    <svg onClick={() => isShow === 'pass' ? setShowPassword(false) : setShowConfirmPassword(false)} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 hover:text-gray-600 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" /></svg>
  ) : (
    <svg onClick={() => isShow === 'pass' ? setShowPassword(true) : setShowConfirmPassword(true)} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 hover:text-gray-600 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
  );

  return (
    <form onSubmit={handleSubmit}>
      {/* Username */}
      <div className="form-group">
        <label htmlFor="username" className="form-label">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
          placeholder="Masukkan username"
          className={`form-input ${errors.username ? 'input-error' : ''}`}
        />
        {errors.username && <span className="error-text">{errors.username}</span>}
      </div>

      {/* Email */}
      <div className="form-group">
        <label htmlFor="email" className="form-label">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="contoh@email.com"
          className={`form-input ${errors.email ? 'input-error' : ''}`}
        />
        {errors.email && <span className="error-text">{errors.email}</span>}
      </div>

      {/* Password */}
      <div className="form-group">
        <label htmlFor="password" className="form-label">Password</label>
        <div className="password-wrapper">
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Masukkan password"
            className={`form-input ${errors.password ? 'input-error' : ''}`}
          />
          <button type="button" className="password-toggle">
            {toggleIcon('pass')}
          </button>
        </div>
        {errors.password && <span className="error-text">{errors.password}</span>}
      </div>

      {/* Confirm Password */}
      <div className="form-group">
        <label htmlFor="confirmPassword" className="form-label">Konfirmasi Password</label>
        <div className="password-wrapper">
          <input
            type={showConfirmPassword ? 'text' : 'password'}
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            placeholder="Ulangi password"
            className={`form-input ${errors.confirmPassword ? 'input-error' : ''}`}
          />
          <button type="button" className="password-toggle">
            {toggleIcon('confirm')}
          </button>
        </div>
        {errors.confirmPassword && <span className="error-text">{errors.confirmPassword}</span>}
      </div>

      {/* Tombol Submit */}
      <button type="submit" disabled={isLoading} className="login-btn">
        {isLoading ? (
          <>
            <div className="spinner"></div>
            Membuat Akun...
          </>
        ) : (
          'Daftar Sekarang'
        )}
      </button>
    </form>
  );
};

export default RegisterForm;