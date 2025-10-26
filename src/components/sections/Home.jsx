import "../../index.css";
import RevealOnScroll from "./RevealOnScroll";
import Typewriter from "typewriter-effect";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-start relative text-[#00ffcc] font-mono overflow-hidden"
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
        <div className="text-left sm:text-center z-10 px-10">
          <h1 className="text-3xl sm:text-2xl md:text-4xl font-bold mb-4 glow-text flicker">
            Hi, I'm Christopher Holland
          </h1>

          <div className="text-[#00ffcc]/80 text-xl mb-6 font-mono h-8">
            <Typewriter
              options={{
                strings: [
                  "Software Engineer",
                  "Problem Solver",
                  "System Builder",
                  "Creative Thinker",
                ],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 50,
                pauseFor: 1500,
              }}
            />
          </div>

          <p className="text-[#00ffcc]/70 mb-8 text-lg max-w-lg mx-auto sm:mx-auto">
            I build thoughtful, efficient software with a focus on clarity, precision,
            and real-world impact. Clean code. Purposeful design. Reliable results.
          </p>

          <div className="flex justify-center space-x-4">
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
      </RevealOnScroll>
    </section>
  );
};