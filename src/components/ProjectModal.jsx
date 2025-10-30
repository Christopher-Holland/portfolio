import React from "react";
import { X } from "lucide-react"; // close icon
import "../index.css";

const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
        >
            {/* Modal content */}
            <div className="relative w-full max-w-3xl bg-[#0a0a0a] border border-[#00ffcc]/50 rounded-xl shadow-[0_0_20px_#00ffaa] overflow-y-auto max-h-[90vh]">
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-[#00ffcc] hover:text-[#00ffaa] transition"
                >
                    <X size={24} />
                </button>

                {/* Project image */}
                {project.image && (
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 object-cover rounded-t-xl"
                    />
                )}

                {/* Project details */}
                <div className="p-6 text-[#00ffcc] font-mono">
                    <h3 className="text-2xl font-bold mb-4 glow-text flicker">{project.title}</h3>
                    <p className="mb-4">{project.description}</p>

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
                                Demo
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