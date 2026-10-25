import React from 'react';
import ProductCycle from './ProductCycle';

const About = () => {
  return (
    <div className="space-y-8">
      {/* About Me Section */}
      <div className="bg-[#222222] rounded-xl p-4 md:p-8 shadow-lg border border-[#333333] hover:border-[#FFD600] transition-colors duration-300">
        <div className="flex items-center mb-6">
          <div className="w-1 h-8 bg-[#FFD600] rounded mr-4"></div>
          <h2 className="text-xl md:text-2xl font-bold text-white">About Me</h2>
        </div>
        
        <div className="space-y-4">
          <p className="text-[#B0B0B0] leading-relaxed text-sm">
          I’m a Computer Science student and product-minded builder who sits at the intersection of <span className="text-white font-semibold">product, data, and engineering</span>. I don’t just write code — I own products across their full lifecycle: researching the market, talking to users, writing PRDs, prioritizing the roadmap, working with engineers and designers to ship, and measuring what happens after launch.
          </p>
          <p className="text-[#B0B0B0] leading-relaxed text-sm">
          At <span className="text-white font-semibold">Airlearn (Unacademy)</span>, I own localization PRDs for new language launches, run UAT across authoring tools and app builds, and turn support tickets and drop-off metrics into prioritized backlog items. Because I have a technical background in Data Science, AI, and Full Stack Development, I can go deep with engineers on feasibility and still keep the focus on user problems and business outcomes.
          </p>
          <p className="text-[#B0B0B0] leading-relaxed text-sm">
          I bring the same discipline to product work as I do to lifting in the gym: show up consistently, measure progress, and keep improving. Whether it’s breaking a personal record or shipping a feature, I care about building things that move the needle.
          </p>
        </div>

        {/* Impact Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
          {[
            { value: "7+", label: "Language launches with PRDs I owned" },
            { value: "35%", label: "Faster content deployment cycles" },
            { value: "20+", label: "Client accounts supported via CRM & dashboards" },
            { value: "30%", label: "Better forecasting accuracy from trade-data EDA" },
          ].map((stat) => (
            <div key={stat.label} className="bg-[#181818] rounded-lg p-4 border border-[#333333] text-center">
              <p className="text-2xl font-bold text-[#FFD600]">{stat.value}</p>
              <p className="text-[#B0B0B0] text-xs mt-1 leading-snug">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* What I'm Doing Section */}
      <div className="bg-[#222222] rounded-xl p-4 md:p-8 shadow-lg border border-[#333333] hover:border-[#FFD600] transition-colors duration-300">
        <div className="flex items-center mb-6">
          <div className="w-1 h-8 bg-[#FFD600] rounded mr-4"></div>
          <h2 className="text-xl md:text-2xl font-bold text-white">What I'm Doing</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#181818] rounded-lg p-6 border border-[#333333]">
            <div className="w-12 h-12 bg-[#FFD600] rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-[#131313]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Product Management</h3>
            <p className="text-[#B0B0B0] text-sm">
              Owning products from idea to launch: PRDs, roadmaps, prioritization, UAT, and cross-functional delivery with engineering, design, and content teams.
            </p>
          </div>

          <div className="bg-[#181818] rounded-lg p-6 border border-[#333333]">
            <div className="w-12 h-12 bg-[#FFD600] rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-[#131313]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Market & User Research</h3>
            <p className="text-[#B0B0B0] text-sm">
              Competitive analysis, market sizing, user interviews, and funnel and drop-off analysis to find the problems worth solving.
            </p>
          </div>

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

      {/* How I Build Products Section */}
      <div className="bg-[#222222] rounded-xl p-4 md:p-8 shadow-lg border border-[#333333] hover:border-[#FFD600] transition-colors duration-300">
        <div className="flex items-center mb-6">
          <div className="w-1 h-8 bg-[#FFD600] rounded mr-4"></div>
          <h2 className="text-xl md:text-2xl font-bold text-white">How I Build Products</h2>
        </div>

        <p className="text-[#B0B0B0] text-sm leading-relaxed mb-6">
          Building a product is a loop, not a straight line. Every launch feeds what I learn back into the next round of discovery.
        </p>

        <ProductCycle />
      </div>
    </div>
  );
};

export default About;

