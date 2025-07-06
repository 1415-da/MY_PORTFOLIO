import React, { useState } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });
    // Here you would typically send the form data to a backend or email service
  };

  return (
    <div className="max-w-2xl mx-auto">
      {/* Contact Form */}
      <div className="bg-[#222222] rounded-xl p-8 shadow-lg border border-[#333333] hover:border-[#FFD600] transition-colors duration-300">
          {!submitted ? (
            <>
              <h2 className="text-2xl font-bold text-[#FFD600] mb-6">Get In Touch</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Email - Side by side on desktop, stacked on mobile */}
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
                      className="w-full px-4 py-3 bg-[#181818] text-[#f5f5f5] border border-[#333333] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFD600] focus:border-transparent transition-all duration-300 placeholder-[#666666] shadow-sm"
                      required
                    />
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
                      placeholder="Enter your email address"
                      className="w-full px-4 py-3 bg-[#181818] text-[#f5f5f5] border border-[#333333] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFD600] focus:border-transparent transition-all duration-300 placeholder-[#666666] shadow-sm"
                      required
                    />
                  </div>
                </div>
                
                {/* Message Textarea */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#f5f5f5] mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or inquiry..."
                    className="w-full px-4 py-3 bg-[#181818] text-[#f5f5f5] border border-[#333333] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFD600] focus:border-transparent transition-all duration-300 resize-none placeholder-[#666666] shadow-sm"
                    rows={6}
                    required
                  />
                </div>
                
                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-[#FFD600] text-[#1f1f1f] font-semibold rounded-lg hover:bg-[#FFE033] hover:shadow-lg hover:shadow-[#FFD600]/25 transition-all duration-300 flex items-center justify-center gap-2 group ripple"
                  style={{ overflow: 'hidden', position: 'relative' }}
                  onClick={(e) => {
                    const button = e.currentTarget;
                    const circle = document.createElement('span');
                    const diameter = Math.max(button.clientWidth, button.clientHeight);
                    const radius = diameter / 2;
                    circle.style.width = circle.style.height = `${diameter}px`;
                    circle.style.left = `${e.clientX - button.getBoundingClientRect().left - radius}px`;
                    circle.style.top = `${e.clientY - button.getBoundingClientRect().top - radius}px`;
                    circle.classList.add('ripple-effect');
                    button.appendChild(circle);
                    setTimeout(() => circle.remove(), 600);
                  }}
                >
                  <span>Send Message</span>
                  <svg 
                    className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" 
                    />
                  </svg>
                </button>
              </form>
            </>
          ) : (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-[#FFD600] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#1f1f1f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#FFD600] mb-2">Message Sent!</h3>
              <p className="text-[#f5f5f5]">Thank you! I'll get back to you soon.</p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 px-4 py-2 bg-[#333333] text-[#f5f5f5] rounded-lg hover:bg-[#444444] transition-colors duration-200"
              >
                Send Another Message
              </button>
            </div>
          )}
        </div>
      </div>
  );
};

export default Contact;
