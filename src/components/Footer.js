import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 text-gray-600 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <span className="text-gray-900 font-medium">&copy; {new Date().getFullYear()} Kumar Gaurav. All rights reserved.</span>
          </div>
          <nav className="flex gap-6" aria-label="Footer Navigation">
            <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium">About</a>
            <a href="#projects" className="text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium">Projects</a>
            <a href="#skills" className="text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium">Skills</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium">Contact</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
