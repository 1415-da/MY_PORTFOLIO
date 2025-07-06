import './index.css';
import React, { useState, useRef, useEffect } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Sidebar from "./components/Sidebar";

function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [sliderStyle, setSliderStyle] = useState({});
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const desktopNavRef = useRef(null);
  const mobileNavRef = useRef(null);

  const sections = ['about', 'resume', 'projects', 'skills', 'contact'];

  const updateSliderPosition = (section) => {
    // Update desktop slider
    if (desktopNavRef.current) {
      const buttons = desktopNavRef.current.querySelectorAll('button');
      const activeIndex = sections.indexOf(section);
      const activeButton = buttons[activeIndex];
      
      if (activeButton) {
        const buttonRect = activeButton.getBoundingClientRect();
        const navRect = desktopNavRef.current.getBoundingClientRect();
        
        setSliderStyle({
          left: `${buttonRect.left - navRect.left}px`,
          width: `${buttonRect.width}px`,
          transition: 'all 0.3s ease-in-out'
        });
      }
    }
  };

  useEffect(() => {
    updateSliderPosition(activeSection);
  }, [activeSection]);

  useEffect(() => {
    updateSliderPosition(activeSection);
    const handleResize = () => {
      updateSliderPosition(activeSection);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const renderContent = () => {
    switch(activeSection) {
      case 'about':
        return <About />;
      case 'resume':
        return <Hero />;
      case 'projects':
        return <Projects hideDescriptionOnMobile={true} />;
      case 'skills':
        return <Skills />;
      case 'contact':
        return <Contact />;
      default:
        return <About />;
    }
  };

  return (
    <div className="min-h-screen bg-[#181818] flex flex-col lg:flex-row">
      {/* Mobile Sidebar Toggle Button */}
      <div className="lg:hidden bg-[#222222] px-4 py-3 border-b border-[#333333]">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="flex items-center justify-between w-full text-white"
        >
          <div className="flex items-center">
            <img 
              src={require("./assets/avatar.png")} 
              alt="Kumar Gaurav" 
              className="w-10 h-10 rounded-lg object-cover border border-[#333333] mr-3"
            />
            <span className="font-semibold">Kumar Gaurav</span>
          </div>
          <svg 
            className={`w-5 h-5 transition-transform duration-200 ${isSidebarOpen ? 'rotate-180' : ''}`}
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {/* Collapsible Sidebar - Mobile */}
      <div className={`lg:hidden bg-[#131313] border-b border-[#333333] transition-all duration-300 overflow-hidden ${
        isSidebarOpen ? 'max-h-screen' : 'max-h-0'
      }`}>
        <Sidebar isMobile={true} />
      </div>

      {/* Fixed Left Sidebar - Desktop */}
      <div className="hidden lg:block">
        <Sidebar isMobile={false} />
      </div>
      
      {/* Main Content Area */}
      <div className={`flex-1 flex flex-col transition-all duration-300 ${isSidebarOpen ? 'blur-sm lg:blur-none overflow-hidden' : ''}`}>
        {/* Navigation Header - Desktop */}
        <header className="hidden lg:block bg-[#222222] px-8 py-6">
          <nav className="flex space-x-8 relative" ref={desktopNavRef}>
            {/* Sliding Indicator - Desktop Only */}
            <div 
              className="absolute bottom-0 h-0.5 bg-[#FFD600] rounded-full"
              style={sliderStyle}
            />
            
            <button
              onClick={() => setActiveSection('about')}
              className={`text-sm font-medium transition-all duration-200 pb-2 relative z-10 ${
                activeSection === 'about'
                  ? 'text-white'
                  : 'text-[#B0B0B0] hover:text-white'
              }`}
            >
              About
            </button>
            <button
              onClick={() => setActiveSection('resume')}
              className={`text-sm font-medium transition-all duration-200 pb-2 relative z-10 ${
                activeSection === 'resume'
                  ? 'text-white'
                  : 'text-[#B0B0B0] hover:text-white'
              }`}
            >
              Resume
            </button>
            <button
              onClick={() => setActiveSection('projects')}
              className={`text-sm font-medium transition-all duration-200 pb-2 relative z-10 ${
                activeSection === 'projects'
                  ? 'text-white'
                  : 'text-[#B0B0B0] hover:text-white'
              }`}
            >
              Projects
            </button>
            <button
              onClick={() => setActiveSection('skills')}
              className={`text-sm font-medium transition-all duration-200 pb-2 relative z-10 ${
                activeSection === 'skills'
                  ? 'text-white'
                  : 'text-[#B0B0B0] hover:text-white'
              }`}
            >
              Skills
            </button>
            <button
              onClick={() => setActiveSection('contact')}
              className={`text-sm font-medium transition-all duration-200 pb-2 relative z-10 ${
                activeSection === 'contact'
                  ? 'text-white'
                  : 'text-[#B0B0B0] hover:text-white'
              }`}
            >
              Contact
            </button>
          </nav>
        </header>
        
        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto bg-[#181818] p-4 lg:p-8 pb-20 lg:pb-8">
          <div className="max-w-6xl mx-auto">
            {renderContent()}
          </div>
        </main>

        {/* Mobile Navigation - Bottom Fixed */}
        <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-[#222222] border-t border-[#333333] px-4 py-3 z-50">
          <nav className="flex justify-between items-center" ref={mobileNavRef}>
            <button
              onClick={() => setActiveSection('about')}
              className={`flex flex-col items-center text-xs font-medium transition-all duration-200 pb-2 relative z-10 ${
                activeSection === 'about'
                  ? 'text-[#FFD600]'
                  : 'text-[#B0B0B0]'
              }`}
            >
              <svg className="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              About
            </button>
            <button
              onClick={() => setActiveSection('resume')}
              className={`flex flex-col items-center text-xs font-medium transition-all duration-200 pb-2 relative z-10 ${
                activeSection === 'resume'
                  ? 'text-[#FFD600]'
                  : 'text-[#B0B0B0]'
              }`}
            >
              <svg className="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Resume
            </button>
            <button
              onClick={() => setActiveSection('projects')}
              className={`flex flex-col items-center text-xs font-medium transition-all duration-200 pb-2 relative z-10 ${
                activeSection === 'projects'
                  ? 'text-[#FFD600]'
                  : 'text-[#B0B0B0]'
              }`}
            >
              <svg className="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 00-2-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              Projects
            </button>
            <button
              onClick={() => setActiveSection('skills')}
              className={`flex flex-col items-center text-xs font-medium transition-all duration-200 pb-2 relative z-10 ${
                activeSection === 'skills'
                  ? 'text-[#FFD600]'
                  : 'text-[#B0B0B0]'
              }`}
            >
              <svg className="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              Skills
            </button>
            <button
              onClick={() => setActiveSection('contact')}
              className={`flex flex-col items-center text-xs font-medium transition-all duration-200 pb-2 relative z-10 ${
                activeSection === 'contact'
                  ? 'text-[#FFD600]'
                  : 'text-[#B0B0B0]'
              }`}
            >
              <svg className="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default App;
