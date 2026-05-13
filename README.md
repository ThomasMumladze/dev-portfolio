# 🚀 Space Tourism Website

## Tech Stack

| Tool        | Version  |
| ----------- | -------- |
| Node.js     | v24.12.0 |
| Sass        | 1.99.0   |
| scss        | 0.2.4    |
| axios       | 1.16.0   |
| react-icons | 5.6.0    |

### Prerequisites

Make sure you have **Node.js v24.12.0** installed.

### Installation

Install the required packages:

```bash
npm i sass
npm i scss
npm i axios
npm i react-router
npm i react-icons
```

### Warning

```
> ⚠️ **Do not use** `react-router-dom`
```

### Default Localhost Config

```vite.config.ts
server: {
    open: true, // automatically opens in browser
    host: true,  // accessible on all devices within the same network
}
```

### Editing nGuide

src/
└── assets/
└── data/
├── project.json ← project list
└── skill.json ← skill list

# Customizing Content

The portfolio content is fully editable through simple JSON files, making it easy to keep projects and skills updated without touching the core components. ✨

## Project Configuration

Navigate to:

src/data/project.json

Add, remove, or edit project objects to instantly update the projects section on the website.

## Skill Configuration

Navigate to:

src/data/skill.json

Manage your current technologies, tools, and development stack displayed on the skills section.

## Why This Structure?

Keeping content separated from components makes the portfolio easier to scale, maintain, and personalize. Whether adding a new project at 3AM fueled by caffeine ☕ or replacing an old tech stack, updates stay quick and clean.
