import "../../index.css";
import RevealOnScroll from "./RevealOnScroll";

export const Projects = () => {
    const projects = [
        {
            title: "My Ledger",
            description: "An expense tracking app built with React and Tailwind CSS.",
            tech: ["React", "Node.js", "Express", "TailwindCSS", "MongoDB"],
            link: "#", // replace with actual project link
        },
        {
            title: "Portfolio Website",
            description: "My personal portfolio website built with React and Tailwind CSS.",
            tech: ["React", "TailwindCSS", "Vite", "JavaScript"],
            link: "#", // replace with actual project link
        },
    ];

    return (
        <section
            id="projects"
            className="min-h-screen flex items-center justify-center py-20 relative text-[#00ffcc] font-mono overflow-hidden"
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
                <div className="max-w-5xl mx-auto px-4 z-10">
                    <h2 className="text-3xl font-bold mb-8 glow-text flicker text-center">
                        Featured Projects
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {projects.map((project, idx) => (
                            <div
                                key={idx}
                                className="p-6 rounded-xl border border-[#00ffcc]/20 hover:-translate-y-1 hover:shadow-[0_0_10px_#00ffaa] transition-all glow-text"
                            >
                                <h3 className="text-xl font-bold mb-2 glow-text flicker">
                                    {project.title}
                                </h3>
                                <p className="text-[#00ffcc]/70 mb-6 text-lg">{project.description}</p>

                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech, key) => (
                                        <span
                                            key={key}
                                            className="bg-[#00ffcc]/10 text-[#00ffcc] py-1 px-3 rounded-full text-sm hover:shadow-[0_0_8px_#00ffaa] transition"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex justify-start items-center mt-6">
                                    <a
                                        href={project.link}
                                        className="text-[#00ffcc] hover:text-[#00ffaa] transition-colors font-medium underline"
                                    >
                                        View Project
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};