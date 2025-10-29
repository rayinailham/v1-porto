'use client';

import React, { useState } from 'react';
import Image from "next/image";
import FlowingMenu from '@/components/ui/flowing-menu';
import TargetCursor from '@/components/ui/target-cursor';
import { projectsData, Project } from '@/data/projects';

const ProjectSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(projectsData[0]);

  const handleProjectSelect = (projectId: string) => {
    const project = projectsData.find(p => p.id === projectId);
    setSelectedProject(project || null);
  };

  const handleProjectHover = (projectId: string) => {
    const project = projectsData.find(p => p.id === projectId);
    setSelectedProject(project || null);
  };

  const menuItems = projectsData.map(project => ({
    id: project.id,
    name: project.name,
    techStack: project.techStack,
    link: project.link
  }));

  return (
    <section id="projects" className="min-h-screen bg-gray-50 py-20 px-4 pt-28">
      <div className="max-w-7xl mx-auto h-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Featured Projects
          </h2>
        </div>
        
        <div className="grid grid-cols-3 gap-8 h-[600px]" style={{ gridTemplateColumns: '3fr 2fr' }}>
          {/* Left Column - Flowing Menu */}
          <div className="h-full">
            <FlowingMenu
              items={menuItems}
              onProjectSelect={handleProjectSelect}
              onProjectHover={handleProjectHover}
            />
          </div>
          
          {/* Right Column - Project Details */}
          <div className="project-details-container h-full bg-white rounded-lg p-4 overflow-hidden">
            {selectedProject ? (
              <div className="h-full flex flex-col">
                {/* Project Image - Fixed Height */}
                <div className="h-48 mb-6 flex-shrink-0">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.name}
                    className="w-full h-full object-cover rounded-lg"
                    width={400}
                    height={192}
                  />
                </div>
                
                {/* Project Name - Fixed Height */}
                <div className="mb-2 min-h-[3rem] flex items-start">
                  <h3 className="cursor-target text-2xl font-bold text-gray-900 inline-block">
                    {selectedProject.name}
                  </h3>
                </div>
                
                {/* Role - Split into individual items */}
                <div className="mb-4 min-h-[1.5rem] flex flex-wrap items-center gap-2">
                  {selectedProject.role.split(',').map((role, index) => (
                    <span
                      key={index}
                      className="cursor-target text-lg text-gray-600 inline-block"
                    >
                      {role.trim()}
                      {index < selectedProject.role.split(',').length - 1 && ','}
                    </span>
                  ))}
                </div>
                
                {/* Description - Flexible but with scroll if needed */}
                <div className="flex-grow mb-4 overflow-y-auto">
                  <p className="text-gray-700 leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>
                
                {/* Date - Fixed Height */}
                <p className="text-sm text-gray-500 mb-4 min-h-[1.25rem] flex items-center">
                  {selectedProject.date}
                </p>
                
                {/* Tech Stack - Fixed Height with scroll if needed */}
                <div className="max-h-20 overflow-y-auto flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech, index) => (
                    <div
                      key={index}
                      className="cursor-target flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-full flex-shrink-0"
                    >
                      <Image
                        src={tech.icon}
                        alt={tech.name}
                        className="w-4 h-4"
                        width={16}
                        height={16}
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                        }}
                      />
                      <span className="text-xs text-gray-700 font-medium">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="h-full flex items-center justify-center">
                <p className="text-gray-500 text-lg">Select a project to view details</p>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* TargetCursor Component - Only active within project details container */}
      <TargetCursor
        targetSelector=".project-details-container .cursor-target"
        spinDuration={2}
        hideDefaultCursor={true}
      />
    </section>
  );
};

export default ProjectSection;