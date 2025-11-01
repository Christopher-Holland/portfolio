/**
 * ProjectModal Component
 * 
 * Modal dialog that displays detailed project information including:
 * - Image carousel with autoplay functionality
 * - Project description, technologies, and links
 * - Navigation between projects
 * 
 * @component
 * @param {Object} props - Component props
 * @param {Object} props.project - Project object containing title, images, description, etc.
 * @param {Function} props.onClose - Callback to close the modal
 * @param {Array} props.projects - Array of all projects for navigation
 * @param {number} props.currentIndex - Current project index in the projects array
 * @param {Function} props.onPrevious - Callback to navigate to previous project
 * @param {Function} props.onNext - Callback to navigate to next project
 * @returns {JSX.Element|null} Modal component or null if no project is selected
 */

import React, { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import "../index.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

/**
 * ProjectModal Component
 * 
 * Displays a full-screen modal with project details, image carousel,
 * and navigation controls. Uses Swiper for image carousel functionality.
 */
const ProjectModal = ({ project, onClose, projects, currentIndex, onPrevious, onNext }) => {
    // Track which image in the carousel is currently active
    const [activeImageIndex, setActiveImageIndex] = useState(0);
    
    // Early return if no project is provided
    if (!project) return null;

    /**
     * Normalize images to array format
     * Handles both single image strings and image arrays
     */
    const imageArray = Array.isArray(project.images) ? project.images : [project.images];
    
    /**
     * Reset image carousel to first image when project changes
     * Prevents showing wrong image when switching between projects
     */
    useEffect(() => {
        setActiveImageIndex(0);
    }, [project.title]);

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
        >
            {/* Modal content */}
            <div className="relative w-full max-w-3xl bg-[#0a0a0a] border border-[#00ffcc]/50 rounded-xl shadow-[0_0_20px_#00ffaa] overflow-y-auto max-h-[90vh]">
                {/* Navigation and Close buttons - positioned above images */}
                <div className="flex justify-between items-center p-4 pb-2">
                    {/* Title placeholder for spacing */}
                    <div className="flex-1"></div>
                    
                    {/* Navigation buttons */}
                    <div className="flex gap-2">
                        {/* Previous button */}
                        <button
                            onClick={onPrevious}
                            className="bg-[#0a0a0a]/90 backdrop-blur-sm border border-[#00ffcc]/30 rounded-full p-2 text-[#00ffcc] hover:text-[#00ffaa] hover:bg-[#00ffcc]/10 transition z-30"
                            title="Previous Project"
                        >
                            <ChevronLeft size={24} />
                        </button>

                        {/* Next button */}
                        <button
                            onClick={onNext}
                            className="bg-[#0a0a0a]/90 backdrop-blur-sm border border-[#00ffcc]/30 rounded-full p-2 text-[#00ffcc] hover:text-[#00ffaa] hover:bg-[#00ffcc]/10 transition z-30"
                            title="Next Project"
                        >
                            <ChevronRight size={24} />
                        </button>

                        {/* Close button */}
                        <button
                            onClick={onClose}
                            className="bg-[#0a0a0a]/90 backdrop-blur-sm border border-[#00ffcc]/30 rounded-full p-2 text-[#00ffcc] hover:text-[#00ffaa] hover:bg-[#00ffcc]/10 transition z-30"
                            title="Close Modal"
                        >
                            <X size={24} />
                        </button>
                    </div>
                </div>

                {/* Image Carousel Section */}
                {imageArray && imageArray.length > 0 && (
                    <div className="w-full px-4 pb-4">
                        {/* Swiper Carousel with Autoplay */}
                        <Swiper
                            modules={[Autoplay]}
                            spaceBetween={30}
                            slidesPerView={1}
                            autoplay={{
                                delay: 5000, // 5 second delay between slides
                                disableOnInteraction: false, // Continue autoplay after user interaction
                            }}
                            onSlideChange={(swiper) => setActiveImageIndex(swiper.activeIndex)}
                            className="w-full"
                        >
                            {imageArray.map((img, index) => (
                                <SwiperSlide key={index}>
                                    <div className="flex justify-center items-center w-full">
                                        <img
                                            src={img}
                                            alt={`${project.title} screenshot ${index + 1}`}
                                            className="max-w-full max-h-[500px] w-auto h-auto object-contain rounded-lg shadow-md"
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        
                        {/* Carousel Indicators - Only show if multiple images */}
                        {imageArray.length > 1 && (
                            <div className="flex justify-center mt-4 gap-2">
                                {imageArray.map((_, index) => (
                                    <div
                                        key={index}
                                        className={`w-2 h-2 rounded-full transition-all ${
                                            index === activeImageIndex
                                                ? "bg-[#00ffcc] w-6" // Active indicator is wider
                                                : "bg-[#00ffcc]/30" // Inactive indicators are dimmed
                                        }`}
                                        aria-label={`Image ${index + 1} of ${imageArray.length}`}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                )}

                {/* Project details */}
                <div className="p-6 text-[#00ffcc] font-mono">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-2xl font-bold glow-text flicker">{project.title}</h3>
                        <span className="text-sm text-[#00ffcc]/60">
                            {currentIndex + 1} of {projects.length}
                        </span>
                    </div>
                    <div
                        className="modal-description"
                        dangerouslySetInnerHTML={{ __html: project.modalDescription }}
                    />

                    {project.technologies && project.technologies.length > 0 && (
                        <p className="mb-4">
                            <span className="font-bold">Technologies:</span>{" "}
                            {project.technologies.join(", ")}
                        </p>
                    )}

                    <div className="flex flex-wrap gap-4 mt-4">
                        {project.demo && (
                            <a
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="py-2 px-4 border border-[#00ffcc] rounded hover:shadow-[0_0_15px_#00ffaa] transition text-sm"
                            >
                                Visit Website
                            </a>
                        )}
                        {project.repo && (
                            <a
                                href={project.repo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="py-2 px-4 border border-[#00ffcc] rounded hover:shadow-[0_0_15px_#00ffaa] transition text-sm"
                            >
                                GitHub
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;