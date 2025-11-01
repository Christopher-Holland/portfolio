/**
 * Contact Component
 * 
 * Contact form section that allows visitors to send messages via EmailJS.
 * Includes form validation and submission handling.
 * 
 * @component
 * @returns {JSX.Element} Contact form section
 */

import { useState } from "react";
import RevealOnScroll from "./RevealOnScroll";
import emailjs from 'emailjs-com';

/**
 * Contact Component
 * 
 * Renders a contact form with name, email, and message fields.
 * Uses EmailJS service to send emails without backend infrastructure.
 */
export const Contact = () => {
    // Form state management
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    /**
     * Form Submission Handler
     * 
     * Sends form data via EmailJS and shows success/error feedback.
     * Resets form on successful submission.
     * 
     * @param {Event} e - Form submit event
     */
    const handleSubmit = (e) => {
        e.preventDefault();

        // Send form via EmailJS using environment variables
        emailjs.sendForm(
            import.meta.env.VITE_SERVICE_ID,      // EmailJS service ID
            import.meta.env.VITE_TEMPLATE_ID,     // EmailJS template ID
            e.target,                              // Form element
            import.meta.env.VITE_PUBLIC_KEY        // EmailJS public key
        )
            .then(() => {
                // Success: Show feedback and reset form
                alert('Message sent successfully');
                setFormData({ name: '', email: '', message: '' });
            })
            .catch(() => {
                // Error: Show feedback to user
                alert('Message failed to send');
            });
    };

    return (
        <section
            id="contact"
            className="min-h-screen flex items-center justify-center py-16 sm:py-20 relative text-[#00ffcc] font-mono overflow-hidden"
        >
            {/* Subtle scanline overlay */}
            <div
                className="absolute inset-0 pointer-events-none z-0 mix-blend-screen opacity-5"
                style={{
                    background: `repeating-linear-gradient(
            to bottom,
            rgba(0, 255, 204, 0.1) 0px,
            rgba(0, 255, 204, 0.1) 1px,
            transparent 2px,
            transparent 3px
          )`,
                }}
            ></div>

            <RevealOnScroll>
                <div className="px-4 w-full max-w-[800px] mx-auto p-4 sm:p-6 z-10">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-8 glow-text flicker text-center">
                        Get In Touch
                    </h2>

                    <form className="space-y-6" onSubmit={handleSubmit}>
                        {["name", "email"].map((field) => (
                            <div key={field} className="relative">
                                <input
                                    type={field === "email" ? "email" : "text"}
                                    id={field}
                                    name={field}
                                    required
                                    value={formData[field]}
                                    className="w-full bg-black/50 border border-[#00ffcc]/30 rounded px-4 py-3 text-sm sm:text-base text-[#00ffcc] placeholder-[#00ffcc]/50 transition focus:outline-none focus:border-[#00ffaa] focus:shadow-[0_0_5px_#00ffaa] focus:bg-black/70"
                                    placeholder={field === "email" ? "example@gmail.com" : "Name..."}
                                    onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
                                />
                            </div>
                        ))}

                        <div className="relative">
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={5}
                                value={formData.message}
                                className="w-full bg-black/50 border border-[#00ffcc]/30 rounded px-4 py-3 text-sm sm:text-base text-[#00ffcc] placeholder-[#00ffcc]/50 transition focus:outline-none focus:border-[#00ffaa] focus:shadow-[0_0_5px_#00ffaa] focus:bg-black/70"
                                placeholder="Your Message..."
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[#00ffcc]/10 text-[#00ffcc] py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_10px_#00ffaa] text-sm sm:text-base"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </RevealOnScroll>
        </section>
    );
};