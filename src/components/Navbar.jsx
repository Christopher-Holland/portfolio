import "../index.css";
import { useEffect } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);

    return (
        <nav className="fixed top-0 w-full z-40 bg-[rgba(0,0,0,0.7)] backdrop-blur-lg border-b border-[#00ffcc]/20 shadow-lg">
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex items-center justify-between h-16">

                    {/* Logo */}
                    <a href="#home" className="font-mono text-xl font-bold text-[#00ffcc] hover:text-[#00ffaa] transition-colors glow-text">
                        cholland<span className="text-blue-500">.dev</span>
                    </a>

                    {/* Right side container */}
                    <div className="flex items-center gap-6">
                        {/* Desktop links */}
                        <div className="hidden md:flex items-center space-x-8">
                            <a href="#home" className="text-[#00ffcc] hover:text-[#00ffaa] transition-colors glow-text">Home</a>
                            <a href="#about" className="text-[#00ffcc] hover:text-[#00ffaa] transition-colors glow-text">About</a>
                            <a href="#projects" className="text-[#00ffcc] hover:text-[#00ffaa] transition-colors glow-text">Projects</a>
                            <a href="#contact" className="text-[#00ffcc] hover:text-[#00ffaa] transition-colors glow-text">Contact</a>
                        </div>
                        {/* Social icons - hidden on mobile, shown on desktop */}
                        <div className="hidden md:flex gap-4">
                            <a href="https://github.com/Christopher-Holland" target="_blank" rel="noopener noreferrer">
                                <FaGithub size={24} color="#00ffcc" />
                            </a>
                            <a href="https://www.linkedin.com/in/christopher-holland-535312344" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin size={24} color="#00ffcc" />
                            </a>
                        </div>

                        {/* Hamburger menu */}
                        <div
                            className={`w-7 h-5 relative cursor-pointer z-40 md:hidden ${menuOpen ? "text-[#00ffaa]" : "text-[#00ffcc]"} transition-colors`}
                            onClick={() => setMenuOpen((prev) => !prev)}
                        >
                            &#9776;
                        </div>
                    </div>

                </div>
            </div>
        </nav>
    );
};