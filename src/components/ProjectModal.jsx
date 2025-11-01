import React, { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react"; // close icon and navigation icons
import "../index.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const ProjectModal = ({ project, onClose, projects, currentIndex, onPrevious, onNext }) => {
    const [activeImageIndex, setActiveImageIndex] = useState(0);
    
    if (!project) return null;

    // Normalize images to an array
    const imageArray = Array.isArray(project.images) ? project.images : [project.images];
    
    // Reset active image index when project changes
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

                {/* Project images carousel */}
                {imageArray && imageArray.length > 0 && (
                    <div className="w-full px-4 pb-4">
                        <Swiper
                            modules={[Autoplay]}
                            spaceBetween={30}
                            slidesPerView={1}
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: false,
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
                        {imageArray.length > 1 && (
                            <div className="flex justify-center mt-4 gap-2">
                                {imageArray.map((_, index) => (
                                    <div
                                        key={index}
                                        className={`w-2 h-2 rounded-full transition-all ${
                                            index === activeImageIndex
                                                ? "bg-[#00ffcc] w-6"
                                                : "bg-[#00ffcc]/30"
                                        }`}
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