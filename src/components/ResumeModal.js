import React, { useEffect } from "react";
import { createPortal } from "react-dom";

const roles = [
  {
    title: "Product Manager",
    file: "/ResumePM.pdf",
    downloadName: "Kumar_Gaurav_Product_Manager_Resume.pdf",
    pitch: "I own products end to end, from market research and PRDs to UAT and sprint planning.",
    tags: ["PRDs", "Roadmaps", "User Research"],
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
  },
  {
    title: "Data Analyst",
    file: "/ResumeDA.pdf",
    downloadName: "Kumar_Gaurav_Data_Analyst_Resume.pdf",
    pitch: "I turn raw data into dashboards and insights that drive business decisions.",
    tags: ["SQL", "Power BI", "Excel"],
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  },
  {
    title: "Data Scientist",
    file: "/ResumeDS.pdf",
    downloadName: "Kumar_Gaurav_Data_Scientist_Resume.pdf",
    pitch: "I build ML, NLP, and GenAI systems that solve real problems, from EDA to deployment.",
    tags: ["ML", "NLP", "RAG"],
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },
  {
    title: "Software Engineer",
    file: "/ResumeSE.pdf",
    downloadName: "Kumar_Gaurav_Software_Engineer_Resume.pdf",
    pitch: "I build scalable full-stack applications with clean APIs and solid system design.",
    tags: ["React", "Node.js", "Flask"],
    icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
  },
];

const ResumeModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e) => e.key === "Escape" && onClose();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKey);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="resume-modal-title"
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#222222] rounded-2xl border border-[#333333] shadow-2xl p-6 md:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-lg text-[#B0B0B0] hover:text-[#FFD600] hover:bg-[#181818] transition-colors duration-200"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header */}
        <div className="mb-6 md:mb-8 pr-8">
          <span className="inline-flex items-center gap-2 text-xs font-semibold text-[#FFD600] bg-[#FFD600]/10 px-3 py-1 rounded-full mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
            </span>
            Open to opportunities
          </span>
          <div className="flex items-center">
            <div className="w-1 h-8 bg-[#FFD600] rounded mr-4"></div>
            <h2 id="resume-modal-title" className="text-xl md:text-2xl font-bold text-white">
              What would you like to hire me as?
            </h2>
          </div>
          <p className="text-[#B0B0B0] text-sm mt-3">
            Pick a role and download the resume tailored to it.
          </p>
        </div>

        {/* Role Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {roles.map((role) => (
            <div
              key={role.title}
              className="group flex flex-col bg-[#181818] rounded-xl p-5 border border-[#333333] hover:border-[#FFD600] hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(255,214,0,0.12)] transition-all duration-300"
            >
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-[#FFD600] rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                  <svg className="w-5 h-5 text-[#131313]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={role.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-[#FFD600] transition-colors duration-300">
                  {role.title}
                </h3>
              </div>
              <p className="text-[#B0B0B0] text-sm leading-relaxed mb-4">{role.pitch}</p>
              <div className="flex flex-wrap gap-2 mb-5">
                {role.tags.map((tag) => (
                  <span key={tag} className="text-xs text-[#FFD600] bg-[#FFD600]/10 px-2 py-1 rounded-full">{tag}</span>
                ))}
              </div>
              <a
                href={role.file}
                download={role.downloadName}
                className="mt-auto w-full inline-flex items-center justify-center px-4 py-2.5 bg-[#FFD600] text-[#131313] text-sm font-semibold rounded-lg hover:bg-[#FFE033] transition-colors duration-200"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Resume
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ResumeModal;
