"use client"

import AddHotels from '@/app/components/AddHotels';
import Sidebar from '@/app/hotel/Sidebar';
import React, { useEffect, useState } from 'react';
import "@/app/globals.css"

interface Hotel {
  HotelLogo: string;
  HotelName: string;
  Email: string;
}

const HotelsList: React.FC = () => {
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [isActive, setisActive] = useState(false);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true); // Start loading
        const response = await fetch('http://192.168.1.206:3000/api/eatofy/hotels/operations/fetch');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setHotels(data.output); // Assuming 'output' contains the array of hotels
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false); // End loading
      }
    };

    fetchData();
  }, []);

  const openModel = () => {
    setisActive(!isActive);
  }

  return (
    <div className="overflow-x-auto bg-gradient-to-r h-screen from-red-500 via-red-600 to-red-900 relative">
      <button className='backdrop-blur-xl m-4 bg-white/30 text-black p-3 rounded-lg' onClick={openModel}>Add Hotel</button>
      <div className="p-4 px-8">
        {loading ? (
          <div className="flex items-center backdrop-blur-xl m-4 bg-black/20  justify-center h-screen w-screen">
            <div className="loader"></div>
          </div>
        ) : (
          <table className="w-full p-8">
            <thead className='m-2'>
              <tr className="backdrop-blur-xl bg-black/30 p-4 pl-10 text-white rounded-lg shadow-md">
                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Logo</th>
                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Hotel Name</th>
                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Email</th>
              </tr>
            </thead>
            <tbody>
              {hotels.map((hotel, index) => (
                <tr key={index} className="table-row backdrop-blur-xl bg-black/30 p-4 pl-10 text-white rounded-lg shadow-md transition-transform transform hover:scale-101 hover:shadow-lg ">
                  <td className="py-3 px-4">
                    <img className="w-16 h-16 rounded-[50px] shadow-md shadow-black object-cover" src={`data:image/*;base64,${hotel.HotelLogo}`} alt={hotel.HotelName} />
                  </td>
                  <td className="py-3 px-4">{hotel.HotelName}</td>
                  <td className="py-3 px-4">{hotel.Email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      {isActive ? <AddHotels /> : <h1 className="hidden">Div is deActive</h1>}
    </div>
  );
};

export default HotelsList;
