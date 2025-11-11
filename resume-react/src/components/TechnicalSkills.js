import React from 'react';

const TechnicalSkills = () => {
  const skills = [
    { name: 'HTML5', bg: 'from-orange-600 to-orange-500', text: 'HTML5' },
    { name: 'CSS3', bg: 'from-blue-600 to-blue-500', text: 'CSS3' },
    { name: 'JavaScript', bg: 'from-yellow-400 to-yellow-300', text: 'JS', textColor: 'text-gray-800' },
    { name: 'PHP', bg: 'from-indigo-600 to-indigo-500', text: 'PHP' },
    { name: 'Python', bg: 'from-blue-700 to-blue-600', text: 'PY' },
    { name: 'Django', bg: 'from-green-900 to-green-800', text: 'DJ' },
    { name: 'MySQL', bg: 'from-cyan-600 to-cyan-500', text: 'SQL' },
    { name: 'Git', bg: 'from-red-600 to-red-500', text: 'GIT' },
    { name: 'React', bg: 'from-cyan-400 to-cyan-300', text: '⚛', textColor: 'text-gray-800' },
    { name: 'Bootstrap', bg: 'from-purple-700 to-purple-600', text: 'B' },
    { name: 'Tailwind CSS', bg: 'from-cyan-500 to-cyan-400', text: 'TW' },
    { name: 'Node.js', bg: 'from-green-600 to-green-500', text: 'NODE' },
  ];

  return (
    <section className="py-10 px-6 md:px-10 border-b border-gray-100 bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-8 flex items-center gap-3">
        <span className="w-2 h-10 bg-gradient-to-b from-primary-600 to-secondary-600 rounded-full"></span>
        💻 Technical Stack
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 mt-8">
        {skills.map((skill, index) => (
          <div 
            key={index}
            className="group bg-white rounded-2xl p-5 text-center transition-all duration-300 shadow-md hover:shadow-2xl hover:-translate-y-4 border-2 border-gray-100 hover:border-transparent"
          >
            <div className={`w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 rounded-xl bg-gradient-to-br ${skill.bg} flex items-center justify-center text-white ${skill.textColor || ''} font-bold text-lg md:text-xl shadow-lg transform transition-all group-hover:scale-125 group-hover:rotate-12`}>
              {skill.text}
            </div>
            <p className="font-semibold text-gray-800 text-xs md:text-sm group-hover:text-primary-700 transition-colors">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnicalSkills;
