/**
 * Application Entry Point
 * 
 * Initializes the React application and renders it to the DOM.
 * Uses React 18's createRoot API for concurrent rendering capabilities.
 * 
 * @fileoverview Main entry point for the portfolio application
 */

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Get the root DOM element and create a React root
const rootElement = document.getElementById('root')

if (!rootElement) {
    throw new Error('Root element not found. Ensure index.html contains an element with id="root".')
}

// Render the App component within StrictMode for development warnings
createRoot(rootElement).render(
    <StrictMode>
        <App />
    </StrictMode>
)
