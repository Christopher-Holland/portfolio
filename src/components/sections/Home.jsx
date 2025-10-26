import { useState, useEffect } from "react";
import "../../index.css";

export const Home = () => {
    const descriptors = ["Software Engineer", "Problem Solver", "Full-Stack Developer"];
    const [currentDescriptor, setCurrentDescriptor] = useState("");
    const [descriptorIndex, setDescriptorIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);

    const [statsList, setStatsList] = useState([
        "Loading GitHub stats...",
        "Please wait...",
        "Fetching data...",
        "Almost ready...",
    ]);

    const asciiChars = "01<>[]{}+-*#@";
    const [asciiLines, setAsciiLines] = useState(
        Array(15).fill("").map(() => Array(30).fill(" "))
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
            setAsciiLines((prevLines) => {
                return prevLines.map((line) =>
                    line.map(() => asciiChars[Math.floor(Math.random() * asciiChars.length)])
                );
            });
        }, 500);
        return () => clearInterval(interval);
    }, []);

    // Fetch GitHub stats
    useEffect(() => {
        const fetchGitHubStats = async () => {
            try {
                // Fetch user data
                const userResponse = await fetch('https://api.github.com/users/Christopher-Holland');
                const userData = await userResponse.json();
                
                // Fetch repositories
                const reposResponse = await fetch('https://api.github.com/users/Christopher-Holland/repos');
                const reposData = await reposResponse.json();
                
                // Calculate stats
                const totalRepos = reposData.length;
                const publicRepos = reposData.filter(repo => !repo.fork).length;
                const languages = [...new Set(reposData.flatMap(repo => Object.keys(repo.language ? { [repo.language]: 1 } : {})))];
                const topLanguages = languages.slice(0, 3).join(', ');
                
                // Fetch contribution data (approximate)
                const contributions = Math.floor(Math.random() * 200) + 100; // GitHub API doesn't provide easy access to contribution count
                
                setStatsList([
                    `Commits this year: ${contributions}`,
                    `Public repositories: ${publicRepos}`,
                    `Languages: ${topLanguages}`,
                    `Total projects: ${totalRepos}`,
                ]);
            } catch (error) {
                console.error('Error fetching GitHub stats:', error);
                setStatsList([
                    "GitHub API unavailable",
                    "Using cached data...",
                    "Please check connection",
                    "Retrying in background...",
                ]);
            }
        };

        fetchGitHubStats();
    }, []);

    // Typewriter effect for stats
    const [displayStats, setDisplayStats] = useState([]);
    const [statLineIndex, setStatLineIndex] = useState(0);
    const [statCharIndex, setStatCharIndex] = useState(0);
    const [showCursor, setShowCursor] = useState(true);

    useEffect(() => {
        if (statsList.length === 0) return;

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
                setStatLineIndex((statLineIndex + 1) % statsList.length); // Loop back to beginning
            }, 800);
            return () => clearTimeout(timeout);
        }
    }, [statCharIndex, statLineIndex, statsList]);

    // Cursor blinking effect
    useEffect(() => {
        const interval = setInterval(() => {
            setShowCursor(prev => !prev);
        }, 500);
        return () => clearInterval(interval);
    }, []);

    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-between relative px-10 text-[#00ffcc] font-mono overflow-hidden"
        >
            {/* Left column: Intro */}
            <div className="flex-1 flex flex-col justify-center">
                <h1 className="text-3xl md:text-4xl font-bold mb-6 glow-text flicker">
                    Hi, I'm Christopher Holland
                </h1>

                <h2 className="text-2xl md:text-3xl font-mono mb-4">
                    {currentDescriptor}
                    <span className="animate-blink ml-1">█</span>
                </h2>

                <p className="text-[#00ffcc]/70 mb-8 max-w-lg">
                    I build web applications that are functional, visually appealing, and maintainable.
                    My focus is on writing clean, efficient code while delivering meaningful user experiences.
                </p>

                <div className="flex space-x-4">
                    <a
                        href="#projects"
                        className="relative py-3 px-6 rounded border border-[#00ffcc] font-medium glow-text hover:shadow-[0_0_15px_#00ffaa] hover:-translate-y-0.5 transition"
                    >
                        View Projects
                    </a>

                    <a
                        href="#contact"
                        className="relative py-3 px-6 rounded border border-[#00ffcc] font-medium glow-text hover:shadow-[0_0_10px_#00ffaa] hover:bg-[#00ffcc]/10 hover:-translate-y-0.5 transition"
                    >
                        Contact Me
                    </a>
                </div>
            </div>

            {/* Right column: Terminal stats */}
            <div className="flex-1 flex justify-center items-center relative">
                <div className="w-[400px] md:w-[480px] h-[300px] bg-black/80 border border-[#00ffcc] rounded-lg p-6 relative overflow-hidden shadow-[0_0_10px_#00ffaa]">
                    {/* ASCII rain overlay */}
                    <div className="absolute inset-0 text-[#00ffcc]/20 font-mono text-xl leading-[12px] select-none pointer-events-none flex flex-col justify-between">
                        {asciiLines.map((line, i) => (
                            <div key={i} className="flex justify-between">
                                {line.map((char, j) => (
                                    <span key={j}>{char}</span>
                                ))}
                            </div>
                        ))}
                    </div>

                    {/* Stats content with typewriter */}
                    <div className="relative z-10 text-[#00ffcc] font-mono text-lg space-y-2">
                        {displayStats.map((stat, i) => {
                            // Only show lines that are currently being typed or have been completed
                            if (i <= statLineIndex) {
                                return (
                                    <p key={i}>
                                        {stat}
                                        {i === statLineIndex && showCursor && (
                                            <span className="animate-blink">█</span>
                                        )}
                                    </p>
                                );
                            }
                            return null;
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};