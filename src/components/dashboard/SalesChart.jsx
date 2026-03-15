import React, { useState } from 'react';

const SalesChart = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const chartData = [
    { day: 'Mon', food: 20000, beverage: 140000, dessert: 15000 },
    { day: 'Tue', food: 25000, beverage: 90000, dessert: 5000 },
    { day: 'Wed', food: 40000, beverage: 240000, dessert: 15000 },
    { day: 'Thu', food: 70000, beverage: 140000, dessert: 40000 },
    { day: 'Fri', food: 90000, beverage: 190000, dessert: 5000 },
    { day: 'Sat', food: 40000, beverage: 140000, dessert: 30000 },
    { day: 'Sun', food: 20000, beverage: 90000, dessert: 3000 },
  ];

  const maxValue = Math.max(...chartData.flatMap(d => [d.food, d.beverage, d.dessert]));

  return (
    <div className="chart-card">
      <div className="chart-header">
        <h2 className="chart-title">Total Omzet</h2>
        <div className="chart-filters">
          <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} className="date-input" />
          <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} className="date-input" />
          <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className="select-input">
            <option value="">Select Category</option>
            <option value="food">Food</option>
            <option value="beverage">Beverage</option>
            <option value="dessert">Dessert</option>
          </select>
        </div>
      </div>

      <div className="chart-container">
        <div className="y-axis">
          {[300, 250, 200, 150, 100, 50, 0].map((val) => (
            <span key={val} className="y-axis-label">{val}k</span>
          ))}
        </div>

        <div className="chart-bars-area">
          {chartData.map((data, index) => (
            <div key={index} className="bar-group">
              <div className="bars-row">
                <div className="bar bar-food" style={{ height: `${(data.food / maxValue) * 240}px` }} />
                <div className="bar bar-beverage" style={{ height: `${(data.beverage / maxValue) * 240}px` }} />
                <div className="bar bar-dessert" style={{ height: `${(data.dessert / maxValue) * 240}px` }} />
              </div>
              <span className="bar-label">{data.day}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="chart-legend">
        <div className="legend-item">
          <div className="legend-color bar-food" />
          <span className="legend-text">Food</span>
        </div>
        <div className="legend-item">
          <div className="legend-color bar-beverage" />
          <span className="legend-text">Beverage</span>
        </div>
        <div className="legend-item">
          <div className="legend-color bar-dessert" />
          <span className="legend-text">Dessert</span>
        </div>
      </div>
    </div>
  );
};

export default SalesChart;