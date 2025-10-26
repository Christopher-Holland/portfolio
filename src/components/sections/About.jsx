import "../../index.css";
import RevealOnScroll from "./RevealOnScroll";

export const About = () => {
    const frontendSkills = [
        "HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS",
    ];

    const backendSkills = [
        "Node.js", "Express", "MongoDB", "PostgreSQL",
    ];

    return (
        <section
            id="about"
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
                <div className="max-w-3xl mx-auto px-4 z-10">
                    <h2 className="text-3xl font-bold mb-8 glow-text flicker text-center">
                        About Me
                    </h2>

                    <div className="rounded-xl p-8 border border-[#00ffcc]/20 hover:-translate-y-1 transition-all glow-text">
                        <p className="text-[#00ffcc]/70 mb-6 text-lg">
                            I'm a software engineer with a passion for building web applications
                            that are both functional and aesthetically pleasing.
                        </p>

                        <div className="grid grid-cols-2 gap-6">
                            {/* Frontend */}
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all border border-[#00ffcc]/10">
                                <h3 className="text-xl font-bold mb-4 glow-text flicker">
                                    Frontend Development
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {frontendSkills.map((tech, key) => (
                                        <span
                                            key={key}
                                            className="bg-[#00ffcc]/10 text-[#00ffcc] py-1 px-3 rounded-full text-sm hover:shadow-[0_0_8px_#00ffaa] transition"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Backend */}
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all border border-[#00ffcc]/10">
                                <h3 className="text-xl font-bold mb-4 glow-text flicker">
                                    Backend Development
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {backendSkills.map((tech, key) => (
                                        <span
                                            key={key}
                                            className="bg-[#00ffcc]/10 text-[#00ffcc] py-1 px-3 rounded-full text-sm hover:shadow-[0_0_8px_#00ffaa] transition"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Education & Experience */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="p-6 rounded-xl border border-[#00ffcc]/20 hover:-translate-y-1 transition-all glow-text flicker">
                            <h3 className="text-xl font-bold mb-4">Education</h3>
                            <ul className="list-disc list-inside text-[#00ffcc]/70 space-y-2">
                                <li>
                                    <strong>Bachelor of Science in Computer Science</strong>
                                    <p>University of California, Los Angeles</p>
                                    <p>2018 - 2022</p>
                                </li>
                                <li>
                                    Relevant Coursework:
                                    <ul className="list-disc list-inside ml-4">
                                        <li>
                                            Data Structures and Algorithms, Object-Oriented Programming,
                                            Data Science, Machine Learning, AI, Computer Graphics, Computer Vision,
                                            Natural Language Processing, Robotics, and more.
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>

                        <div className="p-6 rounded-xl border border-[#00ffcc]/20 hover:-translate-y-1 transition-all glow-text flicker">
                            <h3 className="text-xl font-bold mb-4">Experience</h3>
                            <div className="space-y-4 text-[#00ffcc]/70">
                                <div>
                                    <h4 className="text-lg font-semibold mb-2">Software Engineer</h4>
                                    <p>Specific duties: </p>
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold mb-2">Software Engineer</h4>
                                    <p>Specific duties: </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};