import React from 'react';
import Sidebar from '../Sidebar';

const Eatofy: React.FC = () => {
  return (
    <div className="flex h-full w-full">
    <Sidebar/>

      <div className="w-4/5 p-4 h-full bg-white">
        <div className="flex justify-between items-center mb-4">
          <div className="text-2xl font-bold text-red-500">EATOFY</div>
          <div className="text-3xl text-black font-bold">
            RESTAURANT{' '}
            <span role="img" aria-label="restaurant">
              🏨
            </span>
          </div>
          <button></button>
         
        </div>

        <div className="flex space-x-9 ml-5 m-5 mb-10 mt-20">
          <button className="bg-red-500 text-white px-4 py-2 rounded-[30px]">TakeAway</button>
          <button className="bg-red-500 text-white px-4 py-2 rounded-[30px]">Delivery</button>
          <button className="bg-gradient-to-r from-gray-800 to-red-500 text-white px-4 py-2 rounded-[30px]">Zomato</button>
          <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-[30px]">Swiggy</button>
          <div> <button className="bg-red-500 text-white px-4 py-2 rounded-lg">Book table</button></div>
        </div>

        <div className="mb-10 ml-5 ">
          <span className="bg-red-200 text-black px-4 py-2 rounded-lg">Ground Floor</span>
        </div>

        <div className="grid grid-cols-6 ml-5  gap-4 mb-10">
          <img src="/tbl.png" alt="T1" className="w-50 h-50 object-cover rounded-lg" />
          <img src="/tbl.png" alt="T2" className="w-50 h-50 object-cover rounded-lg" />
          <img src="/tbl.png" alt="T3" className="w-50 h-50 object-cover rounded-lg" />
          <img src="/tbl.png" alt="T4" className="w-50 h-50 object-cover rounded-lg" />
          <img src="/tbl.png" alt="T5" className="w-50 h-50 object-cover rounded-lg" />
          <img src="/tbl.png" alt="T6" className="w-50 h-50 object-cover rounded-lg" />
          <img src="/tbl.png" alt="T7" className="w-50 h-50 object-cover rounded-lg" />
          <img src="/tbl.png" alt="T8" className="w-50 h-50 object-cover rounded-lg" />
          <img src="/tbl.png" alt="T9" className="w-50 h-50 object-cover rounded-lg" />
          <img src="/tbl.png" alt="T10" className="w-50 h-50 object-cover rounded-lg" />
        </div>

        <div className="mb-10 ml-5 ">
          <span className="bg-red-200 text-black px-4 py-2 rounded-lg">First Floor</span>
        </div>

       
        <div className="grid grid-cols-6 ml-5  gap-4 mb-10">
          <img src="/tbl.png" alt="T1" className="w-50 h-50 object-cover rounded-lg" />
          <img src="/tbl.png" alt="T2" className="w-50 h-50 object-cover rounded-lg" />
          <img src="/tbl.png" alt="T3" className="w-50 h-50 object-cover rounded-lg" />
          <img src="/tbl.png" alt="T4" className="w-50 h-50 object-cover rounded-lg" />
          <img src="/tbl.png" alt="T5" className="w-50 h-50 object-cover rounded-lg" />
          <img src="/tbl.png" alt="T6" className="w-50 h-50 object-cover rounded-lg" />
          <img src="/tbl.png" alt="T7" className="w-50 h-50 object-cover rounded-lg" />
          <img src="/tbl.png" alt="T8" className="w-50 h-50 object-cover rounded-lg" />
          <img src="/tbl.png" alt="T9" className="w-50 h-50 object-cover rounded-lg" />
          <img src="/tbl.png" alt="T10" className="w-50 h-50 object-cover rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default Eatofy;
