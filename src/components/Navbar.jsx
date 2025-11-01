/**
 * Navbar Component
 * 
 * Fixed navigation bar displayed at the top of the page.
 * Includes logo, desktop navigation links, social icons, and mobile menu toggle.
 * Prevents body scroll when mobile menu is open.
 * 
 * @component
 * @param {Object} props - Component props
 * @param {boolean} props.menuOpen - Whether the mobile menu is currently open
 * @param {Function} props.setMenuOpen - Function to toggle mobile menu state
 * @returns {JSX.Element} Fixed navigation bar component
 */

import "../index.css";
import { useEffect } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

/**
 * Navbar Component
 * 
 * Renders the main navigation bar with responsive design.
 * Manages body scroll lock when mobile menu is open.
 */
export const Navbar = ({ menuOpen, setMenuOpen }) => {
    /**
     * Body Scroll Lock Effect
     * 
     * Prevents page scrolling when mobile menu is open
     * to improve UX and prevent background scrolling.
     */
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
        
        // Cleanup: restore scroll on unmount
        return () => {
            document.body.style.overflow = "";
        };
    }, [menuOpen]);

    return (
        <nav className="fixed top-0 w-full z-40 bg-[rgba(0,0,0,0.7)] backdrop-blur-lg border-b border-[#00ffcc]/20 shadow-lg">
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Logo/Brand */}
                    <a 
                        href="#home" 
                        className="font-mono text-xl font-bold text-[#00ffcc] hover:text-[#00ffaa] transition-colors glow-text"
                        aria-label="Home"
                    >
                        cholland<span className="text-blue-500">.dev</span>
                    </a>

                    {/* Right side: Navigation links, social icons, and mobile menu toggle */}
                    <div className="flex items-center gap-6">
                        {/* Desktop Navigation Links - Hidden on mobile */}
                        <div className="hidden md:flex items-center space-x-8">
                            <a href="#home" className="text-[#00ffcc] hover:text-[#00ffaa] transition-colors glow-text">Home</a>
                            <a href="#about" className="text-[#00ffcc] hover:text-[#00ffaa] transition-colors glow-text">About</a>
                            <a href="#projects" className="text-[#00ffcc] hover:text-[#00ffaa] transition-colors glow-text">Projects</a>
                            <a href="#contact" className="text-[#00ffcc] hover:text-[#00ffaa] transition-colors glow-text">Contact</a>
                        </div>
                        
                        {/* Social Media Icons - Hidden on mobile, visible on desktop */}
                        <div className="hidden md:flex gap-4">
                            <a 
                                href="https://github.com/Christopher-Holland" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                aria-label="GitHub Profile"
                            >
                                <FaGithub size={24} color="#00ffcc" />
                            </a>
                            <a 
                                href="https://www.linkedin.com/in/christopher-holland-535312344" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                aria-label="LinkedIn Profile"
                            >
                                <FaLinkedin size={24} color="#00ffcc" />
                            </a>
                        </div>

                        {/* Mobile Menu Toggle - Hamburger Icon */}
                        <button
                            className={`w-7 h-5 relative cursor-pointer z-40 md:hidden ${menuOpen ? "text-[#00ffaa]" : "text-[#00ffcc]"} transition-colors`}
                            onClick={() => setMenuOpen((prev) => !prev)}
                            aria-label={menuOpen ? "Close menu" : "Open menu"}
                            aria-expanded={menuOpen}
                        >
                            &#9776;
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};