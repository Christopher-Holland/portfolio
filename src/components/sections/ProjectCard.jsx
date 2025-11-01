/**
 * ProjectCard Component
 * 
 * Displays a single project in card format with thumbnail, description,
 * technology tags, and action buttons.
 * 
 * @component
 * @param {Object} props - Component props
 * @param {Object} props.project - Project object with title, thumbnail, description, etc.
 * @param {Function} props.onClick - Callback function when card is clicked
 * @returns {JSX.Element} Project card component
 */

import React from "react";

/**
 * ProjectCard Component
 * 
 * Renders a clickable card displaying project information.
 * Opens modal when clicked or when "Learn More" button is pressed.
 */
const ProjectCard = ({ project, onClick }) => {
    return (
        <div
            onClick={onClick}
            className="cursor-pointer bg-[#0a0a0a] border border-[#00ffcc]/20 rounded-2xl p-4 sm:p-6 text-center transition-all duration-300 hover:scale-105"
        >
            <div className="relative overflow-hidden rounded-xl mb-4">
                <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-40 sm:h-48 object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold mb-2 glow-text">{project.title}</h3>
            <p className="text-sm sm:text-base text-[#00ffcc]/70 mb-4 leading-relaxed">{project.cardDescription}</p>

            <div className="flex justify-center flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                    <span
                        key={i}
                        className="px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm bg-[#00ffcc]/10 border border-[#00ffcc]/30 text-[#00ffcc]/80"
                    >
                        {tech}
                    </span>
                ))}
            </div>

            {/* Action Buttons */}
            <div className="flex justify-center gap-2 sm:gap-4 flex-wrap">
                {/* Learn More Button - Opens project modal */}
                <button
                    onClick={(e) => {
                        e.stopPropagation(); // Prevent card click event from firing
                        onClick(); // Open project detail modal
                    }}
                    className="px-3 sm:px-4 py-2 border border-[#00ffcc]/40 rounded-lg hover:bg-[#00ffcc]/10 hover:border-[#00ffcc] transition-all duration-300 glow-text text-sm sm:text-base"
                >
                    Learn More
                </button>
                
                {/* GitHub Link - Only shown if repository URL exists */}
                {project.repo && (
                    <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()} // Prevent card click event
                        className="px-3 sm:px-4 py-2 border border-[#00ffcc]/40 rounded-lg hover:bg-[#00ffcc]/10 hover:border-[#00ffcc] transition-all duration-300 glow-text text-sm sm:text-base"
                    >
                        GitHub
                    </a>
                )}
            </div>
        </div>
    );
};

export default ProjectCard;