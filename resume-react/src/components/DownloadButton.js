import React, { useState } from 'react';

const DownloadButton = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleDownload = (format) => {
    // Custom alert function (will replace with SweetAlert2 later)
    const showAlert = (title, message, type = 'success') => {
      const alertDiv = document.createElement('div');
      alertDiv.className = `fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[9999] animate-slide-down`;
      
      const bgColor = type === 'success' ? 'bg-gradient-to-r from-secondary-500 to-primary-500' : 
                      type === 'info' ? 'bg-gradient-to-r from-primary-500 to-accent-500' : 
                      'bg-gradient-to-r from-red-500 to-orange-500';
      
      alertDiv.innerHTML = `
        <div class="${bgColor} text-white rounded-2xl shadow-2xl p-8 max-w-md mx-4">
          <div class="text-center">
            <div class="mb-4">
              ${type === 'success' ? 
                '<svg class="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>' :
                '<svg class="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>'
              }
            </div>
            <h2 class="text-2xl font-bold mb-2">${title}</h2>
            <p class="text-lg opacity-90 mb-6">${message}</p>
            <button onclick="this.parentElement.parentElement.parentElement.remove()" 
                    class="bg-white text-gray-800 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg">
              OK
            </button>
          </div>
        </div>
      `;
      
      document.body.appendChild(alertDiv);
      
      // Auto remove after 5 seconds
      setTimeout(() => {
        if (alertDiv.parentElement) {
          alertDiv.remove();
        }
      }, 5000);
    };

    if (format === 'pdf') {
      showAlert(
        'Download PDF',
        'Your resume is being prepared for download in PDF format!',
        'success'
      );
      // Simulate download
      setTimeout(() => {
        window.print(); // This will open print dialog which can save as PDF
      }, 1000);
    } else if (format === 'share') {
      showAlert(
        'Share Resume',
        'Resume link copied to clipboard! You can now share it via email or social media.',
        'info'
      );
      // Copy current URL to clipboard
      navigator.clipboard.writeText(window.location.href);
    } else if (format === 'email') {
      const subject = 'Resume - Nick Justin B. Magtuloy';
      const body = 'Please find my resume at: ' + window.location.href;
      window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      showAlert(
        'Email Resume',
        'Opening your email client...',
        'info'
      );
    }
    
    setShowMenu(false);
  };

  return (
    <div className="fixed bottom-8 left-8 z-50">
      {/* Menu Options */}
      {showMenu && (
        <div className="absolute bottom-20 left-0 bg-white rounded-2xl shadow-2xl p-4 mb-2 animate-slide-up min-w-[250px]">
          <button
            onClick={() => handleDownload('pdf')}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-primary-50 hover:to-secondary-50 transition-all group"
          >
            <svg className="w-6 h-6 text-primary-600 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <div className="text-left">
              <div className="font-semibold text-gray-800">Download PDF</div>
              <div className="text-xs text-gray-500">Save as PDF file</div>
            </div>
          </button>

          <button
            onClick={() => handleDownload('share')}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-secondary-50 hover:to-accent-50 transition-all group mt-2"
          >
            <svg className="w-6 h-6 text-secondary-600 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
            <div className="text-left">
              <div className="font-semibold text-gray-800">Share Link</div>
              <div className="text-xs text-gray-500">Copy link to clipboard</div>
            </div>
          </button>

          <button
            onClick={() => handleDownload('email')}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-accent-50 hover:to-primary-50 transition-all group mt-2"
          >
            <svg className="w-6 h-6 text-accent-600 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <div className="text-left">
              <div className="font-semibold text-gray-800">Send via Email</div>
              <div className="text-xs text-gray-500">Open email client</div>
            </div>
          </button>
        </div>
      )}

      {/* Main Download Button */}
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 text-white px-6 py-4 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3 font-semibold animate-pulse-slow"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
        <span className="hidden sm:inline">Download Resume</span>
        <span className="sm:hidden">Download</span>
      </button>
    </div>
  );
};

export default DownloadButton;
