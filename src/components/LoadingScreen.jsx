import { useState, useEffect } from "react";
import "../index.css";

export const LoadingScreen = ({ onComplete }) => {
    const lines = [
        "<Booting system... />",
        "<Initializing portfolio OS... />",
        "<Loading innovation module... />",
        "<Ready. />",
    ];

    const [text, setText] = useState("");
    const [lineIndex, setLineIndex] = useState(0);

    useEffect(() => {
        let index = 0;
        let interval;

        const typeLine = () => {
            const fullText = lines[lineIndex];
            interval = setInterval(() => {
                setText(fullText.substring(0, index));
                index++;

                if (index > fullText.length) {
                    clearInterval(interval);

                    // Wait a bit, then move to the next line
                    setTimeout(() => {
                        if (lineIndex < lines.length - 1) {
                            setLineIndex((prev) => prev + 1);
                        } else {
                            // All lines done -> trigger onComplete
                            setTimeout(onComplete, 1000);
                        }
                    }, 800);
                }
            }, 70);
        };

        typeLine();
        return () => clearInterval(interval);
    }, [lineIndex, onComplete]);

    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center text-[#00ffcc] font-mono select-none overflow-hidden">
            {/* CRT flicker overlay */}
            <div className="absolute inset-0 opacity-70 z-0"></div>

            {/* Typewriter text */}
            <div className="relative z-10 mb-6 text-xl sm:text-2xl md:text-3xl font-bold glow-text flicker text-center px-4">
                <span className="transition-opacity duration-500">{text}</span>
                {/* Smaller, less bright cursor for readability */}
                <span className="animate-blink ml-1 text-[#00ffcc] text-2xl sm:text-3xl md:text-4xl">█</span>
            </div>

            {/* Loading bar */}
            <div className="relative z-10 w-[240px] h-[3px] bg-[#002222] rounded overflow-hidden shadow-[0_0_6px_#00ffaa]">
                <div className="w-[40%] h-full bg-[#00ffaa] animate-loading-bar shadow-[0_0_6px_#00ffaa]"></div>
            </div>

            {/* Subtle scan lines */}
            <div
                className="absolute inset-0 pointer-events-none z-20 mix-blend-screen opacity-10"
                style={{
                    background: `repeating-linear-gradient(
              to bottom,
              rgba(0, 255, 204, 0.2) 0px,
              rgba(0, 255, 204, 0.2) 1px,
              transparent 2px,
              transparent 3px
          )`,
                }}
            ></div>
        </div>
    );
};