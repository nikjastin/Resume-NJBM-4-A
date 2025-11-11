import React from 'react';

const Projects = () => {
  return (
    <section className="py-10 px-6 md:px-10 border-b border-gray-100">
      <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-8 flex items-center gap-3">
        <span className="w-2 h-10 bg-gradient-to-b from-primary-600 to-secondary-600 rounded-full"></span>
        Projects & Systems Developed
      </h2>
      <div className="mt-6">
        <div className="group bg-white p-8 rounded-2xl border-2 border-gray-100 hover:border-transparent shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
          <div className="flex items-start gap-4 mb-4">
            <div className="p-4 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-xl text-white shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-bold text-primary-800 mb-2">
                🐾 A Web-Based Adoption System for Lyka's Dog and Cat Shelter
              </h3>
              <p className="text-secondary-700 font-semibold text-lg mb-2">
                Connecting Pets with New Families
              </p>
              <span className="inline-block px-4 py-1 bg-gradient-to-r from-primary-600 to-secondary-600 text-white text-sm font-semibold rounded-full shadow-md">
                Academic Year 2024-2025
              </span>
            </div>
          </div>
          <p className="text-gray-700 mb-6 leading-relaxed text-lg">
            Developed a comprehensive web-based platform to streamline the pet adoption process, 
            connecting potential pet owners with animals in need of homes. The system features:
          </p>
          <div className="grid md:grid-cols-2 gap-3 mb-6">
            {[
              'User-friendly interface for browsing available pets',
              'Online application and screening process',
              'Database management for pet records and adopter information',
              'Administrative dashboard for shelter management'
            ].map((feature, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-gradient-to-r from-primary-50 to-secondary-50 p-4 rounded-xl">
                <span className="text-secondary-600 font-bold text-xl flex-shrink-0">✓</span>
                <span className="text-gray-700 font-medium">{feature}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-3 pt-4 border-t-2 border-gray-100">
            <strong className="text-primary-700 font-bold">Technologies Used:</strong>
            {['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'].map((tech, idx) => (
              <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-semibold hover:bg-primary-100 hover:text-primary-700 transition-colors">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
