**NotCal****

**A minimalist calculator web app inspired by the Nothing OS dot-matrix aesthetic — featuring a custom dot font, an interactive cursor-reactive background, and light/dark theme support.**

**By Janeyfifi**

**Features**
- Basic arithmetic — addition, subtraction, multiplication, division
- Parentheses support — smart open/close toggle with automatic balancing on calculate
- Percentage (%) calculations
- Clear (C) and Delete (Del) controls
- Dark / Light mode toggle — persists across sessions via localStorage
- Nothing OS–style dot background — a faint dot grid across the page that brightens in a soft spotlight around the cursor
- Responsive layout — scales cleanly across screen sizes

**How It Works**
Calculator Logic (script.js)
appendToDisplay(value) — appends digits/operators to the display
parenthesis() — toggles between ( and ) based on current open/close count
calculateResult() — auto-closes any unbalanced parentheses, then evaluates the expression
percentage() — evaluates the current expression and divides by 100
clearDisplay() / deleteLastCharacter() — reset or trim the display
Theming (style.css)

Colors are defined as CSS custom properties under :root (light mode) and overridden under body.dark-mode (dark mode), so every element — background, buttons, display, text — updates automatically when the dark-mode class is toggled on <body>.

**Dot Background**

A layered ::before / ::after pseudo-element pattern creates a dot grid across the page. The ::after layer is clipped with a CSS mask centered on --mouse-x / --mouse-y, which are updated live via a mousemove listener in script.js — creating a soft glow that follows the cursor.

**Dark Mode Toggle
**
Clicking the toggle button:

Adds/removes the dark-mode class on <body>
Swaps the icon between moon.png (light mode) and sun.png (dark mode)
Saves the preference to localStorage so it persists on reload

License
© 2026 Janeyfifi. All rights reserved.
