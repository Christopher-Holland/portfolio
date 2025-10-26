import "../index.css";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
    const links = [
        { href: "#home", label: "Home" },
        { href: "#about", label: "About" },
        { href: "#projects", label: "Projects" },
        { href: "#contact", label: "Contact" },
    ];

    return (
        <div
            className={`fixed top-0 left-0 w-full z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out
        bg-[rgba(0,0,0,0.85)] backdrop-blur-md overflow-hidden
        ${menuOpen ? "h-screen opacity-100 pointer-events-auto" : "h-0 opacity-0 pointer-events-none"}`}
        >
            {/* CRT scanline overlay */}
            <div
                className="absolute inset-0 pointer-events-none z-0 mix-blend-screen opacity-10"
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

            {/* Close Button */}
            <button
                onClick={() => setMenuOpen(false)}
                className="absolute top-6 right-6 text-[#00ffcc] text-4xl focus:outline-none cursor-pointer glow-text hover:text-[#00ffaa] transition-colors flicker"
                aria-label="Close Menu"
            >
                &times;
            </button>

            {/* Links */}
            {links.map((link) => (
                <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`relative z-10 text-3xl font-mono my-4 transform transition-transform duration-300 glow-text hover:text-[#00ffaa] flicker ${menuOpen ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
                        }`}
                >
                    {link.label}
                </a>
            ))}
        </div>
    );
};