import React, { useState } from 'react';
import '../../LoginStyles.css';

const ForgotForm = ({ onNext }) => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    // Validasi sederhana
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setError('Mohon masukkan email yang valid');
      return;
    }

    setIsLoading(true);
    // Simulasi proses kirim email
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsLoading(false);
    setIsSent(true);

    // Setelah sukses, tunggu sebentar lalu panggil fungsi onNext untuk pindah halaman
    setTimeout(() => {
      onNext(email); 
    }, 2000);
  };

  if (isSent) {
    return (
      <div className="info-box">
        <p>✅ Link reset password telah dikirim ke <strong>{email}</strong></p>
        <p style={{marginTop: '8px', fontSize: '0.8rem'}}>Mengalihkan ke halaman reset password...</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="email" className="form-label">Email Address</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="contoh@email.com"
          className={`form-input ${error ? 'input-error' : ''}`}
        />
        {error && <span className="error-text">{error}</span>}
      </div>

      <p style={{fontSize: '0.85rem', color: '#6b7280', marginBottom: '20px'}}>
        Masukkan email Anda yang terdaftar. Kami akan mengirimkan link untuk mengatur ulang password.
      </p>

      <button type="submit" disabled={isLoading} className="login-btn">
        {isLoading ? 'Mengirim Link...' : 'Kirim Link Reset'}
      </button>
    </form>
  );
};

export default ForgotForm;