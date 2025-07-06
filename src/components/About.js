import React from 'react';

const About = () => {
  return (
    <div className="space-y-8">
      {/* About Me Section */}
      <div className="bg-[#222222] rounded-xl p-8 shadow-lg border border-[#333333] hover:border-[#FFD600] transition-colors duration-300">
        <div className="flex items-center mb-6">
          <div className="w-1 h-8 bg-[#FFD600] rounded mr-4"></div>
          <h2 className="text-2xl font-bold text-white">About Me</h2>
        </div>
        
        <p className="text-[#B0B0B0] leading-relaxed text-sm">
        I’m a disciplined and detail-oriented Computer Science student who brings the same focus and consistency to coding as I do to lifting in the gym. With a passion for transforming complex challenges into clean, data-driven solutions, I thrive in collaborative environments and never shy away from pushing boundaries — whether it’s breaking a personal record or building something new in tech. A fast learner and self-starter, I continuously sharpen my skills through hands-on projects, self-directed learning, and a mindset built on growth, resilience, and routine. For me, writing clean code and staying fit aren’t separate — they’re part of the same drive to improve every single day.
        </p>
      </div>

      {/* What I'm Doing Section */}
      <div className="bg-[#222222] rounded-xl p-8 shadow-lg border border-[#333333] hover:border-[#FFD600] transition-colors duration-300">
        <div className="flex items-center mb-6">
          <div className="w-1 h-8 bg-[#FFD600] rounded mr-4"></div>
          <h2 className="text-2xl font-bold text-white">What I'm Doing</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#181818] rounded-lg p-6 border border-[#333333]">
            <div className="w-12 h-12 bg-[#FFD600] rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-[#131313]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Data Science</h3>
            <p className="text-[#B0B0B0] text-sm">
              Machine Learning, Analytics, and Data Visualization using Python, Pandas, and modern ML frameworks.
            </p>
          </div>
          
          <div className="bg-[#181818] rounded-lg p-6 border border-[#333333]">
            <div className="w-12 h-12 bg-[#FFD600] rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-[#131313]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Full Stack Development</h3>
            <p className="text-[#B0B0B0] text-sm">
              Building modern web applications with React, Flask, and cutting-edge technologies.
            </p>
          </div>
          
          <div className="bg-[#181818] rounded-lg p-6 border border-[#333333]">
            <div className="w-12 h-12 bg-[#FFD600] rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-[#131313]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">AI & Machine Learning</h3>
            <p className="text-[#B0B0B0] text-sm">
              Working with Transformers, Hugging Face, LangChain, and advanced NLP techniques.
            </p>
          </div>
          
          <div className="bg-[#181818] rounded-lg p-6 border border-[#333333]">
            <div className="w-12 h-12 bg-[#FFD600] rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-[#131313]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Continuous Learning</h3>
            <p className="text-[#B0B0B0] text-sm">
              Always exploring new technologies and methodologies to stay ahead in the field.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

