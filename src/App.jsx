/**
 * Main Application Component
 * 
 * Root component that orchestrates the entire portfolio application.
 * Manages global state for loading screen and mobile menu visibility.
 * 
 * @component
 * @returns {JSX.Element} The main application layout
 */

import React, { useState } from 'react';
// Layout Components
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { MobileMenu } from './components/MobileMenu';
// Page Sections
import { Home } from './components/sections/Home';
import { About } from './components/sections/About';
import { Projects } from './components/sections/Projects';
import { Contact } from './components/sections/Contact';
// Global Styles
import "./index.css";

/**
 * App Component
 * 
 * Main application component that renders all sections and manages
 * application-level state (loading screen and mobile menu).
 */
function App() {
  // State to control loading screen visibility
  const [isLoaded, setIsLoaded] = useState(false);
  
  // State to control mobile menu open/close
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Loading screen shown until onComplete callback is triggered */}
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      
      {/* Main application content with fade-in animation */}
      <div 
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } text-gray-100`}
      >
        {/* Navigation Components */}
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        
        {/* Page Sections */}
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
