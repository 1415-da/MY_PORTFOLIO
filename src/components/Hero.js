import React from 'react';

const Hero = () => {
  return (
    <div className="space-y-8">
      {/* Education Section */}
      <div className="bg-[#1f1f1f] rounded-xl p-4 md:p-8 shadow-lg border border-[#333333] hover:border-[#FFD600] transition-colors duration-300">
        <div className="flex items-center mb-6 md:mb-8">
          <div className="w-8 h-8 md:w-10 md:h-10 bg-[#FFD600] rounded-lg flex items-center justify-center mr-3 md:mr-4">
            <svg className="w-5 h-5 md:w-6 md:h-6 text-[#1f1f1f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-[#f5f5f5]">Education</h2>
        </div>
        
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-3 md:left-5 top-0 bottom-0 w-0.5 bg-[#FFD600]"></div>
          
          {/* Education Item */}
          <div className="relative pl-12 md:pl-16 pb-6 md:pb-8">
            {/* Timeline Dot */}
            <div className="absolute left-1 md:left-3 top-2 w-3 h-3 md:w-4 md:h-4 bg-[#FFD600] rounded-full border-2 md:border-4 border-[#1f1f1f]"></div>
            
            <div className="bg-[#181818] rounded-lg p-4 md:p-6 border border-[#333333] hover:border-[#FFD600]/30 transition-all duration-300 hover:shadow-lg">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3 gap-2 md:gap-0">
                <h3 className="text-base md:text-lg font-bold text-[#f5f5f5]">CMR Institute of Technology</h3>
                <span className="text-[#FFD600] text-xs md:text-sm font-semibold bg-[#FFD600]/10 px-2 md:px-3 py-1 rounded-full self-start">2023 - 2027</span>
              </div>
              <p className="text-[#f5f5f5] font-semibold text-sm mb-2">Bachelor of Technology in Computer Science</p>
              <p className="text-[#B0B0B0] text-sm mb-2">Bangalore, India</p>
              <p className="text-[#B0B0B0] text-sm leading-relaxed">
                Focus: Data Science, Machine Learning, Artificial Intelligence, Full Stack Development, Software Engineering
              </p>
            </div>
          </div>
          
          {/* Add more education items here if needed */}
        </div>
      </div>

      {/* Certifications Section */}
      <div className="bg-[#1f1f1f] rounded-xl p-4 md:p-8 shadow-lg border border-[#333333] hover:border-[#FFD600] transition-colors duration-300">
        <div className="flex items-center mb-6 md:mb-8">
          <div className="w-8 h-8 md:w-10 md:h-10 bg-[#FFD600] rounded-lg flex items-center justify-center mr-3 md:mr-4">
            <svg className="w-5 h-5 md:w-6 md:h-6 text-[#1f1f1f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-[#f5f5f5]">Certifications</h2>
        </div>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-3 md:left-5 top-0 bottom-0 w-0.5 bg-[#FFD600]"></div>
          
          <div className="space-y-4 md:space-y-6">
            {/* Certification Item 1 */}
            <div className="relative pl-12 md:pl-16">
              {/* Timeline Dot */}
              <div className="absolute left-1 md:left-3 top-2 w-3 h-3 md:w-4 md:h-4 bg-[#FFD600] rounded-full border-2 md:border-4 border-[#1f1f1f]"></div>
              
              <div className="bg-[#181818] rounded-lg p-4 md:p-6 border border-[#333333] hover:border-[#FFD600]/30 transition-all duration-300 hover:shadow-lg group">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3 gap-2 md:gap-0">
                  <h3 className="text-base md:text-lg font-bold text-[#f5f5f5] group-hover:text-[#FFD600] transition-colors duration-300">AI for Product Management</h3>
                  <span className="text-[#FFD600] text-xs md:text-sm font-semibold bg-[#FFD600]/10 px-2 md:px-3 py-1 rounded-full self-start">July 2025</span>
                </div>
                <p className="text-[#B0B0B0] text-sm mb-2 font-medium">Pendo</p>
                <p className="text-[#B0B0B0] text-sm leading-relaxed">Leveraging AI throughout the development life cycle and building AI-powered features.</p>
              </div>
            </div>
            {/* Certification Item 2 */}
            <div className="relative pl-12 md:pl-16">
              {/* Timeline Dot */}
              <div className="absolute left-1 md:left-3 top-2 w-3 h-3 md:w-4 md:h-4 bg-[#FFD600] rounded-full border-2 md:border-4 border-[#1f1f1f]"></div>
              
              <div className="bg-[#181818] rounded-lg p-4 md:p-6 border border-[#333333] hover:border-[#FFD600]/30 transition-all duration-300 hover:shadow-lg group">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3 gap-2 md:gap-0">
                  <h3 className="text-base md:text-lg font-bold text-[#f5f5f5] group-hover:text-[#FFD600] transition-colors duration-300">Become SQL Champion</h3>
                  <span className="text-[#FFD600] text-xs md:text-sm font-semibold bg-[#FFD600]/10 px-2 md:px-3 py-1 rounded-full self-start">Apr 2025</span>
                </div>
                <p className="text-[#B0B0B0] text-sm mb-2 font-medium">Udemy</p>
                <p className="text-[#B0B0B0] text-sm leading-relaxed">Advanced SQL programming and database management techniques</p>
              </div>
            </div>
            
            {/* Certification Item 3 */}
            <div className="relative pl-12 md:pl-16">
              {/* Timeline Dot */}
              <div className="absolute left-1 md:left-3 top-2 w-3 h-3 md:w-4 md:h-4 bg-[#FFD600] rounded-full border-2 md:border-4 border-[#1f1f1f]"></div>
              
              <div className="bg-[#181818] rounded-lg p-4 md:p-6 border border-[#333333] hover:border-[#FFD600]/30 transition-all duration-300 hover:shadow-lg group">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3 gap-2 md:gap-0">
                  <h3 className="text-base md:text-lg font-bold text-[#f5f5f5] group-hover:text-[#FFD600] transition-colors duration-300">Deloitte Australia - Data Analytics</h3>
                  <span className="text-[#FFD600] text-xs md:text-sm font-semibold bg-[#FFD600]/10 px-2 md:px-3 py-1 rounded-full self-start">Apr 2025</span>
                </div>
                <p className="text-[#B0B0B0] text-sm mb-2 font-medium">Forage</p>
                <p className="text-[#B0B0B0] text-sm leading-relaxed">Data analytics and business intelligence fundamentals</p>
              </div>
            </div>
            
            {/* Certification Item 4 */}
            <div className="relative pl-12 md:pl-16">
              {/* Timeline Dot */}
              <div className="absolute left-1 md:left-3 top-2 w-3 h-3 md:w-4 md:h-4 bg-[#FFD600] rounded-full border-2 md:border-4 border-[#1f1f1f]"></div>
              
              <div className="bg-[#181818] rounded-lg p-4 md:p-6 border border-[#333333] hover:border-[#FFD600]/30 transition-all duration-300 hover:shadow-lg group">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3 gap-2 md:gap-0">
                  <h3 className="text-base md:text-lg font-bold text-[#f5f5f5] group-hover:text-[#FFD600] transition-colors duration-300">Goldman Sachs Software Engineering</h3>
                  <span className="text-[#FFD600] text-xs md:text-sm font-semibold bg-[#FFD600]/10 px-2 md:px-3 py-1 rounded-full self-start">Feb 2025</span>
                </div>
                <p className="text-[#B0B0B0] text-sm mb-2 font-medium">Goldman Sachs</p>
                <p className="text-[#B0B0B0] text-sm leading-relaxed">Software engineering principles and best practices</p>
              </div>
            </div>
            
            {/* Certification Item 5 */}
            <div className="relative pl-12 md:pl-16">
              {/* Timeline Dot */}
              <div className="absolute left-1 md:left-3 top-2 w-3 h-3 md:w-4 md:h-4 bg-[#FFD600] rounded-full border-2 md:border-4 border-[#1f1f1f]"></div>
              
              <div className="bg-[#181818] rounded-lg p-4 md:p-6 border border-[#333333] hover:border-[#FFD600]/30 transition-all duration-300 hover:shadow-lg group">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3 gap-2 md:gap-0">
                  <h3 className="text-base md:text-lg font-bold text-[#f5f5f5] group-hover:text-[#FFD600] transition-colors duration-300">Python Programming Masterclass</h3>
                  <span className="text-[#FFD600] text-xs md:text-sm font-semibold bg-[#FFD600]/10 px-2 md:px-3 py-1 rounded-full self-start">Dec 2023</span>
                </div>
                <p className="text-[#B0B0B0] text-sm mb-2 font-medium">Udemy</p>
                <p className="text-[#B0B0B0] text-sm leading-relaxed">Python programming fundamentals and advanced concepts</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
