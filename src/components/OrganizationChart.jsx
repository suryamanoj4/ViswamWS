import React from 'react';

const OrganizationChart = () => {
  return (
    <div className="flex flex-col items-center">
      {/* Top Level */}
      <div className="bg-blue-600 text-white px-6 py-3 rounded-lg mb-4">
        Governing Council
      </div>
      
      {/* Connector Line */}
      <div className="w-1 h-8 bg-gray-300"></div>
      
      {/* Second Level */}
      <div className="bg-blue-500 text-white px-6 py-3 rounded-lg mb-4">
        Advisory Council
      </div>
      
      {/* Connector Line */}
      <div className="w-1 h-8 bg-gray-300"></div>
      
      {/* Third Level */}
      <div className="bg-blue-500 text-white px-6 py-3 rounded-lg mb-4">
        Executive Council
      </div>
      
      {/* Connector Lines */}
      <div className="flex justify-center w-full mb-4">
        <div className="flex items-center">
          <div className="w-32 h-1 bg-gray-300"></div>
          <div className="w-1 h-8 bg-gray-300"></div>
          <div className="w-32 h-1 bg-gray-300"></div>
        </div>
      </div>
      
      {/* Bottom Level */}
      <div className="flex justify-between w-full max-w-2xl">
        <div className="bg-blue-400 text-white px-4 py-2 rounded-lg">
          Technology Workgroup
        </div>
        <div className="bg-blue-400 text-white px-4 py-2 rounded-lg">
          Policy Workgroup
        </div>
        <div className="bg-blue-400 text-white px-4 py-2 rounded-lg">
          Research Workgroup
        </div>
      </div>
    </div>
  );
};

export default OrganizationChart;