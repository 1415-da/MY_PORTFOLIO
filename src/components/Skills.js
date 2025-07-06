import React from 'react';

const skills = [
  { name: "Python", group: "Languages & Databases" },
  { name: "MySQL", group: "Languages & Databases" },
  { name: "C", group: "Languages & Databases" },
  { name: "C++", group: "Languages & Databases" },
  { name: "HTML", group: "Languages & Databases" },
  { name: "CSS", group: "Languages & Databases" },
  { name: "JavaScript", group: "Languages & Databases" },
  { name: "Pandas", group: "Visualization Tools" },
  { name: "NumPy", group: "Visualization Tools" },
  { name: "Matplotlib", group: "Visualization Tools" },
  { name: "Seaborn", group: "Visualization Tools" },
  { name: "Tableau", group: "Visualization Tools" },
  { name: "Power BI", group: "Visualization Tools" },
  { name: "Excel", group: "Visualization Tools" },
  { name: "Transformers", group: "AI" },
  { name: "Hugging Face", group: "AI" },
  { name: "LangChain", group: "AI" },
  { name: "NLTK", group: "AI" },
  { name: "RAG System", group: "AI" },
  { name: "React.js", group: "Other Skills" },
  { name: "Python Flask", group: "Other Skills" },
  { name: "Machine Learning", group: "Other Skills" },
  { name: "Scikit-learn", group: "Other Skills" },
  { name: "Natural Language Processing", group: "Other Skills" },
  { name: "Deep Learning", group: "Other Skills" },
  { name: "Web Scrapping", group: "Other Skills" },
  { name: "Data Analysis", group: "Other Skills" },
  { name: "Data Visualization", group: "Other Skills" },
];

const grouped = skills.reduce((acc, skill) => {
  acc[skill.group] = acc[skill.group] || [];
  acc[skill.group].push(skill);
  return acc;
}, {});

const groupIcons = {
  "Languages & Databases": (
    <svg className="w-5 h-5 md:w-6 md:h-6 text-[#131313]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  ),
  "Visualization Tools": (
    <svg className="w-5 h-5 md:w-6 md:h-6 text-[#131313]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
  "AI": (
    <svg className="w-5 h-5 md:w-6 md:h-6 text-[#131313]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  "Other Skills": (
    <svg className="w-5 h-5 md:w-6 md:h-6 text-[#131313]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
    </svg>
  )
};

const Skills = () => {
  return (
    <div className="space-y-6 md:space-y-8">
      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {Object.keys(grouped).map((group, index) => (
          <div 
            key={group} 
            className="bg-[#222222] rounded-xl p-4 md:p-6 shadow-lg border border-[#333333] hover:border-[#FFD600] transition-colors duration-300"
          >
            <div className="flex items-center mb-4 md:mb-6">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-[#FFD600] rounded-lg flex items-center justify-center mr-3 md:mr-4">
                {groupIcons[group]}
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white">{group}</h3>
            </div>
            
            <div className="grid grid-cols-2 gap-2">
              {grouped[group].map((skill) => (
                <div 
                  key={skill.name} 
                  className="bg-[#181818] text-[#B0B0B0] rounded-lg px-2 md:px-3 py-2 text-xs md:text-sm font-medium border border-[#333333] hover:border-[#FFD600]/30 transition-colors duration-200"
                >
                  {skill.name}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
