import React, { useState, useCallback } from "react";
import ResumeModal from "./ResumeModal";

const EMAIL = "kg15072004@gmail.com";
const FORMSPREE_URL = "https://formspree.io/f/mqppeezl";
const CALENDLY_URL = "https://calendly.com/kg15072004";

const reasons = ["Full-time role", "Internship", "Freelance project", "Just saying hi"];

const quickLinks = [
  {
    label: "LinkedIn",
    value: "Kumar Gaurav",
    href: "https://www.linkedin.com/in/kumar-gaurav-5bb64728a/",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    value: "1415-da",
    href: "https://github.com/1415-da",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "Phone",
    value: "+91 87663 13590",
    href: "tel:+918766313590",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
];

const MESSAGE_MIN = 20;

const validate = ({ name, email, message }) => {
  const errors = {};
  if (name.trim().length < 2) errors.name = "Please enter your name.";
  if (!email.trim()) errors.email = "Please enter your email address.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim())) errors.email = "That email address doesn't look right.";
  if (message.trim().length < MESSAGE_MIN)
    errors.message = `Please write at least ${MESSAGE_MIN} characters so I have some context.`;
  return errors;
};

const inputBase =
  "w-full px-4 py-3 bg-[#181818] text-[#f5f5f5] border rounded-lg focus:outline-none focus:ring-2 transition-all duration-300 placeholder-[#666666]";

const inputClass = (hasError) =>
  `${inputBase} ${
    hasError
      ? "border-red-500/60 focus:ring-red-500/60 focus:border-transparent"
      : "border-[#333333] focus:ring-[#FFD600] focus:border-transparent"
  }`;

const FieldError = ({ id, message }) =>
  message ? (
    <p id={id} className="flex items-center gap-1.5 text-xs text-red-300 mt-2">
      <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      {message}
    </p>
  ) : null;

const Contact = () => {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [reason, setReason] = useState(reasons[0]);
  const [copied, setCopied] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const closeResume = useCallback(() => setIsResumeOpen(false), []);

  const [touched, setTouched] = useState({});

  // Errors only show for fields the visitor has left or after a submit attempt
  const errors = validate(form);
  const visibleError = (field) => (touched[field] ? errors[field] : undefined);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleBlur = (e) => {
    setTouched({ ...touched, [e.target.name]: true });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Object.keys(errors).length > 0) {
      setTouched({ name: true, email: true, message: true });
      const firstInvalid = ["name", "email", "message"].find((field) => errors[field]);
      document.getElementById(firstInvalid)?.focus();
      return;
    }
    setStatus("sending");
    try {
      const response = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...form,
          reason,
          _subject: `[${reason}] Portfolio message from ${form.name}`,
          _replyto: form.email,
        }),
      });
      if (!response.ok) throw new Error(`Formspree responded ${response.status}`);
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
      setTouched({});
      setReason(reasons[0]);
    } catch (err) {
      setStatus("error");
    }
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-5 gap-6">
      {/* Left: Let's work together */}
      <div className="xl:col-span-2 space-y-6">
        <div className="bg-[#222222] rounded-xl p-4 md:p-6 shadow-lg border border-[#333333] hover:border-[#FFD600] transition-colors duration-300">
          <div className="flex items-center mb-3">
            <div className="w-1 h-8 bg-[#FFD600] rounded mr-4"></div>
            <h2 className="text-xl md:text-2xl font-bold text-white">Let's Work Together</h2>
          </div>
          <p className="text-[#B0B0B0] text-sm leading-relaxed mb-5">
            Hiring for a product, data, or engineering role, or have an idea worth building? I'd love to hear about it.
          </p>

          {/* Availability */}
          <div className="bg-[#181818] rounded-lg p-4 border border-[#333333]">
            <div className="flex items-center gap-2 mb-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400"></span>
              </span>
              <span className="text-white text-sm font-semibold">Available for opportunities</span>
            </div>
            <ul className="space-y-2 text-sm text-[#B0B0B0]">
              <li className="flex items-start"><span className="text-[#FFD600] mr-2">•</span>Product, Data & Software Engineering roles</li>
              <li className="flex items-start"><span className="text-[#FFD600] mr-2">•</span>Internships now · Full-time from 2027</li>
              <li className="flex items-start"><span className="text-[#FFD600] mr-2">•</span>Bengaluru or remote · IST (UTC+5:30)</li>
              <li className="flex items-start"><span className="text-[#FFD600] mr-2">•</span>Usually replies within 24 hours</li>
            </ul>
          </div>

          {/* Primary actions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-5">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-[#FFD600] text-[#131313] text-sm font-semibold rounded-lg hover:bg-[#FFE033] transition-colors duration-200"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Book a 15-min Call
            </a>
            <button
              onClick={() => setIsResumeOpen(true)}
              className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-[#131313] text-white text-sm font-semibold rounded-lg border border-[#333333] hover:bg-black hover:border-[#555555] transition-colors duration-200"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Resume
            </button>
          </div>
          <ResumeModal isOpen={isResumeOpen} onClose={closeResume} />
        </div>

        {/* Quick contact tiles */}
        <div className="bg-[#222222] rounded-xl p-4 md:p-6 shadow-lg border border-[#333333] hover:border-[#FFD600] transition-colors duration-300">
          <p className="text-[#B0B0B0] text-xs mb-3">Reach me directly</p>
          <div className="space-y-3">
            {/* Email with copy */}
            <div className="flex items-center bg-[#181818] rounded-lg p-3 border border-[#333333] hover:border-[#FFD600]/30 transition-colors duration-200">
              <div className="w-10 h-10 bg-[#FFD600] rounded-lg flex items-center justify-center mr-3 flex-shrink-0 text-[#131313]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[#B0B0B0] text-xs">Email</p>
                <a href={`mailto:${EMAIL}`} className="text-white text-sm hover:text-[#FFD600] transition-colors duration-200 break-all">
                  {EMAIL}
                </a>
              </div>
              <button
                onClick={copyEmail}
                aria-label="Copy email address"
                className={`ml-2 flex-shrink-0 text-xs font-semibold px-3 py-1.5 rounded-lg border transition-colors duration-200 ${
                  copied
                    ? "text-green-400 border-green-400/40 bg-green-400/10"
                    : "text-[#B0B0B0] border-[#333333] hover:text-white hover:border-[#555555]"
                }`}
              >
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>

            {quickLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="group flex items-center bg-[#181818] rounded-lg p-3 border border-[#333333] hover:border-[#FFD600]/30 transition-colors duration-200"
              >
                <div className="w-10 h-10 bg-[#FFD600] rounded-lg flex items-center justify-center mr-3 flex-shrink-0 text-[#131313]">
                  {link.icon}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[#B0B0B0] text-xs">{link.label}</p>
                  <p className="text-white text-sm group-hover:text-[#FFD600] transition-colors duration-200">{link.value}</p>
                </div>
                <svg className="w-4 h-4 text-[#666666] group-hover:text-[#FFD600] group-hover:translate-x-1 transition-all duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Right: Contact form */}
      <div className="xl:col-span-3 bg-[#222222] rounded-xl p-4 md:p-8 shadow-lg border border-[#333333] hover:border-[#FFD600] transition-colors duration-300">
        {status !== "sent" ? (
          <>
            <div className="flex items-center mb-3">
              <div className="w-1 h-8 bg-[#FFD600] rounded mr-4"></div>
              <h2 className="text-xl md:text-2xl font-bold text-white">Send a Message</h2>
            </div>
            <p className="text-[#B0B0B0] text-sm leading-relaxed mb-6">
              It goes straight to my inbox. I'll reply to the email you leave below.
            </p>

            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              {/* Reason chips */}
              <div>
                <p className="block text-sm font-medium text-[#f5f5f5] mb-3">I'm reaching out about</p>
                <div className="flex flex-wrap gap-2" role="radiogroup" aria-label="Reason for reaching out">
                  {reasons.map((r) => (
                    <button
                      key={r}
                      type="button"
                      role="radio"
                      aria-checked={reason === r}
                      onClick={() => setReason(r)}
                      className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors duration-200 ${
                        reason === r
                          ? "bg-[#FFD600] text-[#131313] border-[#FFD600]"
                          : "bg-[#181818] text-[#B0B0B0] border-[#333333] hover:text-white hover:border-[#555555]"
                      }`}
                    >
                      {r}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#f5f5f5] mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    autoComplete="name"
                    onBlur={handleBlur}
                    aria-invalid={!!visibleError("name")}
                    aria-describedby={visibleError("name") ? "name-error" : undefined}
                    className={inputClass(visibleError("name"))}
                    required
                  />
                  <FieldError id="name-error" message={visibleError("name")} />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#f5f5f5] mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    autoComplete="email"
                    onBlur={handleBlur}
                    aria-invalid={!!visibleError("email")}
                    aria-describedby={visibleError("email") ? "email-error" : undefined}
                    className={inputClass(visibleError("email"))}
                    required
                  />
                  <FieldError id="email-error" message={visibleError("email")} />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#f5f5f5] mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about the role, project, or idea..."
                  onBlur={handleBlur}
                  aria-invalid={!!visibleError("message")}
                  aria-describedby="message-hint"
                  className={`${inputClass(visibleError("message"))} resize-none`}
                  rows={6}
                  required
                />
                <div className="flex items-start justify-between gap-4">
                  <FieldError id="message-error" message={visibleError("message")} />
                  <p
                    id="message-hint"
                    className={`ml-auto text-xs mt-2 flex-shrink-0 ${
                      form.message.trim().length >= MESSAGE_MIN ? "text-green-400" : "text-[#666666]"
                    }`}
                  >
                    {form.message.trim().length >= MESSAGE_MIN
                      ? "✓ Looks good"
                      : `${form.message.trim().length}/${MESSAGE_MIN} characters minimum`}
                  </p>
                </div>
              </div>

              {status === "error" && (
                <div className="text-sm text-red-300 bg-red-500/10 border border-red-500/30 rounded-lg px-4 py-3">
                  Something went wrong sending your message. Please try again, or email me directly at{" "}
                  <a href={`mailto:${EMAIL}`} className="underline hover:text-white">{EMAIL}</a>.
                </div>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full px-6 py-3 bg-[#FFD600] text-[#131313] font-semibold rounded-lg hover:bg-[#FFE033] transition-all duration-300 flex items-center justify-center gap-2 group ripple disabled:opacity-70 disabled:cursor-wait"
                style={{ overflow: "hidden", position: "relative" }}
                onClick={(e) => {
                  const button = e.currentTarget;
                  const circle = document.createElement("span");
                  const diameter = Math.max(button.clientWidth, button.clientHeight);
                  const radius = diameter / 2;
                  circle.style.width = circle.style.height = `${diameter}px`;
                  circle.style.left = `${e.clientX - button.getBoundingClientRect().left - radius}px`;
                  circle.style.top = `${e.clientY - button.getBoundingClientRect().top - radius}px`;
                  circle.classList.add("ripple-effect");
                  button.appendChild(circle);
                  setTimeout(() => circle.remove(), 600);
                }}
              >
                {status === "sending" ? (
                  <>
                    <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                    </svg>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <svg
                      className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-[#FFD600] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-[#131313]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Message sent!</h3>
            <p className="text-[#B0B0B0] text-sm">Thanks for reaching out. I'll get back to you within 24 hours.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-[#FFD600] text-[#131313] text-sm font-semibold rounded-lg hover:bg-[#FFE033] transition-colors duration-200"
              >
                Book a Call Instead
              </a>
              <button
                onClick={() => setStatus("idle")}
                className="px-4 py-2 bg-[#333333] text-[#f5f5f5] text-sm rounded-lg hover:bg-[#444444] transition-colors duration-200"
              >
                Send Another Message
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
