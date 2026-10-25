import React, { useState, useEffect } from "react";

const phases = [
  {
    title: "Discover",
    desc: "Market research, competitor teardowns, and user interviews to find real pain points.",
    icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
  },
  {
    title: "Define",
    desc: "Problem statement, personas, PRD, and the success metrics we'll be judged on.",
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  },
  {
    title: "Prioritize",
    desc: "RICE and impact-effort scoring turn a long wishlist into a focused roadmap.",
    icon: "M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12",
  },
  {
    title: "Build",
    desc: "Agile sprints with design and engineering. I can write the code too.",
    icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
  },
  {
    title: "Launch",
    desc: "UAT, edge-case testing, and go-to-market readiness so we ship with confidence.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },
  {
    title: "Measure & Iterate",
    desc: "Track adoption, retention, and drop-offs, then feed the insights into the next loop.",
    icon: "M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z",
  },
];

// Ring geometry in SVG/percentage units (the diagram is a 100 x 100 square)
const RADIUS = 36;
const ARC_GAP = 21; // degrees left clear around each node card
const angleFor = (i) => -90 + i * (360 / phases.length);
const pointAt = (deg) => {
  const rad = (deg * Math.PI) / 180;
  return { x: 50 + RADIUS * Math.cos(rad), y: 50 + RADIUS * Math.sin(rad) };
};
const arcPath = (i) => {
  const start = pointAt(angleFor(i) + ARC_GAP);
  const end = pointAt(angleFor(i + 1) - ARC_GAP);
  return `M ${start.x} ${start.y} A ${RADIUS} ${RADIUS} 0 0 1 ${end.x} ${end.y}`;
};

const Icon = ({ path, className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={path} />
  </svg>
);

const ProductCycle = () => {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  // Walk through the cycle automatically until the visitor takes over
  useEffect(() => {
    const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (paused || reduceMotion) return;
    const timer = setInterval(() => setActive((i) => (i + 1) % phases.length), 2800);
    return () => clearInterval(timer);
  }, [paused]);

  const current = phases[active];

  return (
    <>
      {/* Desktop / tablet: circular cycle */}
      <div
        className="hidden md:block relative w-full max-w-[560px] aspect-square mx-auto"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" aria-hidden="true">
          <defs>
            <marker id="cycle-arrow" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#555555" />
            </marker>
            <marker id="cycle-arrow-active" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#FFD600" />
            </marker>
          </defs>
          {phases.map((phase, i) => (
            <path
              key={phase.title}
              d={arcPath(i)}
              fill="none"
              stroke={i === active ? "#FFD600" : "#444444"}
              strokeWidth="0.6"
              strokeLinecap="round"
              markerEnd={`url(#${i === active ? "cycle-arrow-active" : "cycle-arrow"})`}
              style={{ transition: "stroke 0.4s" }}
            />
          ))}
        </svg>

        {/* Centre: active phase details */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] aspect-square rounded-full bg-[#181818] border border-[#333333] flex flex-col items-center justify-center text-center p-[5%]">
          <Icon path="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" className="w-5 h-5 text-[#FFD600] mb-2" />
          <p className="text-[#FFD600] text-[11px] font-bold tracking-widest">STEP 0{active + 1}</p>
          <h3 key={current.title} className="text-white font-bold text-base lg:text-lg leading-tight mt-1 mb-2 fade-in">
            {current.title}
          </h3>
          <p key={current.desc} className="text-[#B0B0B0] text-xs leading-relaxed fade-in">
            {current.desc}
          </p>
        </div>

        {/* Phase nodes around the ring */}
        {phases.map((phase, i) => {
          const { x, y } = pointAt(angleFor(i));
          const isActive = i === active;
          return (
            <button
              key={phase.title}
              type="button"
              onClick={() => setActive(i)}
              onFocus={() => {
                setActive(i);
                setPaused(true);
              }}
              onBlur={() => setPaused(false)}
              aria-pressed={isActive}
              className={`absolute -translate-x-1/2 -translate-y-1/2 w-[21%] rounded-xl border px-2 py-3 flex flex-col items-center gap-1.5 transition-all duration-300 ${
                isActive
                  ? "bg-[#FFD600] border-[#FFD600] text-[#131313] shadow-[0_8px_30px_rgba(255,214,0,0.25)] scale-105"
                  : "bg-[#181818] border-[#333333] text-white hover:border-[#FFD600]/50"
              }`}
              style={{ left: `${x}%`, top: `${y}%` }}
            >
              <Icon path={phase.icon} className={`w-5 h-5 ${isActive ? "text-[#131313]" : "text-[#FFD600]"}`} />
              <span className="text-xs font-semibold leading-tight text-center">{phase.title}</span>
            </button>
          );
        })}
      </div>

      {/* Mobile: vertical loop */}
      <div className="md:hidden relative">
        <div className="absolute left-5 top-5 bottom-14 w-0.5 bg-[#333333]"></div>
        <ol className="space-y-4">
          {phases.map((phase, i) => (
            <li key={phase.title} className="relative flex items-start gap-4">
              <div className="relative z-10 w-10 h-10 flex-shrink-0 rounded-lg bg-[#FFD600] text-[#131313] flex items-center justify-center">
                <Icon path={phase.icon} className="w-5 h-5" />
              </div>
              <div className="pt-0.5">
                <p className="text-[#FFD600] text-[11px] font-bold tracking-widest">STEP 0{i + 1}</p>
                <h3 className="text-white font-bold text-base leading-tight">{phase.title}</h3>
                <p className="text-[#B0B0B0] text-sm leading-relaxed mt-1">{phase.desc}</p>
              </div>
            </li>
          ))}
          <li className="relative flex items-center gap-4">
            <div className="relative z-10 w-10 h-10 flex-shrink-0 rounded-lg border border-dashed border-[#FFD600]/60 text-[#FFD600] flex items-center justify-center">
              <Icon path="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" className="w-5 h-5" />
            </div>
            <p className="text-[#B0B0B0] text-sm">Back to <span className="text-white font-semibold">Discover</span> with fresh insights</p>
          </li>
        </ol>
      </div>
    </>
  );
};

export default ProductCycle;
