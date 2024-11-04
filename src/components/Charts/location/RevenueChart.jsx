import React, { useContext } from 'react';
import "./RevenueMap.scss"
import { DarkModeContext } from '../../../context/darkModeContext';
const revenueData = [
  { location: 'New York', revenue: 72 },
  { location: 'San Francisco', revenue: 39 },
  { location: 'Sydney', revenue: 25 },
  { location: 'Singapore', revenue: 61 },
];

const RevenueList = () => {
  const {darkMode}=useContext(DarkModeContext)
  const textcolor=darkMode?"#fff":"#000";
  const maxRevenue = 100;
  return (
    <div style={{ padding: '10px' ,color:textcolor}} className='revenue_list'>
      {revenueData.map(({ location, revenue }) => (
        <div key={location} style={{ marginBottom: '12px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span>{location}</span>
            <span>{revenue}K</span>
          </div>
          <div style={{
            height: '5px',
            width: `${(revenue / maxRevenue) * 100}%`,  
            backgroundColor: '#A8C5DA',
            borderRadius: '5px',
            marginTop: '5px'
          }} ></div>
        </div>
      ))}
    </div>
  );
};

export default RevenueList;
