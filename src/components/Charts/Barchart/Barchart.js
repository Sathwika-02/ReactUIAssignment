import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import { useContext } from 'react';
import { DarkModeContext } from '../../../context/darkModeContext';
import { useSelector } from 'react-redux';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const Barchart = () => {
    const { darkMode } = useContext(DarkModeContext);
    const actualValues = useSelector((state) => state.barcharts.actualValues); // Fetching actual values from Redux
    const thresholds = useSelector((state) => state.barcharts.thresholds); // Fetching thresholds from Redux 

    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            {
                label: 'Below Threshold',
                data: actualValues.map((value, index) => Math.min(value, thresholds[index])), 
                backgroundColor: '#a8c5da', 
                borderColor: '#a8c5da',
                // borderColor: darkMode ? '#76c7c0' : 'black',
                borderWidth: 1,
                barPercentage: 0.7,
                categoryPercentage: 0.6,
                borderRadius:5,
            },
            {
                label: 'Above Threshold',
                data: actualValues.map((value, index) => Math.max(value - thresholds[index], 0)),
                backgroundColor: '#cfdfeb', 
                borderColor: '#cfdfeb',
                borderWidth: 1,
                barPercentage: 0.7,
                categoryPercentage: 0.6,
                borderRadius:5,
            
            },
        ],
    };
    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false, 
            },
        },
        scales: {
            x: {
                stacked: true,
                grid: {
                    display: false,
                },
                ticks: {
                    color: '#9fa1a2',
                    font: {
                        size: 16,
                    },
                   
                    
                },
            },
            y: {
                stacked: true,
                grid: {
                    color: '#e0e0e0',
                },
                ticks: {
                    color: '#9fa1a2',
                    font: {
                        size: 14,
                    },
                    callback: function (value) {
                        return `${value}M`; 
                    },
                    stepSize: 10,
                    beginAtZero: true,
                },
            },
        },
    };

    return (
        <div style={{
            maxWidth: '600px',
            margin: 'auto',
            padding: '10px 20px 20px 20px',
            backgroundColor: darkMode ? '#282828' : '#f7f9fb',
            borderRadius: '5px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
        }}>
            <h3 style={{
                fontSize: '16px',
                fontWeight: 'bold',
                color: darkMode ? '#fff' : '#333', 
                marginBottom: '15px',
                textAlign: 'left',
            }}>
                Projections vs Actuals
            </h3>
            <Bar data={data} options={options} />
        </div>
    );
};

export default Barchart;
