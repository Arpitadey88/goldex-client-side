import React from 'react';
import { Bar } from 'react-chartjs-2';
import './DashboardHome.css';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const data = {
    labels: ["Red", 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
        data: [12, 15, 5, 7, 9, 11],
        backgroundColor: [
            'rgba(255, 99, 132, 0.9)',
            'rgba(54, 162, 235, 0.9)',
            'rgba(255, 206, 86, 0.9)',
            'rgba(75, 192, 192, 0.9)',
            'rgba(153, 102, 255, 0.9)',
            'rgba(255, 159, 64, 0.9)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 3
    }]
};
const DashboardHome = () => {

    return (
        <div className='px-5 py-2'>
            <div className="row row-cols-1 row-cols-md-3 g-4 mt-1">
                <div className="col">
                    <div className="h-100 text-center rounded-card p-3 border-0 dashboard">
                        <h2>320</h2>
                        <h3> Products Viewed Today</h3>
                    </div>
                </div>
                <div className="col">
                    <div className=" h-100 text-center rounded-card p-3 border-0 dashboard">
                        <h2>49</h2>
                        <h3>Stock Scans Performed</h3>
                    </div>
                </div>
                <div className="col">
                    <div className=" h-100 text-center rounded-card p-3 border-0 dashboard">
                        <h2>80</h2>
                        <h3> Top Item Viewed</h3>
                    </div>
                </div>
            </div>
            <div className='text-center px-md-5 py-md-3'>
                <Bar data={data}
                />
                <h3 style={{ color: '#1E3163'}}>User Analytics</h3>
            </div>
        </div>
    );
};

export default DashboardHome;