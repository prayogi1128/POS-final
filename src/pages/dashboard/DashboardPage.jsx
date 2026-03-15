import React from 'react';
import Sidebar from '../../components/dashboard/Sidebar';
import TopBar from '../../components/dashboard/TopBar';
import StatCard from '../../components/dashboard/StatCard';
import SalesChart from '../../components/dashboard/SalesChart';
import '../../DashboardStyles.css';

// Path SVG Icons
const icons = {
  orders: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  money: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  menu: "M4 6h16M4 10h16M4 14h16M4 18h16",
  food: "M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z",
  drink: "M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z M6 1v3M10 1v3M14 1v3",
};

const DashboardPage = ({ onLogout }) => {
  // Format tanggal hari ini
  const today = new Date().toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <div className="dashboard-wrapper">
      <Sidebar />
      
      <main className="main-content">
        <TopBar onLogout={onLogout} />

        <div className="dashboard-header">
          <h1 className="page-title">Dashboard</h1>
          <span className="page-date">Today, {today}</span>
        </div>

        {/* Stats Grid */}
        <div className="stats-grid">
          <StatCard label="Total Orders" value="500" iconPath={icons.orders} />
          <StatCard label="Total Omzet" value="Rp 10.000.000" iconPath={icons.money} />
          <StatCard label="All Menu Orders" value="1000" iconPath={icons.menu} />
          <StatCard label="Foods" value="500" iconPath={icons.food} hasLink={true} />
          <StatCard label="Beverages" value="300" iconPath={icons.drink} hasLink={true} />
          <StatCard label="Desserts" value="200" iconPath={icons.food} hasLink={true} />
        </div>

        {/* Chart Section */}
        <SalesChart />
      </main>
    </div>
  );
};

export default DashboardPage;