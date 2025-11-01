/**
 * ESLint Configuration
 * 
 * Linting configuration for code quality and consistency.
 * Configures React-specific rules and modern JavaScript features.
 * 
 * @fileoverview ESLint configuration for portfolio application
 */

import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

/**
 * ESLint Configuration Export
 * 
 * @type {import('eslint').Linter.Config[]}
 */
export default defineConfig([
  // Ignore build output directory
  globalIgnores(['dist']),
  {
    // Apply rules to all JavaScript and JSX files
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,                           // Base recommended rules
      reactHooks.configs['recommended-latest'],        // React Hooks linting rules
      reactRefresh.configs.vite,                       // React Refresh for Vite
    ],
    languageOptions: {
      ecmaVersion: 2020,                               // ES2020 syntax support
      globals: globals.browser,                        // Browser global variables
      parserOptions: {
        ecmaVersion: 'latest',                         // Latest ECMAScript features
        ecmaFeatures: { jsx: true },                   // Enable JSX parsing
        sourceType: 'module',                          // ES modules syntax
      },
    },
    rules: {
      // Allow unused variables that start with uppercase letters (e.g., constants)
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
  },
])
