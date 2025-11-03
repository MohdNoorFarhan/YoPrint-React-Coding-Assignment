# PROMPTS.md

## Purpose

Record of AI prompts used while building the Anime Search App.

### Prompt 1 — App architecture + cancellation

**Prompt:** "Generate a React + TypeScript app architecture for an Anime Search app using Jikan API. Requirements: Redux for state, server-side pagination, instant search with 250ms debounce, cancel in-flight requests if user continues typing, react-router for detail page. Provide file structure and code examples."
**Used for:** Initial plan and example file structure (SearchPage, DetailPage, API helper).

### Prompt 2 — Debounce hook

**Prompt:** "Write a small TypeScript React hook `useDebouncedValue` that debounces a value by 250ms."
**Used for:** Implementing debounced search input.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
