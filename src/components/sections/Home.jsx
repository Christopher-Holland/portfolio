import { useState, useEffect } from "react";
import "../../index.css";

export const Home = () => {
    const descriptors = ["Software Engineer", "Problem Solver", "Full-Stack Developer"];
    const [currentDescriptor, setCurrentDescriptor] = useState("");
    const [descriptorIndex, setDescriptorIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);

    // ✅ Hardcoded GitHub stats — update these manually as needed
    const [statsList] = useState([
        "Commits this year: 194",
        "Public repositories: 4",
        "Languages: JavaScript, Java, HTML",
        "Total projects: 17",
    ]);

    const asciiChars = "01<>[]{}+-*#@";
    const [asciiLines, setAsciiLines] = useState(
        Array(15)
            .fill("")
            .map(() => Array(30).fill(" "))
    );

    // Typewriter effect for descriptors
    useEffect(() => {
        const fullText = descriptors[descriptorIndex];
        if (charIndex < fullText.length) {
            const timeout = setTimeout(() => {
                setCurrentDescriptor(fullText.substring(0, charIndex + 1));
                setCharIndex(charIndex + 1);
            }, 80);
            return () => clearTimeout(timeout);
        } else {
            const timeout = setTimeout(() => {
                setCharIndex(0);
                setDescriptorIndex((prev) => (prev + 1) % descriptors.length);
            }, 1200);
            return () => clearTimeout(timeout);
        }
    }, [charIndex, descriptorIndex]);

    // Animate ASCII rain
    useEffect(() => {
        const interval = setInterval(() => {
            setAsciiLines((prevLines) =>
                prevLines.map((line) =>
                    line.map(() => asciiChars[Math.floor(Math.random() * asciiChars.length)])
                )
            );
        }, 500);
        return () => clearInterval(interval);
    }, []);

    // Typewriter effect for stats
    const [displayStats, setDisplayStats] = useState([]);
    const [statLineIndex, setStatLineIndex] = useState(0);
    const [statCharIndex, setStatCharIndex] = useState(0);
    const [showCursor, setShowCursor] = useState(true);

    useEffect(() => {
        const line = statsList[statLineIndex];
        if (statCharIndex < line.length) {
            const timeout = setTimeout(() => {
                setDisplayStats((prev) => {
                    const newStats = [...prev];
                    newStats[statLineIndex] = line.substring(0, statCharIndex + 1);
                    return newStats;
                });
                setStatCharIndex(statCharIndex + 1);
            }, 50);
            return () => clearTimeout(timeout);
        } else {
            const timeout = setTimeout(() => {
                setStatCharIndex(0);
                setStatLineIndex((statLineIndex + 1) % statsList.length);
                setDisplayStats((prev) => {
                    const newStats = [...prev];
                    const nextIndex = (statLineIndex + 1) % statsList.length;
                    newStats[nextIndex] = "";
                    return newStats;
                });
            }, 800);
            return () => clearTimeout(timeout);
        }
    }, [statCharIndex, statLineIndex, statsList]);

    // Cursor blinking effect
    useEffect(() => {
        const interval = setInterval(() => setShowCursor((prev) => !prev), 500);
        return () => clearInterval(interval);
    }, []);

    return (
        <section
            id="home"
            className="min-h-screen flex flex-col lg:flex-row items-center justify-between relative px-4 sm:px-6 lg:px-10 py-20 lg:py-0 text-[#00ffcc] font-mono overflow-hidden"
        >
            {/* Left column: Intro */}
            <div className="flex-1 flex flex-col justify-center w-full lg:w-auto mb-8 lg:mb-0">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 glow-text flicker">
                    Christopher Holland
                </h1>

                <h2 className="text-xl sm:text-2xl md:text-3xl font-mono mb-4">
                    {currentDescriptor}
                    <span className="animate-blink ml-1">█</span>
                </h2>

                <p className="text-[#00ffcc]/70 mb-8 max-w-lg text-sm sm:text-base">
                    I build web applications that are functional, visually appealing, and maintainable.
                    My focus is on writing clean, efficient code while delivering meaningful user experiences.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                    <a
                        href="#projects"
                        className="relative py-3 px-6 rounded border border-[#00ffcc] font-medium glow-text hover:shadow-[0_0_15px_#00ffaa] hover:-translate-y-0.5 transition text-center text-sm sm:text-base"
                    >
                        View Projects
                    </a>

                    <a
                        href="#contact"
                        className="relative py-3 px-6 rounded border border-[#00ffcc] font-medium glow-text hover:shadow-[0_0_10px_#00ffaa] hover:bg-[#00ffcc]/10 hover:-translate-y-0.5 transition text-center text-sm sm:text-base"
                    >
                        Contact Me
                    </a>
                </div>
            </div>

            {/* Right column: Terminal stats */}
            <div className="flex-1 flex justify-center items-center relative w-full lg:w-auto">
                <div className="w-full max-w-[400px] lg:max-w-[480px] h-[300px] bg-black/80 border border-[#00ffcc] rounded-lg p-4 sm:p-6 relative overflow-hidden shadow-[0_0_10px_#00ffaa]">
                    {/* ASCII rain overlay */}
                    <div className="absolute inset-0 text-[#00ffcc]/20 font-mono text-lg sm:text-xl leading-[12px] select-none pointer-events-none flex flex-col justify-between">
                        {asciiLines.map((line, i) => (
                            <div key={i} className="flex justify-between">
                                {line.map((char, j) => (
                                    <span key={j}>{char}</span>
                                ))}
                            </div>
                        ))}
                    </div>

                    {/* Stats content with typewriter */}
                    <div className="relative z-10 text-[#00ffcc] font-mono text-base sm:text-lg space-y-2">
                        {displayStats.map((stat, i) =>
                            i <= statLineIndex ? (
                                <p key={i}>
                                    {stat}
                                    {i === statLineIndex && showCursor && <span className="animate-blink">█</span>}
                                </p>
                            ) : null
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};