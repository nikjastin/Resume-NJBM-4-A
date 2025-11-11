import React from 'react';

const Objective = () => {
  return (
    <section className="py-10 px-6 md:px-10 border-b border-gray-100 bg-gradient-to-br from-primary-50 to-secondary-50">
      <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-8 flex items-center gap-3">
        <span className="w-2 h-10 bg-gradient-to-b from-primary-600 to-secondary-600 rounded-full"></span>
        Career Objective
      </h2>
      <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-primary-600 hover:shadow-xl transition-all">
        <div className="flex items-start gap-4">
          <div className="p-4 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-xl text-white shadow-lg flex-shrink-0">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed flex-1">
            I am seeking a company where I can use my <span className="font-semibold text-primary-700">experience and education</span> to help the company <span className="font-semibold text-secondary-700">meet and surpass its goals</span>. As an Information Systems student with a passion for technology and innovation, I aim to contribute to cutting-edge projects while continuously growing my skills in software development, data analytics, and cybersecurity.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Objective;
