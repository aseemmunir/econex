import React from 'react';
import '../../index.css'
const Navbar= () => {
  
  const handleCall = () => {
    window.location.href = 'tel:+1234567890';
  };

  return (
    <div className="w-full   py-3 px-5 flex justify-between items-center">
      
      <button 
        onClick={handleCall} 
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
      >
        Call
      </button>
    </div>
  );
};

export default Navbar;
