import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: '💻 Technical Skills',
      skills: [
        'Web Development (HTML, CSS, JavaScript)',
        'Backend Development (PHP & MySQL)',
        'Database Management',
        'System Analysis & Design',
        'Git & GitHub Version Control',
        'Microsoft Office Suite',
        'Information Systems Development'
      ]
    },
    {
      title: '🔐 Cybersecurity Skills',
      skills: [
        'Network Security & Information Security',
        'Threat Detection & Mitigation',
        'Vulnerability Assessment',
        'Risk Assessment & Management',
        'Incident Response Planning',
        'Security Controls Implementation'
      ]
    },
    {
      title: '📊 Data Science & Analytics',
      skills: [
        'Data Analytics Fundamentals',
        'Excel, SQL, Tableau (Hands-on Experience)',
        'AI & Machine Learning Concepts',
        'Data Visualization & Reporting',
        'Statistical Analysis & Data Preparation',
        'Data Transformation & Processing',
        'Data-Driven Decision Making'
      ]
    },
    {
      title: '🎯 Soft Skills',
      skills: [
        'Problem Solving & Critical Thinking',
        'Team Collaboration & Leadership',
        'Event Organization & Management',
        'Public Speaking',
        'Project Management',
        'Stakeholder Engagement',
        'Communication & Presentation'
      ]
    }
  ];

  return (
    <section className="py-10 px-6 md:px-10 border-b border-gray-100 bg-gradient-to-br from-gray-50 to-white">
      <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-8 flex items-center gap-3">
        <span className="w-2 h-10 bg-gradient-to-b from-primary-600 to-secondary-600 rounded-full"></span>
        Skills & Expertise
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {skillCategories.map((category, index) => (
          <div 
            key={index}
            className="group bg-white p-6 rounded-2xl border-2 border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <h3 className="text-2xl font-bold text-primary-700 mb-5 pb-3 border-b-2 border-primary-200 group-hover:border-primary-400 transition-colors">
              {category.title}
            </h3>
            <ul className="space-y-3">
              {category.skills.map((skill, idx) => (
                <li key={idx} className="flex items-start group/item">
                  <span className="text-secondary-600 font-bold text-xl mr-3 mt-0.5 group-hover/item:scale-125 transition-transform">▹</span>
                  <span className="text-gray-700 group-hover/item:text-gray-900 group-hover/item:translate-x-1 transition-all">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
