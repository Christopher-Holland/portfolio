// TODO: FIX THE PADDING WITH THE HOVER EFFECT ON THE PROJECT CARDS - CURRENTLY IT IS CUT OFF BY THE FEATURED PROJECTS TITLE 
// TODO: FIX THE BACKGOUND, IT DOESN'T MATCH THE REST OF THE WEBSITE AND ONLY SHOWS BLACK. SAME WITH THE CONTACT SECTION.

import React, { useRef, useState, useEffect } from "react";
import RevealOnScroll from "./RevealOnScroll";
import ProjectCard from "./ProjectCard";
import '../../index.css';

const projects = [
    {
        title: "Ledgerly",
        description:
            "A personal finance dashboard with budgeting, analytics, and goal tracking built using the MERN stack.",
        image: "/images/ledgerly-preview.png",
        technologies: ["React", "Node.js", "Express", "MongoDB"],
        demo: "https://ledgerly.vercel.app",
        repo: "https://github.com/yourusername/ledgerly",
    },
    {
        title: "Portfolio Website",
        description:
            "This interactive portfolio built with React, TailwindCSS, and Framer Motion showcases my development work and design style.",
        image: "/images/portfolio-preview.png",
        technologies: ["React", "TailwindCSS", "Framer Motion"],
        demo: "#",
        repo: "https://github.com/yourusername/portfolio",
    },
    {
        title: "Next Project Placeholder",
        description:
            "An upcoming project that will be added soon — stay tuned for more updates.",
        image: "/images/coming-soon.png",
        technologies: ["TBD"],
    },
];

export const Projects = () => {
    const containerRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

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
            className="min-h-screen flex flex-col justify-center items-center py-20 text-[#00ffcc] font-mono relative overflow-hidden"
        >
            <RevealOnScroll>
                <div className="z-10 w-full">
                    <h2 className="text-3xl font-bold mb-12 glow-text flicker text-center">
                        Featured Projects
                    </h2>

                    <div className="relative w-full max-w-6xl">
                        {/* Arrows */}
                        <button
                            onClick={handlePrev}
                            disabled={currentIndex === 0}
                            className="absolute -left-16 top-1/2 -translate-y-1/2 bg-[#0a0a0a]/90 border border-[#00ffcc]/30 rounded-full p-3 hover:bg-[#00ffcc]/10 transition-all z-20 disabled:opacity-30 text-[#00ffcc] text-xl font-bold"
                        >
                            &#8592;
                        </button>
                        <button
                            onClick={handleNext}
                            disabled={currentIndex === projects.length - 1}
                            className="absolute -right-16 top-1/2 -translate-y-1/2 bg-[#0a0a0a]/90 border border-[#00ffcc]/30 rounded-full p-3 hover:bg-[#00ffcc]/10 transition-all z-20 disabled:opacity-30 text-[#00ffcc] text-xl font-bold"
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
                                    <ProjectCard project={project} />
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
        </section>
    );
};