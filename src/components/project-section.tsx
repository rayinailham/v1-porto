'use client';

import React from 'react';

const ProjectSection: React.FC = () => {
  return (
    <section className="min-h-screen bg-gray-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
        </div>
        
        <div className="flex items-center justify-center h-96">
          <p className="text-gray-500 text-lg">Projects coming soon...</p>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;