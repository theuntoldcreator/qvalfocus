# AI Development Rules

This document outlines the technology stack and development rules for this web application. Please adhere to these guidelines to maintain consistency and quality.

## Tech Stack

This is a modern single-page application (SPA) built with the following technologies:

*   **Vite:** The build tool and development server.
*   **React 18:** The core UI library for building components.
*   **TypeScript:** For static typing to ensure code quality and maintainability.
*   **React Router DOM:** The library for handling client-side routing and navigation.
*   **Tailwind CSS (Optional):** Can be used for utility-first styling to complement the existing CSS.
*   **ESLint & Prettier:** For code linting and formatting.

## Development Rules

1.  **Component-Based Architecture:**
    *   All UI should be broken down into small, reusable components located in `src/components`.
    *   Pages, which are compositions of components, will reside in `src/pages`.
    *   Components should be functional components using React Hooks (`useState`, `useEffect`, etc.).

2.  **Styling:**
    *   Global styles from the original site are located in `src/index.css`.
    *   Utilize responsive design principles, preferably mobile-first.
    *   Avoid using jQuery for any DOM manipulation or styling; use React's state and props to conditionally apply classes.

3.  **JavaScript/TypeScript:**
    *   **No jQuery.** All DOM manipulation and event handling must be done the "React way" using state, props, and event handlers.
    *   **Strict TypeScript.** The `tsconfig.json` is set to `strict: true`. Avoid using the `any` type. Define clear interfaces and types for all props, state, and API data.

4.  **Routing:**
    *   All navigation must be handled by `react-router-dom`.
    *   Use the `<Link>` component for internal navigation instead of `<a>` tags to prevent full-page reloads.
    *   The main routing configuration is in `src/routes/AppRoutes.tsx`.

5.  **File Structure:**
    *   Adhere to the established file structure (`src/components`, `src/pages`, `src/routes`, etc.).
    *   Directory names must be all lower-case. Component file names should use PascalCase (e.g., `Header.tsx`).

6.  **Dependencies:**
    *   All third-party packages must be managed through `package.json`. Do not add libraries via CDN links in `index.html`.

7.  **Forms:**
    *   All forms must be implemented as controlled components using React state.
    *   Client-side validation should be performed before submitting data.

8.  **Assets:**
    *   Static assets like images, icons, and fonts are located in the `/public` directory.