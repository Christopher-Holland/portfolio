import { useState, useEffect, useRef } from "react";
import "../../index.css";
import RevealOnScroll from "./RevealOnScroll";

// Import SVG logos as modules
import HTML5Logo from "../logos/HTML5.svg";
import CSS3Logo from "../logos/CSS3.svg";
import JavaScriptLogo from "../logos/JavaScript.svg";
import ReactLogo from "../logos/React.svg";
import NextJSLogo from "../logos/Next.js.svg";
import TailwindLogo from "../logos/Tailwind-CSS.svg";
import NodeJSLogo from "../logos/Node.js.svg";
import ExpressLogo from "../logos/Express.svg";
import MongoDBLogo from "../logos/MongoDB.svg";
import PostgreSQLLogo from "../logos/PostgresSQL.svg";

// Tech logos with proper imports
const frontendLogos = [
    { name: "HTML", src: HTML5Logo },
    { name: "CSS", src: CSS3Logo },
    { name: "JavaScript", src: JavaScriptLogo },
    { name: "React", src: ReactLogo },
    { name: "Next.js", src: NextJSLogo },
    { name: "Tailwind CSS", src: TailwindLogo },
];

const backendLogos = [
    { name: "Node.js", src: NodeJSLogo },
    { name: "Express", src: ExpressLogo },
    { name: "MongoDB", src: MongoDBLogo },
    { name: "PostgreSQL", src: PostgreSQLLogo },
];

export const About = () => {
    const [scrollX, setScrollX] = useState(0);
    const tickerRef = useRef(null);

    // Simple auto-scroll effect
    useEffect(() => {
        const interval = setInterval(() => {
            setScrollX((prev) => {
                const width = tickerRef.current?.scrollWidth || 0;
                return prev >= width / 2 ? 0 : prev + 1;
            });
        }, 20);
        return () => clearInterval(interval);
    }, []);

    // Example degrees array for dynamic growth
    const degrees = [
        {
            title: "Bachelor of Science in Computer Science",
            school: "Southern New Hampshire University",
            years: "2023 - 2025",
            gpa: "3.97",
        },
        {
            title: "Associate of Arts: Mechanical Design",
            school: "Maysville Community and Technical College",
            years: "2020 - 2020",
            gpa: "4.00",
        },
        {
            title: "Associate of Arts: General Studies",
            school: "Maysville Community and Technical College",
            years: "2012 - 2015",
            gpa: "3.50",
        },
    ];

    return (
        <section
            id="about"
            className="min-h-screen flex flex-col items-center justify-center py-20 relative text-[#00ffcc] font-mono overflow-hidden"
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
                        About Me
                    </h2>

                    <div className="rounded-xl p-8 border border-[#00ffcc]/20 hover:-translate-y-1 transition-all glow-text">
                        <p className="text-[#00ffcc]/70 mb-6 text-lg">
                            I'm a software engineer with a passion for building web applications
                            that are both functional and aesthetically pleasing.
                        </p>

                        {/* Tech logos ticker */}
                        <div className="overflow-hidden relative border-t border-b border-[#00ffcc]/10 py-4 mb-6">
                            <div
                                ref={tickerRef}
                                className="flex gap-6 whitespace-nowrap"
                                style={{ transform: `translateX(-${scrollX}px)` }}
                            >
                                {[...frontendLogos, ...backendLogos, ...frontendLogos, ...backendLogos].map(
                                    (tech, idx) => (
                                        <div key={idx} className="flex flex-col items-center">
                                            <img src={tech.src} alt={tech.name} className="h-12 w-12 mb-1" />
                                            <span className="text-sm text-[#00ffcc]/70">{tech.name}</span>
                                        </div>
                                    )
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Education & Experience */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="p-6 rounded-xl border border-[#00ffcc]/20 hover:-translate-y-1 transition-all glow-text flicker">
                            <h3 className="text-xl font-bold mb-4">Education</h3>
                            <ul className="list-disc list-inside text-[#00ffcc]/70 space-y-2">
                                {degrees.map((deg, i) => (
                                    <li key={i}>
                                        <strong>{deg.title}</strong>
                                        <p>{deg.school}</p>
                                        <p>{deg.years}</p>
                                        <p>{deg.gpa}</p>
                                    </li>
                                ))}
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

                    {/* Placeholder for GitHub contributions */}
                    <div className="mt-8 p-6 rounded-xl border border-[#00ffcc]/20 hover:-translate-y-1 transition-all glow-text flicker">
                        <h3 className="text-xl font-bold mb-4">GitHub Activity</h3>
                        <p className="text-[#00ffcc]/70 text-sm">
                            {/* Later we can embed react-github-calendar here */}
                            Contribution calendar will appear here.
                        </p>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};