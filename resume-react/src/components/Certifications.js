import React, { useState } from 'react';

const Certifications = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const certifications = [
    {
      title: '🥈 Hackathon Programming - 2nd Runner Up',
      institution: 'Santa Rita College of Pampanga - Tech Day 2023',
      date: 'December 4, 2023',
      description: 'Achieved 2nd Runner Up in the Hackathon Programming competition during Tech Day 2023.',
      badge: 'AWARD',
      borderColor: 'border-yellow-500',
      image: `${process.env.PUBLIC_URL}/certificates/HACKATON.jpg`
    },
    {
      title: '🏆 Certificate of Recognition - Innovators Award',
      institution: 'Santa Rita College of Pampanga - SSITE',
      date: 'September 11, 2025',
      description: 'Recognized for outstanding creativity, ingenuity, and innovation.',
      badge: 'AWARD',
      borderColor: 'border-yellow-500',
      image: `${process.env.PUBLIC_URL}/certificates/INNO.jpg`
    },
    {
      title: '🔐 Cisco - Junior Cybersecurity Analyst Career Path',
      institution: 'Cisco Networking Academy',
      date: 'May 23, 2025',
      description: 'Successfully completed the Junior Cybersecurity Analyst Career Path.',
      badge: 'CISCO',
      borderColor: 'border-blue-500',
      image: `${process.env.PUBLIC_URL}/certificates/CISCO1.jpg`
    },
    {
      title: '📊 Cisco - Data Analytics Essentials',
      institution: 'Cisco Networking Academy',
      date: 'May 9, 2025',
      description: 'Successfully completed Data Analytics Essentials course.',
      badge: 'CISCO',
      borderColor: 'border-blue-500',
      image: `${process.env.PUBLIC_URL}/certificates/CISCO2.jpg`
    },
    {
      title: '🎯 PMI Project Management Ready® - Global Credential',
      institution: 'Project Management Institute (PMI)',
      date: 'January 10, 2025',
      description: 'Formally evaluated at the foundational levels in Project Management.',
      badge: 'PMI',
      borderColor: 'border-purple-500',
      image: `${process.env.PUBLIC_URL}/certificates/PMI.jpg`
    },
    {
      title: '📜 PSITE Membership',
      institution: 'Philippine Society of IT Educators',
      date: '2024',
      description: 'Active member of PSITE organization.',
      badge: 'MEMBER',
      borderColor: 'border-green-500',
      image: `${process.env.PUBLIC_URL}/certificates/PSITE.jpg`
    },
    {
      title: '🎓 IRCITE Participation',
      institution: 'International Research Conference',
      date: '2024',
      description: 'Participated in IRCITE conference.',
      badge: 'EVENT',
      borderColor: 'border-indigo-500',
      image: `${process.env.PUBLIC_URL}/certificates/IRCITE.jpg`
    }
  ];

  return (
    <>
      <section className="py-10 px-6 md:px-10 border-b border-gray-100">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-8 flex items-center gap-3">
          <span className="w-2 h-10 bg-gradient-to-b from-primary-600 to-secondary-600 rounded-full"></span>
          Certifications & Achievements
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl border-2 border-gray-100 hover:border-transparent shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden cursor-pointer"
              onClick={() => setSelectedImage(cert.image)}
            >
              <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${cert.borderColor.replace('border-', 'from-')} to-opacity-80`}></div>
              
              {/* Certificate Image */}
              <div className="relative h-48 overflow-hidden bg-gray-100">
                <img 
                  src={cert.image} 
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>

              {/* Certificate Info */}
              <div className="p-4">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="text-sm font-bold text-gray-800 flex-1 line-clamp-2">{cert.title}</h3>
                  <span className={`px-2 py-1 bg-gradient-to-r ${cert.borderColor.replace('border-', 'from-')} to-opacity-80 text-white text-xs font-bold rounded-full shadow-md flex-shrink-0`}>
                    {cert.badge}
                  </span>
                </div>
                <p className="text-primary-700 font-semibold text-xs mb-1 line-clamp-1">
                  {cert.institution}
                </p>
                <p className="text-gray-600 text-xs mb-2">
                  {cert.date}
                </p>
                <p className="text-gray-700 text-xs leading-relaxed line-clamp-2">{cert.description}</p>
                <button className="mt-3 text-primary-600 hover:text-primary-800 text-xs font-semibold flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  View Certificate
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <img 
            src={selectedImage} 
            alt="Certificate" 
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
};

export default Certifications;
