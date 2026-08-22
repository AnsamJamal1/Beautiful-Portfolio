# Beautiful Portfolio

> A modern, interactive personal portfolio for **Ansam Jamal**, designed to showcase skills, projects, and contact details through a polished, responsive experience.

[Live Demo](https://beautiful-portfolio-two.vercel.app/) | [Report a Bug](https://github.com/AnsamJamal1/Beautiful-Portfolio/issues) | [Request a Feature](https://github.com/AnsamJamal1/Beautiful-Portfolio/pulls)

## Overview

This portfolio has a cosmic-inspired visual identity and includes:

- A landing section with a concise introduction and a clear call to action.
- Dedicated About, Skills, Projects, and Contact sections.
- Interactive skill filtering by category: Frontend, Backend, and Tools.
- Light and dark themes, with the selected preference saved in the browser.
- Fully responsive layouts for mobile and desktop screens.
- A contact form with a submission-success notification.

## Tech Stack

| Area | Technologies |
| --- | --- |
| Frontend | React 19, React Router |
| Build tool | Vite |
| Styling | Tailwind CSS 4 |
| Icons | Lucide React |
| Notifications | Radix UI Toast |
| Code quality | ESLint |

## Run Locally

### Prerequisites

- Node.js 18 or later
- npm

### Installation

```bash
git clone https://github.com/AnsamJamal1/Beautiful-Portfolio.git
cd Beautiful-Portfolio
npm install
npm run dev
```

Open the local URL displayed by Vite in your browser—usually `http://localhost:5173`.

## Available Scripts

```bash
# Start the development server
npm run dev

# Create an optimized production build in dist/
npm run build

# Preview the production build locally
npm run preview

# Run ESLint
npm run lint
```

## Project Structure

```text
src/
├── components/       # Page sections and reusable UI components
│   ├── HeroSection.jsx
│   ├── AboutSection.jsx
│   ├── SkillsSection.jsx
│   ├── ProjectsSection.jsx
│   └── ContactSection.jsx
├── pages/            # Application pages
├── hooks/            # Custom hooks, including Toast notifications
├── lib/              # Utility functions
├── App.jsx           # Application routing
└── index.css         # Global styles and custom animations
public/
└── projects/         # Project images
```

## Customization

Make this portfolio your own by updating:

- Personal information and copy in `src/components/`.
- Project data, live URLs, and GitHub links in `ProjectsSection.jsx`.
- Skill categories and proficiency levels in `SkillsSection.jsx`.
- Contact details and social links in `ContactSection.jsx`.
- Global colors and animations in `src/index.css`.

## Deployment

The project is ready to deploy to any Vite-compatible hosting provider, such as Vercel or Netlify. Build the project with:

```bash
npm run build
```

Set the output directory to `dist` in your hosting provider's settings.

## Contact

- Email: [ansamjamal21@gmail.com](mailto:ansamjamal21@gmail.com)
- LinkedIn: [Ansam Jamal](https://www.linkedin.com/in/ansam-jamal-660172288/)
- GitHub: [@AnsamJamal1](https://github.com/AnsamJamal1)

---

Built with care using React and Tailwind CSS.
