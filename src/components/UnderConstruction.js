import React from 'react';
import { FaTools } from 'react-icons/fa';

const UnderConstruction = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 mt-24">
      <FaTools className="text-7xl text-yellow-500 animate-bounce mb-4 drop-shadow-lg" />
      <h2 className="text-3xl font-bold text-gray-800 mb-2">Under Development</h2>
      <p className="text-gray-600 text-center max-w-md">
        This page is currently being built. Please check back soon for updates!
      </p>
    </div>
  );
};

export default UnderConstruction; 