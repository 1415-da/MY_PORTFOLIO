import React from 'react';

const WorkExperience = () => {
  return (
    <div className="space-y-8">
      {/* Work Experience Section */}
      <div className="bg-[#222222] rounded-xl p-4 md:p-8 shadow-lg border border-[#333333] hover:border-[#FFD600] transition-colors duration-300">
        <div className="flex items-center mb-6 md:mb-8">
          <div className="w-8 h-8 md:w-10 md:h-10 bg-[#FFD600] rounded-lg flex items-center justify-center mr-3 md:mr-4">
            <svg className="w-5 h-5 md:w-6 md:h-6 text-[#131313]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-[#f5f5f5]">Work Experience</h2>
        </div>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-3 md:left-5 top-0 bottom-0 w-0.5 bg-[#FFD600]"></div>
          
          {/* Work Experience Items */}
          <div className="relative pl-12 md:pl-16 pb-6 md:pb-8">
            {/* Timeline Dot */}
            <div className="absolute left-1 md:left-3 top-2 w-3 h-3 md:w-4 md:h-4 bg-[#FFD600] rounded-full border-2 md:border-4 border-[#222222]"></div>
            
            <div className="bg-[#181818] rounded-lg p-4 md:p-6 border border-[#333333] hover:border-[#FFD600]/30 transition-all duration-300 hover:shadow-lg group">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3 gap-2 md:gap-0">
                <h3 className="text-base md:text-lg font-bold text-[#f5f5f5] group-hover:text-[#FFD600] transition-colors duration-300">Operations Intern</h3>
                <span className="text-[#FFD600] text-xs md:text-sm font-semibold bg-[#FFD600]/10 px-2 md:px-3 py-1 rounded-full self-start">Nov 2025 - Present</span>
              </div>
              <p className="text-[#f5f5f5] font-semibold text-sm mb-2">Tradyon | AI-Driven Trade Intelligence Startup</p>
              <p className="text-[#B0B0B0] text-sm mb-3">Bangalore, Karnataka (On-site)</p>
              <ul className="space-y-2">
                <li className="text-[#B0B0B0] text-sm leading-relaxed flex items-start">
                  <span className="text-[#FFD600] mr-2">•</span>
                  <span>Performed EDA on global trade data sourced from Panjiva and Trade Map using Python, Matplotlib, and Seaborn, identifying supply-chain trends and improving forecasting accuracy by 30%.</span>
                </li>
                <li className="text-[#B0B0B0] text-sm leading-relaxed flex items-start">
                  <span className="text-[#FFD600] mr-2">•</span>
                  <span>Built and maintained Excel-based CRM systems and dashboards for 20+ international accounts, improving data integrity, accessibility, and reporting efficiency by 30%.</span>
                </li>
                <li className="text-[#B0B0B0] text-sm leading-relaxed flex items-start">
                  <span className="text-[#FFD600] mr-2">•</span>
                  <span>Managed end-to-end operational workflows, coordinating with cross-functional teams and clients to translate business requirements into structured, analysis-ready datasets with 99% accuracy.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;

