"use client"
import React from 'react';
import "chart.js/auto";
import Sidebar from '../../eatofy/sideNavbar';
import { Line } from 'react-chartjs-2';
import HotelList from '../HotelList';
import { CiSearch } from "react-icons/ci";
import { motion } from 'framer-motion';

const Dashboard: React.FC = () => {
  const dataLine = {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
    datasets: [
      {
        label: 'Revenues',
        data: [30, 32, 28, 35, 37, 38, 40, 42, 39, 41, 43, 45, 44, 43, 46, 48, 47, 49, 51, 53, 52, 54, 55, 57, 56, 58, 60, 59, 61, 62],
        borderColor: '#FFA500',
        backgroundColor: 'rgba(255, 0, 0, 0.1)',
        fill: true,
        tension: 0.4,
        pointBackgroundColor: '#FFA500',
        pointHoverBackgroundColor: '#FFA500',
        pointBorderColor: '#FFF',
        pointHoverBorderColor: '#FFF',
        pointRadius: 5,
        pointHoverRadius: 7,
      },
    ],
  };

  const optionsLine = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function(context: any) {
            return `Rs ${context.raw.toFixed(2)}`;
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          borderDash: [8, 4],
        },
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } }
  };

  return (
    <motion.div
      className="flex bg-gradient-to-r from-red-500 via-red-600 to-red-900 h-full"
      animate="visible"
      variants={containerVariants}
    >
      <Sidebar/>
      <div className='backdrop-blur-sm'></div>
      <div className="flex-1 backdrop-blur-sm bg-gradient-to-r from-red-500 via-red-600 to-red-900 ml-[80px] p-10">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-white text-2xl font-bold">Dashboard</h1>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                className="backdrop-blur-xl bg-black/30 p-4 pl-10 text-white rounded-lg shadow-md"
                type="text"
                placeholder="Search..."
              />
              <CiSearch className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 mr-4 text-white" size={25} />
            </div>
          </div>
        </div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4"
          variants={containerVariants}
        >
          <motion.div
            className="backdrop-blur-xl bg-black/30 p-4 rounded-lg shadow-md border-t-4 border-red-500"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-white">Total Hotel</h2>
            <p className="text-2xl text-white font-bold">16,598</p>
            <p className="text-green-500">+2.5%</p>
            
                      </motion.div>
          <motion.div
            className="backdrop-blur-xl bg-black/30 p-4 rounded-lg shadow-md border-t-4 border-red-500"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-white">Total Subscriptions</h2>
            <p className="text-2xl text-white font-bold">11,598</p>
            <p className="text-red-500">-3.5%</p>
          </motion.div>
          <motion.div
            className="backdrop-blur-xl bg-black/30 p-4 rounded-lg shadow-md border-t-4 border-red-500"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-white">Total Revenue</h2>
            <p className="text-2xl text-white font-bold">₹ 35,598</p>
            <p className="text-green-500">+5.5%</p>
          </motion.div>
        </motion.div>
        <div className="bg-black/60 p-4 rounded-lg shadow-md">
          <h2 className="text-white mb-2">Sales over time</h2>
          <Line data={dataLine}/>
        </div>
        <motion.div
          className="grid mt-7 grid-cols-1 md:grid-cols-2 gap-4 mb-4"
          variants={containerVariants}
        >
          <motion.div
            className="backdrop-blur-xl bg-black/30 p-4 rounded-lg shadow-md border-t-4 border-red-500"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-white"></h2>
            <p className="text-2xl text-white font-bold">1 Active Subscriptions</p>
          </motion.div>
        </motion.div>
        <HotelList/>
      </div>
    </motion.div>
  );
}

export default Dashboard;
