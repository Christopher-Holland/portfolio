/**
 * RevealOnScroll Component
 * 
 * Higher-order component that adds scroll-triggered reveal animations.
 * Uses Intersection Observer API to detect when element enters viewport.
 * 
 * @component
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components to wrap with reveal animation
 * @returns {JSX.Element} Wrapper div with reveal animation class
 */

import { useRef, useEffect } from "react";

/**
 * RevealOnScroll Component
 * 
 * Wraps children in a container that fades in and slides up when scrolled into view.
 * Adds 'visible' class when element intersects with viewport.
 */
const RevealOnScroll = ({ children }) => {
    // Reference to the wrapper element for intersection observation
    const ref = useRef(null);

    /**
     * Intersection Observer Effect
     * 
     * Observes when the element enters the viewport and adds 'visible' class
     * to trigger CSS animations. Uses threshold and rootMargin for fine-tuned triggering.
     */
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    ref.current?.classList.add("visible");
                }
            },
            { 
                threshold: 0.2,                    // Trigger when 20% of element is visible
                rootMargin: "0px 0px -50px 0px"    // Negative bottom margin for earlier trigger
            }
        );

        // Start observing if ref is available
        if (ref.current) {
            observer.observe(ref.current);
        }

        // Cleanup: disconnect observer on unmount
        return () => observer.disconnect();
    }, []);

    return (
        <div ref={ref} className="reveal">
            {children}
        </div>
    );
};

export default RevealOnScroll;