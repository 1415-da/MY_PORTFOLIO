import React, { useState } from "react";

const ProjectCard = ({ 
  title, 
  date, 
  image, 
  description, 
  technologies, 
  github, 
  demo, 
  blog,
  hideDescriptionOnMobile = false 
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  // 3D tilt handlers
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    // Max tilt angle
    const maxTilt = 15;
    const tiltX = ((y - centerY) / centerY) * maxTilt;
    const tiltY = ((x - centerX) / centerX) * maxTilt;
    setTilt({ x: tiltX, y: tiltY });
  };
  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  };
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <>
      <div 
        className="bg-[#222222] rounded-xl p-6 shadow-lg border border-[#333333] hover:shadow-xl transition-all duration-300 h-full flex flex-col relative group cursor-pointer"
        style={{
          perspective: 1000,
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: isHovered ? 'transform 0.15s cubic-bezier(.03,.98,.52,.99)' : 'transform 0.4s cubic-bezier(.03,.98,.52,.99)',
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
        onClick={() => setIsModalOpen(true)}
      >
        {/* Project Image - Hidden on mobile */}
        <div className="relative mb-4 overflow-hidden rounded-lg hidden md:block">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
          {/* Date tag overlay on image - Desktop */}
          <div className="absolute top-3 right-3 bg-[#FFD600] text-[#131313] px-3 py-1 rounded-lg text-xs font-semibold">
            {date}
          </div>
        </div>

        {/* Project Info */}
        <div className="flex-1 flex flex-col">
          <div className="mb-3">
            <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
            {/* Date tag - Mobile only */}
            <p className="text-[#FFD600] text-sm font-medium md:hidden">{date}</p>
          </div>

          {/* Description - Hidden on desktop, visible on mobile unless hideDescriptionOnMobile is true */}
          <p className={`text-[#B0B0B0] text-sm mb-4 line-clamp-2 flex-1 md:hidden ${hideDescriptionOnMobile ? 'hidden' : ''}`}>
            {description}
          </p>

          {/* Technologies */}
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-[#333333] text-[#FFD600] text-xs rounded-full font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 mt-auto">
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-[#333333] hover:bg-[#444444] text-white py-2 px-4 rounded-lg transition-all duration-200 flex items-center justify-center group/btn"
              onClick={(e) => e.stopPropagation()}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            {demo && demo !== '#' && (
              <a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-[#FFD600] hover:bg-[#E6C200] text-black py-2 px-4 rounded-lg transition-all duration-200 flex items-center justify-center font-medium group/btn"
                onClick={(e) => e.stopPropagation()}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}
          </div>
        </div>

        {/* Hover Popup - Click to view full details */}
        {isHovered && (
          <div className="absolute inset-0 bg-[#181818] bg-opacity-95 rounded-xl p-6 flex flex-col justify-center items-center z-10 hidden md:flex">
            <div className="text-center">
              <h3 className="text-xl font-bold text-[#FFD600] mb-4">{title}</h3>
              <div className="flex flex-wrap gap-2 justify-center mb-4">
                {technologies.slice(0, 4).map((tech, index) => (
                  <span 
                    key={index}
                    className="bg-[#FFD600] text-[#131313] px-2 py-1 rounded text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
                {technologies.length > 4 && (
                  <span className="bg-[#333333] text-[#f5f5f5] px-2 py-1 rounded text-xs font-medium">
                    +{technologies.length - 4} more
                  </span>
                )}
              </div>
              <div className="text-[#FFD600] text-sm font-medium">
                Click to view full details
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-[#222222] rounded-xl p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto border border-[#333333]">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-bold text-white">{title}</h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-[#B0B0B0] hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <img 
              src={image} 
              alt={title} 
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            
            <p className="text-[#B0B0B0] text-sm mb-4 leading-relaxed">
              {description}
            </p>
            
            <div className="mb-4">
              <h4 className="text-white font-semibold mb-2">Technologies Used:</h4>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-[#333333] text-[#FFD600] text-xs rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex gap-3">
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-[#333333] hover:bg-[#444444] text-white py-2 px-4 rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                View on GitHub
              </a>
              {demo && demo !== '#' && (
                <a
                  href={demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-[#FFD600] hover:bg-[#E6C200] text-black py-2 px-4 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 font-medium"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard; 