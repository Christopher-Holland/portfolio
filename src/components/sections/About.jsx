

export const About = () => {

    const frontendSkills = [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Next.js",
        "Tailwind CSS",

    ]

    const backendSkills = [
        "Node.js",
        "Express",
        "MongoDB",
        "PostgreSQL",

    ]

    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20">
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    About Me
                </h2>

                <div className="rounded-xl p-8 border border-white/10 hover:-translate-y-1 transition-all ">
                    <p className="text-gray-300 mb-6 text-lg">
                        I'm a software engineer with a passion for building web applications that are both functional and aesthetically pleasing.
                    </p>
                    <div className="grid grid-cols-2 gap-6">
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">
                                Frontend Development
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {frontendSkills.map((tech, key) => (
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                        </div>
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">
                                Backend Development
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {backendSkills.map((tech, key) => (
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="p-6 rounded-xl border border-blue-500/10 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">
                            Education
                        </h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li>
                                <strong>Bachelor of Science in Computer Science</strong>
                                <p>University of California, Los Angeles</p>
                                <p>2018 - 2022</p>
                            </li>
                            <li>
                                Relavent Coursework:
                                <ul>
                                    <li>
                                        Data Structures and Algorithms, Object-Oriented Programming, Data Science, Machine Learning, Artificial Intelligence, Computer Graphics, Computer Vision, Natural Language Processing, Robotics, and more.
                                    </li>

                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="p-6 rounded-xl border border-blue-500/10 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">
                            Experience
                        </h3>
                        <div className="space-y-4 text-gray-300">
                            <div>
                                <h4 className="text-lg font-semibold mb-2">
                                    Software Engineer
                                </h4>
                                <p>Specific duties: 

                                </p>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold mb-2">
                                    Software Engineer
                                </h4>
                                <p>Specific duties: 

                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}