import React, { useState } from 'react';
import '../../LoginStyles.css';

const ResetForm = () => {
  const [formData, setFormData] = useState({
    newPassword: '',
    confirmPassword: ''
  });
  const [showNewPass, setShowNewPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.newPassword || formData.newPassword.length < 6) {
      newErrors.newPassword = 'Password minimal 6 karakter';
    }
    if (formData.newPassword !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Password tidak sama';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsLoading(false);

    // TAMPILKAN POPUP SUKSES
    alert('✅ Password berhasil diubah! Silakan login dengan password baru.');
    
    // Redirect manual ke halaman login menggunakan window.location
    // (Karena kita belum pakai useNavigate di komponen ini untuk simplifikasi)
    window.location.href = '/login';
  };

  const toggleIcon = (isShow) => isShow ? (
    <svg onClick={() => isShow === 'new' ? setShowNewPass(false) : setShowConfirmPass(false)} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 hover:text-gray-600 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" /></svg>
  ) : (
    <svg onClick={() => isShow === 'new' ? setShowNewPass(true) : setShowConfirmPass(true)} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 hover:text-gray-600 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
  );

  return (
    <form onSubmit={handleSubmit}>
      {/* New Password */}
      <div className="form-group">
        <label htmlFor="newPassword" className="form-label">Password Baru</label>
        <div className="password-wrapper">
          <input
            type={showNewPass ? 'text' : 'password'}
            id="newPassword"
            name="newPassword"
            value={formData.newPassword}
            onChange={handleChange}
            placeholder="Masukkan password baru"
            className={`form-input ${errors.newPassword ? 'input-error' : ''}`}
          />
          <button type="button" className="password-toggle">{toggleIcon('new')}</button>
        </div>
        {errors.newPassword && <span className="error-text">{errors.newPassword}</span>}
      </div>

      {/* Confirm Password */}
      <div className="form-group">
        <label htmlFor="confirmPassword" className="form-label">Konfirmasi Password Baru</label>
        <div className="password-wrapper">
          <input
            type={showConfirmPass ? 'text' : 'password'}
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Ulangi password baru"
            className={`form-input ${errors.confirmPassword ? 'input-error' : ''}`}
          />
          <button type="button" className="password-toggle">{toggleIcon('confirm')}</button>
        </div>
        {errors.confirmPassword && <span className="error-text">{errors.confirmPassword}</span>}
      </div>

      <button type="submit" disabled={isLoading} className="login-btn">
        {isLoading ? 'Memproses...' : 'Reset Password'}
      </button>
    </form>
  );
};

export default ResetForm;