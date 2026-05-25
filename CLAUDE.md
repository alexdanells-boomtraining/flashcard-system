# Flashcard System

A single-screen web app for learning with flashcards — pre-set decks plus user-created cards.

## Stack

- Plain HTML, CSS, JavaScript — no frameworks
- Runs in Chrome directly from `index.html`

## File structure

- `index.html` — markup and entry point
- `style.css` — all styles
- `app.js` — all logic

## Conventions

- One file per concern: never inline styles in JS, never inline scripts in HTML
- Do not add external libraries or packages without asking first
- Everything stays on one screen — no new pages, no navigation routes
- No build step, no bundler, no package.json
