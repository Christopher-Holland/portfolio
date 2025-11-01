//FINISH ADDING THE image TO MY LEDGER PROJECT

import React, { useRef, useState, useEffect } from "react";
import RevealOnScroll from "./RevealOnScroll";
import ProjectCard from "./ProjectCard";
import ProjectModal from "../ProjectModal";
import '../../index.css';

const projects = [
    {
        title: "My Ledger",
        cardDescription:
            "A full-stack personal finance tracker that helps users manage bills, monitor savings goals, and visualize spending trends with an intuitive dashboard.",
        modalDescription: `
                <p><strong>Overview:</strong> My Ledger is a full-stack personal finance management app built with the MERN stack (MongoDB, Express, React, Node.js). It allows users to organize bills, set and track savings goals, and visualize their spending through an interactive dashboard.</p>
                <ul>
                    <li>Secure user authentication using JWT and bcrypt</li>
                    <li>CRUD functionality for bills and savings goals</li>
                    <li>Responsive React UI styled with TailwindCSS</li>
                    <li>Interactive charts and goal progress indicators</li>
                    <li>Deployed using Render (backend) and Vercel (frontend)</li>
                </ul>
                <p>Developing My Ledger strengthened my understanding of full-stack application architecture, secure authentication, and state management, while providing real-world experience deploying scalable applications.</p>
            `,
        images: [
            "/portfolio/images/my-ledger/login.png",
            "/portfolio/images/my-ledger/dashboard-page.png",
            "/portfolio/images/my-ledger/accounts-page.png",
            "/portfolio/images/my-ledger/add-account.png",
            "/portfolio/images/my-ledger/create-account.png",
            "/portfolio/images/my-ledger/add-transaction.png",
            "/portfolio/images/my-ledger/transaction-page.png",
            "/portfolio/images/my-ledger/add-goal.png",
            "/portfolio/images/my-ledger/goals-page.png",
            "/portfolio/images/my-ledger/reports-page.png",
            "/portfolio/images/my-ledger/settings.png",
        ],
        thumbnail: "/portfolio/images/my-ledger/login.png",
        technologies: ["React", "Node.js", "Express", "MongoDB"],
        demo: "https://my-ledger-cholland.vercel.app/",
        repo: "https://github.com/Christopher-Holland/myledger.git",
    },
    {
        title: "Portfolio Website",
        cardDescription: "A modern personal portfolio showcasing my projects, skills, and experience as a software engineer with smooth animations and a responsive design.",
        modalDescription: `
            <p><strong>Overview:</strong> This portfolio website was designed and developed to highlight my work as a software engineer. It showcases my featured projects, technical skills, and background through a clean, responsive, and interactive interface built with modern web technologies.</p>
            <ul>
                <li>Developed with React and Vite for fast, component-based rendering</li>
                <li>Styled using TailwindCSS for responsive, mobile-friendly layouts</li>
                <li>Includes smooth scroll animations and reveal effects for engaging UX</li>
                <li>Integrated dynamic project modals with detailed descriptions and links</li>
                <li>Deployed using Vercel with optimized performance and SEO configuration</li>
            </ul>
            <p>This project demonstrates my ability to design, develop, and deploy modern front-end web applications while focusing on performance, aesthetics, and user experience.</p>
        `,
        images: "/portfolio/images/portfolio_demo.png",
        thumbnail: "/portfolio/images/portfolio_demo.png",
        technologies: ["React", "TailwindCSS", "Framer Motion", "JavaScript", "HTML", "CSS", "Vite", "EmailJS", "Lucide-React", "GitHub Pages"],
        demo: "#",
        repo: "https://github.com/Christopher-Holland/portfolio.git",
    },
    {
        title: "Next Project Placeholder",
        cardDescription:
            "An upcoming project that will be added soon — stay tuned for more updates.",
        modalDescription: "tbd",
        images: "/portfolio/images/Launching-Soon.jpg",
        thumbnail: "/portfolio/images/Launching-Soon.jpg",
        technologies: ["TBD"],
    },
];

export const Projects = () => {
    const containerRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedProject, setSelectedProject] = useState(null);
    // Scroll to a project index
    const scrollToIndex = (index) => {
        if (!containerRef.current) return;
        const container = containerRef.current;
        const child = container.children[index];
        if (!child) return;

        const containerWidth = container.offsetWidth;
        const childWidth = child.offsetWidth;
        const childLeft = child.offsetLeft;

        // Calculate offset to center the child
        const offset = childLeft - (containerWidth / 2) + (childWidth / 2);

        console.log(`Scrolling to index ${index}, offset: ${offset}, childLeft: ${childLeft}, containerWidth: ${containerWidth}, childWidth: ${childWidth}`);

        container.scrollTo({
            left: offset,
            behavior: "smooth"
        });

        // Update current index immediately
        setCurrentIndex(index);
    };

    // Handle arrow clicks
    const handlePrev = () => {
        if (currentIndex > 0) scrollToIndex(currentIndex - 1);
    };
    const handleNext = () => {
        if (currentIndex < projects.length - 1) scrollToIndex(currentIndex + 1);
    };

    // Update current index on scroll
    const handleScroll = () => {
        if (!containerRef.current) return;
        const container = containerRef.current;
        const children = Array.from(container.children);

        if (children.length === 0) return;

        const containerCenter = container.scrollLeft + container.offsetWidth / 2;

        let closestIndex = 0;
        let minDistance = Infinity;

        children.forEach((child, index) => {
            const childCenter = child.offsetLeft + child.offsetWidth / 2;
            const distance = Math.abs(childCenter - containerCenter);

            if (distance < minDistance) {
                minDistance = distance;
                closestIndex = index;
            }
        });

        console.log(`Scroll detected - closestIndex: ${closestIndex}, currentIndex: ${currentIndex}, scrollLeft: ${container.scrollLeft}`);

        // Only update if the index actually changed
        if (closestIndex !== currentIndex) {
            setCurrentIndex(closestIndex);
        }
    };

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        // Add scroll event listener
        container.addEventListener("scroll", handleScroll, { passive: true });

        // Initial scroll to first card centered after a short delay
        const timer = setTimeout(() => {
            scrollToIndex(0);
        }, 200);

        return () => {
            container.removeEventListener("scroll", handleScroll);
            clearTimeout(timer);
        };
    }, []);

    // Debug current index changes
    useEffect(() => {
        console.log(`Current index changed to: ${currentIndex}`);
    }, [currentIndex]);

    return (
        <section
            id="projects"
            className="min-h-screen flex flex-col justify-center items-center py-16 sm:py-20 px-4 text-[#00ffcc] font-mono relative overflow-hidden"
        >
            <RevealOnScroll>
                <div className="z-10 w-full">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 glow-text flicker text-center">
                        Featured Projects
                    </h2>

                    <div className="relative w-full max-w-6xl px-8 sm:px-12 md:px-0">
                        {/* Arrows */}
                        <button
                            onClick={handlePrev}
                            disabled={currentIndex === 0}
                            className="absolute left-0 md:-left-16 top-1/2 -translate-y-1/2 bg-[#0a0a0a]/90 border border-[#00ffcc]/30 rounded-full p-2 md:p-3 hover:bg-[#00ffcc]/10 transition-all z-20 disabled:opacity-30 text-[#00ffcc] text-lg md:text-xl font-bold"
                        >
                            &#8592;
                        </button>
                        <button
                            onClick={handleNext}
                            disabled={currentIndex === projects.length - 1}
                            className="absolute right-0 md:-right-16 top-1/2 -translate-y-1/2 bg-[#0a0a0a]/90 border border-[#00ffcc]/30 rounded-full p-2 md:p-3 hover:bg-[#00ffcc]/10 transition-all z-20 disabled:opacity-30 text-[#00ffcc] text-lg md:text-xl font-bold"
                        >
                            &#8594;
                        </button>

                        {/* Scrollable cards */}
                        <div
                            ref={containerRef}
                            className="flex overflow-x-auto scroll-smooth gap-6 px-6 py-8 scrollbar-hide"
                            style={{
                                scrollbarWidth: 'none',
                                msOverflowStyle: 'none',
                                scrollSnapType: 'x mandatory'
                            }}
                        >
                            {projects.map((project, index) => (
                                <div
                                    key={index}
                                    className={`flex-shrink-0 w-[300px] sm:w-[350px] md:w-[400px] transition-transform duration-300 ${index === currentIndex ? "scale-100" : "scale-90 opacity-70"
                                        }`}
                                    style={{ scrollSnapAlign: 'center' }}
                                >
                                    <ProjectCard
                                        project={project}
                                        onClick={() => setSelectedProject(project)} />
                                </div>
                            ))}
                        </div>

                        {/* Dot Indicators */}
                        <div className="flex justify-center mt-6 gap-2">
                            {projects.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => scrollToIndex(index)}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                                        ? "bg-[#00ffcc] scale-125"
                                        : "bg-[#00ffcc]/30 hover:bg-[#00ffcc]/60"
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
            {selectedProject && (
                <ProjectModal
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                    projects={projects}
                    currentIndex={projects.findIndex(p => p.title === selectedProject.title)}
                    onPrevious={() => {
                        const currentIdx = projects.findIndex(p => p.title === selectedProject.title);
                        const prevIdx = currentIdx > 0 ? currentIdx - 1 : projects.length - 1;
                        setSelectedProject(projects[prevIdx]);
                    }}
                    onNext={() => {
                        const currentIdx = projects.findIndex(p => p.title === selectedProject.title);
                        const nextIdx = currentIdx < projects.length - 1 ? currentIdx + 1 : 0;
                        setSelectedProject(projects[nextIdx]);
                    }}
                />
            )}
        </section>
    );
};