import React from 'react';

const Button = ({ children, type = "button", disabled, isLoading }) => {
  return (
    <button
      type={type}
      disabled={disabled || isLoading}
      className="login-btn"
    >
      {isLoading ? (
        <>
          <div className="spinner"></div>
          Loading...
        </>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;