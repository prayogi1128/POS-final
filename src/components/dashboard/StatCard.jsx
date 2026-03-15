import React from 'react';

const StatCard = ({ label, value, iconPath, hasLink }) => {
  return (
    <div className="stat-card">
      <div className="stat-label">{label}</div>
      <div className="stat-value-row">
        <div className="stat-icon-box">
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={iconPath} />
          </svg>
        </div>
        <span className="stat-number">{value}</span>
        {hasLink && (
          <span className="stat-link">
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </span>
        )}
      </div>
    </div>
  );
};

export default StatCard;