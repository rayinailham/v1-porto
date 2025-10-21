'use client';

import React, { useState } from 'react';
import FlowingMenu from './ui/flowing-menu';

interface ProjectItem {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

const ProjectSection: React.FC = () => {
  const [activeProject, setActiveProject] = useState<number>(0);

  const projects: ProjectItem[] = [
    {
      id: 0,
      title: 'E-Commerce Platform',
      description: 'Modern shopping experience with AI-powered recommendations',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      link: '#'
    },
    {
      id: 1,
      title: 'Task Management App',
      description: 'Collaborative workspace for teams with real-time updates',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop',
      link: '#'
    },
    {
      id: 2,
      title: 'Weather Dashboard',
      description: 'Beautiful weather visualization with detailed forecasts',
      image: 'https://images.unsplash.com/photo-1599424405976-9b123b6bdf17?w=800&h=600&fit=crop',
      link: '#'
    },
    {
      id: 3,
      title: 'Social Media Analytics',
      description: 'Comprehensive analytics dashboard for social media metrics',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      link: '#'
    }
  ];

  const flowingMenuItems = projects.map(project => ({
    link: project.link,
    text: project.title,
    image: project.image
  }));

  const handleProjectHover = (projectId: number) => {
    setActiveProject(projectId);
  };

  return (
    <section className="min-h-screen bg-gray-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - FlowingMenu */}
          <div className="order-2 lg:order-1">
            <div
              style={{ height: '600px', position: 'relative' }}
            >
              <FlowingMenu
                items={flowingMenuItems}
                onProjectHover={handleProjectHover}
              />
            </div>
          </div>

          {/* Right side - Project Image Only */}
          <div className="order-1 lg:order-2">
            <div className="relative group h-[600px]">
              <img
                src={projects[activeProject].image}
                alt={projects[activeProject].title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;