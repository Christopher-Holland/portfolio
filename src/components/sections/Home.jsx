import "../../index.css";
import RevealOnScroll from "./RevealOnScroll";

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
        <div className="text-center z-10 px-4">
          <h1 className="text-2xl sm:text-xl md:text-3xl font-bold mb-6 glow-text flicker">
            Hi, I'm Christopher Holland
          </h1>
          <p className="text-[#00ffcc]/70 mb-8 text-xl max-w-lg mx-auto">
            I'm a software engineer with a passion for building web applications
            that are both functional and aesthetically pleasing.
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