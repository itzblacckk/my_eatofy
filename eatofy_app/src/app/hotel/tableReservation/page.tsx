"use client"
import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const ReservationGrid: React.FC = () => {
  return (
    <div className="flex flex-col p-4 text-black min-h-screen bg-white">
      <div className="flex flex-col items-center md:flex-row justify-between mb-8">
        <h2 className="text-xl font-bold  text-center mb-2 md:mb-0">
          Table <span className="text-red-500">Reservation</span>
        </h2>
        <button className="border border-red-500 text-red-500 px-4 py-2 rounded">
          Add Table Reservation +
        </button>
      </div>

      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-4">
        <button className="border border-red-500 text-red-500 px-4 py-2 rounded">
          Table Reservation List
        </button>
        <button className="bg-red-500 text-white px-4 py-2 rounded">
          Reservation Grid
        </button>
      </div>

      <div className="flex flex-col md:flex-row justify-end space-y-4 md:space-y-0 md:space-x-4 mb-4">
        <div className="border border-green-500 text-center p-4 rounded">
          <p className="font-bold">Total Reservation</p>
          <p className="text-2xl">3,500</p>
        </div>
        <div className="border border-green-500 text-center p-4 rounded">
          <p className="font-bold">Total Guest</p>
          <p className="text-2xl">25,590</p>
        </div>
      </div>
      
      <h3 className="font-bold mb-2">Reservation Grid</h3>
      <div className="border rounded-lg overflow-hidden">
        <div className="flex justify-center gap-6 items-center bg-zinc-100 p-2">
          <button>&lt;</button>
          <p>Friday, 15 Dec, 2024</p>
          <button>&gt;</button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-zinc-200">
                <th className="border p-2 min-w-[8rem]">08:00 AM</th>
                <th className="border p-2 min-w-[8rem]">09:00 AM</th>
                <th className="border p-2 min-w-[8rem]">10:00 AM</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2">
                  <div className="flex flex-col sm:flex-row justify-between items-center">
                    <span className="text-red-500">08:00</span>
                    <span>Yash Mhatre</span>
                    <span>Table:T6 Pax:4</span>
                    <div className="flex space-x-2 mt-2 sm:mt-0">
                      <FaEdit />
                      <FaTrash />
                    </div>
                  </div>
                </td>
                <td className="border p-2">
                  <div className="flex flex-col sm:flex-row justify-between items-center">
                    <span className="text-red-500">09:00</span>
                    <span>Purva Mhatre</span>
                    <span>Table:T8 Pax:2</span>
                    <div className="flex space-x-2 mt-2 sm:mt-0">
                      <FaEdit />
                      <FaTrash />
                    </div>
                  </div>
                </td>
                <td className="border p-2">
                  <div className="flex flex-col sm:flex-row justify-between items-center">
                    <span className="text-red-500">09:00</span>
                    <span>Dhurva Surve</span>
                    <span>Table:T4 Pax:2</span>
                    <div className="flex space-x-2 mt-2 sm:mt-0">
                      <FaEdit />
                      <FaTrash />
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ReservationGrid;
