/**
 * LoadingScreen Component
 * 
 * Displays an animated loading screen with typewriter effect and CRT terminal aesthetic.
 * Simulates a boot sequence with sequential text lines and a loading bar animation.
 * 
 * @component
 * @param {Object} props - Component props
 * @param {Function} props.onComplete - Callback function called when loading animation completes
 * @returns {JSX.Element} Loading screen with typewriter animation
 */

import { useState, useEffect } from "react";
import "../index.css";

/**
 * LoadingScreen Component
 * 
 * Creates a terminal-style loading animation that cycles through boot messages
 * using a typewriter effect. Triggers onComplete callback when animation finishes.
 */
export const LoadingScreen = ({ onComplete }) => {
    // Boot sequence messages displayed in sequence
    const lines = [
        "<Booting system... />",
        "<Initializing portfolio OS... />",
        "<Loading innovation module... />",
        "<Ready. />",
    ];

    // State for current displayed text and which line is being typed
    const [text, setText] = useState("");
    const [lineIndex, setLineIndex] = useState(0);

    /**
     * Typewriter Effect Hook
     * 
     * Animates text character by character, then moves to the next line.
     * When all lines are complete, triggers the onComplete callback.
     */
    useEffect(() => {
        let index = 0;
        let interval;

        /**
         * Types out the current line character by character
         */
        const typeLine = () => {
            const fullText = lines[lineIndex];
            
            // Interval to add one character at a time
            interval = setInterval(() => {
                setText(fullText.substring(0, index));
                index++;

                // When line is fully typed, move to next line or complete
                if (index > fullText.length) {
                    clearInterval(interval);

                    // Brief pause before next line or completion
                    setTimeout(() => {
                        if (lineIndex < lines.length - 1) {
                            // Move to next line and reset character index
                            setLineIndex((prev) => prev + 1);
                            index = 0;
                        } else {
                            // All lines complete - trigger callback after delay
                            setTimeout(onComplete, 1000);
                        }
                    }, 800);
                }
            }, 70); // Typing speed: 70ms per character
        };

        typeLine();
        
        // Cleanup: clear interval on unmount or dependency change
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