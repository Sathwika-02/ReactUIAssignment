import React, { useContext } from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import { DarkModeContext } from '../../../context/darkModeContext';
import { useSelector } from 'react-redux';


const RingChart = () => {
  const {darkMode}=useContext(DarkModeContext)
const data = useSelector((state) => state.ringchart.data);
  return (
    <div style={{ display: 'flex',flexDirection:'column', height: '400px',width:'100%',border:darkMode?"2px solid #282828":"2px solid #f7f9fb",borderRadius:"8px",backgroundColor: darkMode ? "#282828" : "#f7f9fb"}}>
          <h5 style={{fontSize:"14px",paddingLeft:"15px",color:darkMode?"#fff":""}}>Total Sales</h5>
      <div style={{ width: '200px', height: '205px',alignSelf:"center" }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={data} innerRadius={60} outerRadius={80} dataKey="value" paddingAngle={6}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
              ))}
            </Pie>
            <Tooltip formatter={(value) => `$${value.toFixed(2)}`} />
          </PieChart>
        </ResponsiveContainer>
      </div>
      {data.map((entry, index) => (
    <div key={index} style={{ display: 'flex', alignItems: 'center', width: '100%', marginBottom: 10, justifyContent: "space-between" }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span
          style={{
            width: 10,
            height: 10,
            borderRadius: '50%',
            backgroundColor: entry.color,
            marginRight: 18,
            marginLeft:5,
        
          }}
        ></span>
        <span style={{fontSize:"14px"}}>{entry.name}</span>
      </div>
      <span style={{fontSize:"14px",marginRight:"20px"}}>${entry.value.toFixed(2)}</span>
    </div>
  ))}
      </div>
  );
};

export default RingChart;
