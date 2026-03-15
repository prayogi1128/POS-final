import React from 'react';

const TopBar = ({ onLogout }) => {
  return (
    <header className="top-bar">
      <div className="search-box">
        <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="#999999">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input type="text" placeholder="Enter the keyword here..." className="search-input" />
      </div>

      <div className="user-profile">
        <img 
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" 
          alt="User" 
          className="user-avatar"
        />
        <div className="user-info">
          <span className="user-name">John Doe</span>
          <span className="user-role">Admin</span>
        </div>
        <button onClick={onLogout} className="logout-btn">
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default TopBar;