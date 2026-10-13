import React, { useState } from 'react';
import { ExternalLink, Github, Eye, Sparkles } from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { Project } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 relative border-t border-[#1F293D]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#35D6E8] tracking-widest uppercase mb-3">
            <span>Portfolio Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F5F7FA] font-display text-balance mb-4">
            Featured Projects
          </h2>
          <p className="text-base sm:text-lg text-[#A7B0C0] leading-relaxed">
            Real-world software engineering across computer vision, modern e-commerce systems, reactive fintech dashboards, and AI pipeline automations.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PROJECTS_DATA.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-2xl bg-[#0D1220] border border-[#1F293D] hover:border-[#4F8CFF]/70 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#4F8CFF]/15 flex flex-col justify-between overflow-hidden"
            >
              <div>
                {/* Project Image Container with Zoom effect */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-[#080B14]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      // Fallback in case of image failure
                      (e.currentTarget as HTMLElement).style.display = 'none';
                    }}
                  />
                  
                  {/* Subtle Gradient Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D1220] via-transparent to-transparent opacity-80" />

                  {/* Top Category Tag */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono font-medium bg-[#080B14]/85 border border-[#1F293D] text-[#35D6E8] backdrop-blur-md">
                      <Sparkles className="w-3 h-3 text-[#35D6E8]" />
                      {project.category}
                    </span>
                  </div>

                  {/* Quick View Button on Image Overlay */}
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="absolute top-4 right-4 p-2 rounded-lg bg-[#080B14]/85 border border-[#1F293D] text-[#A7B0C0] hover:text-white hover:bg-[#151D33] backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-200"
                    title="View case study details"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                </div>

                {/* Content Container */}
                <div className="p-6 sm:p-7 space-y-4">
                  <div className="space-y-1.5">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#F5F7FA] group-hover:text-white font-display transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-[#A7B0C0] leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Clean Technologies List (Separated, no pill sandwich) */}
                  <div className="pt-2">
                    <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#A7B0C0]">
                      {project.technologies.map((tech, idx) => (
                        <span key={tech} className="inline-flex items-center">
                          <span className="text-[#E8EDF5] hover:text-[#35D6E8] transition-colors">{tech}</span>
                          {idx < project.technologies.length - 1 && (
                            <span aria-hidden="true" className="mx-2 text-[#2D3B59]">·</span>
                          )}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 sm:p-7 pt-0 border-t border-[#1F293D]/50 mt-4 flex items-center justify-between gap-4">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-xs font-semibold text-[#35D6E8] hover:text-[#4F8CFF] transition-colors flex items-center gap-1.5"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Case Study Details</span>
                </button>

                <div className="flex items-center gap-2.5">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-[#E8EDF5] bg-[#111827] hover:bg-[#1A2338] border border-[#1F293D] hover:border-[#4F8CFF]/50 transition-colors"
                    aria-label={`View GitHub repository for ${project.title}`}
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>

                  {project.liveUrl && project.liveUrl !== '#' ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium text-white bg-gradient-to-r from-[#4F8CFF] to-[#35D6E8] hover:opacity-90 transition-opacity shadow-sm"
                      aria-label={`View Live Demo for ${project.title}`}
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium text-white bg-gradient-to-r from-[#4F8CFF] to-[#35D6E8] hover:opacity-90 transition-opacity shadow-sm"
                      aria-label={`View Live Demo for ${project.title}`}
                    >
                      <span>Case Study</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Modal Viewer */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
};
