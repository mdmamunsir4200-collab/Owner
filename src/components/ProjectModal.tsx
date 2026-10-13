import React, { useState } from 'react';
import { X, ExternalLink, Github, CheckCircle2, Cpu, Layers, Terminal, Sparkles } from 'lucide-react';
import { Project } from '../types/portfolio';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [simulationActive, setSimulationActive] = useState(false);
  const [simStep, setSimStep] = useState(0);

  if (!project) return null;

  const runSimulation = () => {
    setSimulationActive(true);
    setSimStep(1);
    setTimeout(() => setSimStep(2), 700);
    setTimeout(() => setSimStep(3), 1400);
  };

  const resetSimulation = () => {
    setSimulationActive(false);
    setSimStep(0);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl bg-[#0D1220] border border-[#233152] rounded-2xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-[#080B14]">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover opacity-85"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D1220] via-[#0D1220]/40 to-transparent" />
          
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-[#A7B0C0] hover:text-white hover:bg-black/90 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F8CFF]"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Badge & Title overlay */}
          <div className="absolute bottom-4 left-6 right-6">
            <span className="text-xs font-mono text-[#35D6E8] uppercase tracking-wider">
              {project.category} · {project.status}
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-display mt-1">
              {project.title}
            </h3>
            <p className="text-sm text-[#A7B0C0] mt-1">
              {project.tagline}
            </p>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Tech Stack List */}
          <div>
            <h4 className="text-xs font-mono text-[#4F8CFF] uppercase tracking-wider mb-2">
              Technologies & Frameworks
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-md text-xs font-medium bg-[#111827] border border-[#1F293D] text-[#E8EDF5]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-xs font-mono text-[#4F8CFF] uppercase tracking-wider mb-2">
              Overview
            </h4>
            <p className="text-sm sm:text-base text-[#A7B0C0] leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Key Engineering Highlights */}
          <div>
            <h4 className="text-xs font-mono text-[#35D6E8] uppercase tracking-wider mb-3">
              Engineering Highlights
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.highlights.map((highlight, index) => (
                <li key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#A7B0C0]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* System Architecture */}
          <div className="p-4 rounded-xl bg-[#090D18] border border-[#1F293D]">
            <div className="flex items-center gap-2 mb-2 text-xs font-mono text-[#E8EDF5]">
              <Layers className="w-4 h-4 text-[#8B5CF6]" />
              <span className="font-semibold">System Architecture</span>
            </div>
            <p className="text-xs text-[#A7B0C0] leading-relaxed">
              {project.architecture}
            </p>
          </div>

          {/* Interactive Simulation Sandbox */}
          <div className="p-4 rounded-xl bg-[#080B14] border border-[#1F293D]">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2 text-xs font-mono text-[#35D6E8]">
                <Terminal className="w-4 h-4" />
                <span>Interactive Pipeline Simulation</span>
              </div>
              {!simulationActive ? (
                <button
                  onClick={runSimulation}
                  className="px-3 py-1 text-xs font-medium text-white bg-gradient-to-r from-[#4F8CFF] to-[#35D6E8] rounded-md hover:opacity-90 transition-opacity"
                >
                  Run Diagnostic Test
                </button>
              ) : (
                <button
                  onClick={resetSimulation}
                  className="px-2.5 py-0.5 text-[11px] text-[#A7B0C0] hover:text-white"
                >
                  Reset
                </button>
              )}
            </div>

            {simulationActive ? (
              <div className="space-y-2 text-xs font-mono bg-[#0D1220] p-3 rounded-lg border border-[#1F293D]/80">
                <div className="text-emerald-400 flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>[0.1s] Dispatching test payload to service endpoint...</span>
                </div>
                {simStep >= 2 && (
                  <div className="text-[#35D6E8] flex items-center gap-2">
                    <Cpu className="w-3.5 h-3.5" />
                    <span>[0.3s] Processing models & schema verification: OK</span>
                  </div>
                )}
                {simStep >= 3 && (
                  <div className="text-emerald-300 flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>[0.45s] Telemetry generated successfully. Response code 200 OK.</span>
                  </div>
                )}
              </div>
            ) : (
              <p className="text-xs text-[#A7B0C0]">
                Click "Run Diagnostic Test" to execute a live simulated pass through the service pipeline.
              </p>
            )}
          </div>

          {/* Footer Actions */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#1F293D]">
            <div className="flex items-center gap-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium text-[#E8EDF5] bg-[#111827] hover:bg-[#1A2338] border border-[#1F293D] transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>Source Code</span>
              </a>

              <a
                href={project.liveUrl}
                onClick={(e) => {
                  if (project.liveUrl === '#') {
                    e.preventDefault();
                    runSimulation();
                  }
                }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium text-white bg-gradient-to-r from-[#4F8CFF] to-[#35D6E8] hover:opacity-90 transition-opacity"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <button
              onClick={onClose}
              className="text-xs text-[#A7B0C0] hover:text-white px-3 py-2"
            >
              Close Window
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
