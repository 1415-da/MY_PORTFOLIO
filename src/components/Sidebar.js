import React from "react";

const Sidebar = ({ isMobile = false }) => {
  const containerClass = isMobile ? "w-full" : "w-80";
  const paddingClass = isMobile ? "p-4" : "p-8";
  const profileImageClass = isMobile ? "w-20 h-20" : "w-40 h-40";
  const titleClass = isMobile ? "text-lg" : "text-2xl";
  const marginClass = isMobile ? "mb-6" : "mb-8";
  const borderClass = !isMobile
    ? "border-r border-[#333333] flex-shrink-0 overflow-y-auto shadow-lg"
    : "";

  return (
    <div className={`${containerClass} bg-[#131313] ${borderClass}`}>
      <div className={paddingClass}>
        {/* Profile Image */}
        <div className={marginClass}>
          <div className={`${profileImageClass} mx-auto mb-4`}>
            <img
              src={require("../assets/avatar.png")}
              alt="Kumar Gaurav"
              className="w-full h-full rounded-xl object-cover border-2 border-[#333333]"
            />
          </div>
          <h1 className={`${titleClass} font-bold text-white text-center mb-2`}>
            Kumar Gaurav
          </h1>
          <p className="text-[#B0B0B0] text-center text-sm">
            Fitness-Focused Techie
          </p>
        </div>

        {/* Contact Information */}
        <div className={`space-y-4 ${marginClass}`}>
          <div className="flex items-center">
            <div className="w-5 h-5 bg-[#FFD600] rounded flex items-center justify-center mr-3 flex-shrink-0">
              <svg
                className="w-3 h-3 text-[#131313]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </div>
            <div>
              <p className="text-[#B0B0B0] text-xs">Email</p>
              <a
                href="mailto:kg15072004@gmail.com"
                className="text-white text-sm hover:text-[#FFD600] transition-colors duration-200"
              >
                kg15072004@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-center">
            <div className="w-5 h-5 bg-[#FFD600] rounded flex items-center justify-center mr-3 flex-shrink-0">
              <svg
                className="w-3 h-3 text-[#131313]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <div>
              <p className="text-[#B0B0B0] text-xs">Phone</p>
              <p className="text-white text-sm">08766313590</p>
            </div>
          </div>

          <div className="flex items-center">
            <div className="w-5 h-5 bg-[#FFD600] rounded flex items-center justify-center mr-3 flex-shrink-0">
              <svg
                className="w-3 h-3 text-[#131313]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <div>
              <p className="text-[#B0B0B0] text-xs">Location</p>
              <p className="text-white text-sm">Bangalore, India</p>
            </div>
          </div>
        </div>

        {/* Fun Facts Section */}
        <div className={marginClass}>
          <p className="text-[#B0B0B0] text-xs mb-3">Fun Facts</p>
          <div className="space-y-3">
            <div className="bg-[#222222] rounded-lg p-3 border border-[#333333]">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-[#FFD600] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-white text-xs leading-relaxed">
                  I can debug code after deadlifts – it's my version of
                  meditation.
                </p>
              </div>
            </div>
            <div className="bg-[#222222] rounded-lg p-3 border border-[#333333]">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-[#FFD600] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-white text-xs leading-relaxed">
                  Fueled by coffee and curiosity (with a protein shake on the
                  side).
                </p>
              </div>
            </div>
            <div className="bg-[#222222] rounded-lg p-3 border border-[#333333]">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-[#FFD600] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-white text-xs leading-relaxed">
                  "Ctrl + Z" is my favorite move — in code, not in life.
                </p>
              </div>
            </div>
            <div className="bg-[#222222] rounded-lg p-3 border border-[#333333]">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-[#FFD600] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-white text-xs leading-relaxed">
                  I can train both models and muscles.
                </p>
              </div>
            </div>
            <div className="bg-[#222222] rounded-lg p-3 border border-[#333333]">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-[#FFD600] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-white text-xs leading-relaxed">
                  Believes in the power of clean code and good music
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className={marginClass}>
          <p className="text-[#B0B0B0] text-xs mb-3">Follow Me</p>
          <div className="flex space-x-3">
            <a
              href="https://www.linkedin.com/in/kumar-gaurav-5bb64728a/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-[#222222] rounded-lg flex items-center justify-center text-[#B0B0B0] hover:text-[#FFD600] hover:bg-[#333333] transition-all duration-200"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="https://github.com/1415-da"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-[#222222] rounded-lg flex items-center justify-center text-[#B0B0B0] hover:text-[#FFD600] hover:bg-[#333333] transition-all duration-200"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://x.com/kg15072004"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-[#222222] rounded-lg flex items-center justify-center text-[#B0B0B0] hover:text-[#FFD600] hover:bg-[#333333] transition-all duration-200"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            {/* Kaggle */}
            <a
              href="https://www.kaggle.com/kumargaurav1415"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-[#222222] rounded-lg flex items-center justify-center text-[#B0B0B0] hover:text-[#FFD600] hover:bg-[#333333] transition-all duration-200"
            >
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 226 226"
                fill="currentColor"
              >
                <path d="M57.333 18.833v188.334h37.667v-68.417l58.208 68.417h45.792l-66.625-77.083L196 18.833h-46.208L95 90.042V18.833H57.333Z" />
              </svg>
            </a>

            <a
              href="https://leetcode.com/u/Gaurav1415/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-[#222222] rounded-lg flex items-center justify-center text-[#B0B0B0] hover:text-[#FFD600] hover:bg-[#333333] transition-all duration-200"
            >
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a1.374 1.374 0 0 0 0 1.994l3.854 4.126 5.406 5.788a1.374 1.374 0 0 0 1.921 0l5.406-5.788 3.854-4.126a1.374 1.374 0 0 0 0-1.994l-3.854-4.126L14.44.438a1.374 1.374 0 0 0-.961-.438h.004Z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Resume Download */}
        <div>
          <a
            href="/Resume.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center px-4 py-3 bg-[#FFD600] text-[#131313] text-sm font-semibold rounded-lg hover:bg-[#FFE033] transition-colors duration-200"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
