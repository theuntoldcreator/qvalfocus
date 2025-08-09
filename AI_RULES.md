# AI Development Rules

This document outlines the technology stack and development rules for this web application. Please adhere to these guidelines to maintain consistency and quality.

## Tech Stack

This is a static website built with the following technologies:

*   **HTML5:** The core markup language for the site structure.
*   **CSS3:** Used for custom styling, located in `css/style.css`.
*   **Bootstrap 4:** The primary CSS framework for layout, components, and responsive design.
*   **jQuery:** The main JavaScript library for DOM manipulation, event handling, and AJAX.
*   **Font Awesome:** Used for all icons throughout the application.
*   **Owl Carousel:** The designated library for creating carousels and sliders.
*   **Animate.css:** Used for CSS animations on various elements.
*   **Waypoints.js & Counter-Up.js:** Used for triggering animations and counting numbers on scroll.
*   **jqBootstrapValidation.js:** Used for client-side form validation.

## Development Rules

1.  **Styling:**
    *   Utilize Bootstrap classes for layout and components whenever possible.
    *   All custom styles should be added to `css/style.css`. Do not create new CSS files.

2.  **JavaScript:**
    *   Use jQuery for all JavaScript interactions, including DOM manipulation, event handling, and animations.
    *   Custom JavaScript logic should be placed in `js/main.js`.

3.  **Icons:**
    *   Only use icons from the Font Awesome library. The syntax is typically `<i class="fa fa-icon-name"></i>` or `<i class="fab fa-icon-name"></i>`.

4.  **Carousels/Sliders:**
    *   Implement all new carousels using the Owl Carousel plugin. Its initialization and configuration can be found in `js/main.js`.

5.  **Animations:**
    *   For element animations, use the classes provided by `animate.css`.
    *   For scroll-triggered animations, use the Waypoints library.

6.  **Forms:**
    *   All forms must use the `jqBootstrapValidation.js` plugin for client-side validation. The implementation logic is in `mail/contact.js`.

7.  **File Structure:**
    *   Do not alter the existing file structure. Keep HTML files in the root, CSS in `/css`, JavaScript in `/js`, and third-party libraries in `/lib`.

8.  **Dependencies:**
    *   All necessary third-party libraries are already included in the project. Do not add new external libraries or use package managers like npm.