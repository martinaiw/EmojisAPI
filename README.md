# Emoji Search Engine

A high-performance, real-time emoji discovery tool developed with Vanilla JavaScript. This project demonstrates advanced DOM manipulation, asynchronous data handling, and interactive UI/UX design patterns.

---

## Key Features

* **Real-Time Filtering:** Dynamic search functionality that updates the UI instantly as the user types.
* **Deep Search Algorithm:** Matches queries against emoji descriptions, aliases, and metadata tags for high accuracy.
* **3D Interactive Feedback:** Custom CSS animations providing a 360-degree Y-axis rotation when an emoji is clicked.
* **One-Click Copy:** Integrated Clipboard API to automatically copy the selected emoji to the user's clipboard.
* **Toast Notifications:** A non-intrusive UI component that confirms successful copy actions.
* **Responsive Architecture:** A mobile-first grid layout built with CSS Grid and Flexbox for seamless cross-device compatibility.

---

## Technical Implementation

This project follows a structured development approach to ensure clean code and performance:

1.  **Event-Driven Filtering:** Utilizes the `keyup` event to trigger a case-insensitive search across multiple data properties (description, tags, and aliases).
2.  **State Management:** Efficiently re-renders the emoji grid by clearing the container and re-injecting filtered elements without page reloads.
3.  **3D Transforms:** Implements CSS `perspective` and `rotateY` properties to create a sophisticated depth effect during user interaction.
4.  **UX Patterns:** Employs `setTimeout` to manage the lifecycle of temporary UI elements like animations and toast notifications.

---

## Project Structure

* `index.html`: Semantic structure containing the search interface, result grid, and notification portal.
* `style.css`: Modern styling, 3D keyframe animations, and responsive breakpoints.
* `script.js`: Core logic for data rendering, filtering algorithms, and interactive event listeners.

---

## How to Run

1.  Clone this repository to your local environment.
2.  Ensure you have an active internet connection to load the external emoji dataset.
3.  Open `index.html` using a local development server (such as VS Code Live Server).
4.  Search for any keyword to find its corresponding emoji and click to copy.

---
*Developed as part of the JavaScript API Assignment - Focus on UI Consistency and Creative Engagement.*