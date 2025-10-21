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
      image: 'https://images.unsplash.com/photo-1592210454359-9043fae6d5b3?w=800&h=600&fit=crop',
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
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore my latest work and creative solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - FlowingMenu */}
          <div className="order-2 lg:order-1">
            <div
              style={{ height: '600px', position: 'relative' }}
              className="bg-black/20 backdrop-blur-sm rounded-2xl p-4 border border-white/10"
            >
              <FlowingMenu
                items={flowingMenuItems}
              />
            </div>
          </div>

          {/* Right side - Project Image and Details */}
          <div className="order-1 lg:order-2">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              <div className="relative bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div className="aspect-video rounded-xl overflow-hidden mb-6">
                  <img
                    src={projects[activeProject].image}
                    alt={projects[activeProject].title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-3xl font-bold text-white mb-3">
                  {projects[activeProject].title}
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  {projects[activeProject].description}
                </p>
                <div className="flex gap-4">
                  <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200">
                    View Project
                  </button>
                  <button className="px-6 py-3 bg-white/10 text-white rounded-lg font-semibold hover:bg-white/20 backdrop-blur-sm border border-white/20 transition-all duration-200">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;