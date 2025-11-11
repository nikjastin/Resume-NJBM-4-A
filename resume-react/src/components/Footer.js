import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-dark-900 via-primary-900 to-dark-900 text-white py-10 px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-primary-300 to-secondary-300 bg-clip-text text-transparent">
            Nick Justin B. Magtuloy
          </h3>
          <p className="text-gray-300">Information Systems Student | Full Stack Developer</p>
        </div>
        
        <div className="flex justify-center gap-6 mb-6">
          <a href="mailto:nickjustinmagtuloy24@gmail.com" className="group flex items-center gap-2 text-gray-300 hover:text-primary-300 transition-colors">
            <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="text-sm">Email</span>
          </a>
          <a href="https://github.com/nikjastin" target="_blank" rel="noreferrer" className="group flex items-center gap-2 text-gray-300 hover:text-primary-300 transition-colors">
            <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            <span className="text-sm">GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/nickjustinmagtuloy" target="_blank" rel="noreferrer" className="group flex items-center gap-2 text-gray-300 hover:text-primary-300 transition-colors">
            <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            <span className="text-sm">LinkedIn</span>
          </a>
        </div>

        <div className="border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-400 mb-2">&copy; 2024 Nick Justin B. Magtuloy. All rights reserved.</p>
          <p className="text-sm text-gray-500">Last Updated: November 2024</p>
          <div className="flex items-center justify-center gap-2 mt-4 text-xs text-gray-500">
            <span>Built with</span>
            <span className="text-primary-400 font-semibold">React</span>
            <span>&</span>
            <span className="text-secondary-400 font-semibold">Tailwind CSS</span>
            <svg className="w-4 h-4 text-red-500 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
