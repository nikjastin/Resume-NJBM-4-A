import React from 'react';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Science in Information Systems',
      institution: 'Santa Rita College of Pampanga',
      date: '2023 - Present',
      location: 'San Jose, Sta. Rita, Pampanga',
      icon: '🎓',
      color: 'from-primary-600 to-secondary-600',
      current: true
    },
    {
      degree: 'Senior High School',
      institution: 'Santo Tomas High School',
      date: '2020 - 2023',
      location: 'Santo Tomas, Sasmuan, Pampanga',
      icon: '📚',
      color: 'from-secondary-600 to-accent-600'
    },
    {
      degree: 'Junior High School',
      institution: 'Santo Tomas National High School',
      date: '2017 - 2020',
      location: 'Santo Tomas, Sasmuan, Pampanga',
      icon: '📖',
      color: 'from-accent-600 to-primary-600'
    },
    {
      degree: 'Primary School',
      institution: 'Sasmuan Elementary School',
      date: '2011 - 2016',
      location: 'Santa Lucia, Sasmuan, Pampanga',
      icon: '✏️',
      color: 'from-primary-500 to-secondary-500'
    }
  ];

  return (
    <section className="py-10 px-6 md:px-10 border-b border-gray-100">
      <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-8 flex items-center gap-3">
        <span className="w-2 h-10 bg-gradient-to-b from-primary-600 to-secondary-600 rounded-full"></span>
        Education
      </h2>
      <div className="relative">
        <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-600 via-secondary-600 to-accent-600 hidden md:block"></div>
        
        <div className="space-y-8 mt-6">
          {education.map((edu, index) => (
            <div 
              key={index}
              className="relative group"
            >
              <div className="absolute left-6 top-6 w-5 h-5 rounded-full bg-white border-4 border-primary-600 hidden md:block group-hover:scale-150 transition-transform z-10"></div>
              
              <div className="md:ml-20 bg-white p-6 rounded-2xl border-2 border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-start gap-4">
                  <div className="text-4xl flex-shrink-0 transform group-hover:scale-110 group-hover:rotate-12 transition-all">
                    {edu.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between flex-wrap gap-2 mb-3">
                      <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                        {edu.degree}
                        {edu.current && (
                          <span className="px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-semibold rounded-full animate-pulse">
                            Current
                          </span>
                        )}
                      </h3>
                      <span className={`px-4 py-1 bg-gradient-to-r ${edu.color} text-white text-sm font-semibold rounded-full shadow-md`}>
                        {edu.date}
                      </span>
                    </div>
                    <p className="text-primary-700 font-semibold text-lg mb-2 flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      {edu.institution}
                    </p>
                    <p className="text-gray-600 flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {edu.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
