import React, { useContext } from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    LineElement,
    PointElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
} from 'chart.js';
import { DarkModeContext } from '../../../context/darkModeContext';
import { useSelector } from 'react-redux';

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend);

const Linechart = () => {
    const {darkMode}=useContext(DarkModeContext)
    const { currentWeekData, previousWeekData, labels } = useSelector((state) => state.linecharts);

    const data = {
        labels,
        datasets: [
            {
                label: 'Current Week $58,211',
                data: currentWeekData,
                borderColor: 'black',
                backgroundColor: 'black',
                borderWidth: 3,
                tension: 0.4, 
                pointRadius:0,
                
            },
            {
                label: 'Previous Week $68,768',
                data: previousWeekData,
                borderColor: 'rgba(66, 133, 244, 0.3)', 
                backgroundColor: 'rgba(66, 133, 244, 0.1)', 
                borderWidth: 3,
                tension: 0.4,
                pointRadius:0
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            datasets:{
            label:{
                display:false,
            },

        },
            legend: {
                display: true,
               labels: {
                    color: darkMode ? '#fff' : '#333', 
                    usePointStyle: true,
                },
            },
            tooltip: {
                callbacks: {
                    label: function (context) {
                        return `$${context.raw}M`; 
                    },
                },
            },
        },
        scales: {
            x: {
                grid: {
                    display: false,
                },
                ticks: {
                    color: '#666',
                    font: {
                        size: 12,
                    },
                },
            },
            y: {
                min:0,
                grid: {
                    color: '#e0e0e0',
                },
                ticks: {
                    color: '#666',
                    font: {
                        size: 12,
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
            maxWidth: '1000px',
            margin: 'auto',
            padding: '30px',
            backgroundColor: darkMode ? '#282828' : '#f7f9fc',
            borderRadius: '12px',
            width:'95%',
            height:'400px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
        }}>
            <h3 style={{
                fontSize: '16px',
                fontWeight: 'bold',
                color: darkMode ? '#fff' : '#333', 
                textAlign: 'left',
                display:'flex',
                alignItems:'center'
            }}>
                Revenue 
            </h3>
            <Line data={data} options={options} />
        </div>
    );
};

export default Linechart;
