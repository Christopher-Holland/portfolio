import { useState, useEffect, useRef } from "react";
import "../../index.css";
import GitHubCalendar from "react-github-calendar";
import RevealOnScroll from "./RevealOnScroll";

// Import SVG logos as modules
import HTML5Logo from "../logos/HTML5.svg";
import CSS3Logo from "../logos/CSS3.svg";
import JavaScriptLogo from "../logos/JavaScript.svg";
import ReactLogo from "../logos/React.svg";
import NextJSLogo from "../logos/NextJS.svg";
import TailwindLogo from "../logos/Tailwind-CSS.svg";
import NodeJSLogo from "../logos/NodeJS.svg";
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

    const experience = [
        {
            title: "Senior CAD Technician",
            company: "ENTrust Solutions Group",
            years: "2019 - Present",
            duties: "At ENTrust Solutions Group, I design underground gas utility layouts to enhance both safety and project efficiency. I optimize GIS mapping workflows to support precise infrastructure planning and manage project documentation to ensure accurate, accessible records. Additionally, I create paving plans that improve timelines and cost-effectiveness, streamline interdepartmental communication through organized design file management, and increase customer satisfaction by delivering high-quality CAD designs on schedule."
        },
        {
            title: "Drafter",
            company: "AeroTek",
            years: "2019 - 2019",
            duties: "During my time at Aerotek, I reviewed technical drawings for accuracy and compliance with engineering standards, entered and maintained critical project data to improve document retrieval efficiency, and collaborated closely with engineering teams to update and maintain project documentation. I also identified and resolved discrepancies in drawings to support quality assurance and streamlined data recording processes to enhance overall project workflow."
        },
        {
            title: "Press Operator",
            company: "Nesco Resources",
            years: "2019 - 2019",
            duties: "As a Press Operator at Nesco Resources, I loaded and positioned raw materials into press machinery efficiently while managing multiple projects to maintain operational continuity. I performed regular inspections to ensure high-quality output of pressed parts, verified completed orders for accuracy, and conducted routine maintenance on press equipment to optimize performance."
        }
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
                            I’m a software engineer transitioning from a career in CAD and engineering design. While I don’t have traditional dev experience, I’ve spent years honing problem-solving, technical, and project management skills that translate directly to coding. Recently, I’ve focused on full-stack development, building web apps with React, Node.js, and MongoDB. I enjoy creating projects that are both functional and visually engaging, and I bring the same attention to detail and creativity from engineering design to every line of code I write.
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
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 max-w-6xl mx-auto w-full">
                        {/* Education */}
                        <div className="p-6 rounded-xl border border-[#00ffcc]/20 hover:-translate-y-1 transition-all glow-text flicker">
                            <h3 className="text-xl font-bold mb-4">Education</h3>
                            <ul className="text-[#00ffcc]/70 space-y-3" style={{ listStyleType: 'disc', listStylePosition: 'outside', paddingLeft: '1.5rem' }}>
                                {degrees.map((deg, i) => (
                                    <li key={i} className="leading-relaxed">
                                        <strong>{deg.title}</strong><br />
                                        {deg.school}<br />
                                        {deg.years}<br />
                                        GPA: {deg.gpa}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Experience */}
                        <div className="p-6 rounded-xl border border-[#00ffcc]/20 hover:-translate-y-1 transition-all glow-text flicker">
                            <h3 className="text-xl font-bold mb-4">Experience</h3>
                            <ul className="text-[#00ffcc]/70 space-y-3" style={{ listStyleType: 'disc', listStylePosition: 'outside', paddingLeft: '1.5rem' }}>
                                {experience.map((exp, i) => (
                                    <li key={i} className="leading-relaxed">
                                        <strong>{exp.title}</strong><br />
                                        {exp.company}<br />
                                        {exp.years}<br />
                                        {exp.duties}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* GitHub Activity */}
                    <div className="mt-8 p-6 rounded-xl border border-[#00ffcc]/20 hover:-translate-y-1 transition-all glow-text flicker">
                        <h3 className="text-xl font-bold mb-4">GitHub Activity</h3>
                        <GitHubCalendar
                            username="Christopher-Holland"
                            blockSize={20}
                            blockMargin={5}
                            fontSize={16}
                            color="#00ffcc"
                        />
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};