# Plant Watering App

A simple Next.js application to keep track of your houseplants and their watering schedule. Add new plants with custom intervals, view plant details and last watered time, and mark plants as watered.
## Table of Contents
- [Demo & Mockups](#demo--mockups)
- [Features](#features)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Tech Stack](#tech-stack)

## Demo & Mockups
UI design mockups are located in the `drawings/` folder:

| Screen                     | File                          |
| -------------------------- | ----------------------------- |
| Home (plant list)          | `drawings/home.jpg`           |
| New plant confirmation     | `drawings/confirm.jpg`        |
| Plant details page         | `drawings/details.jpg`        |
| Plant watering screen      | `drawings/add_new.jpg`        |

## Features
- Add plants with a custom watering interval
- Persist plant list in `localStorage`
- View plant details and see the last time it was watered
- Mark plants as watered
- Responsive, minimal UI using Next.js and React Context API

## Getting Started

### Prerequisites
- Node.js (>= 14.x)
- npm or yarn

### Installation
```bash
# clone this repo
git clone <repository-url>
cd plant-watering-app

# install dependencies
npm install
```

### Running in Development
```bash
npm run dev
```
Open http://localhost:3000 in your browser.

### Build & Production
```bash
npm run build
npm start
```

## Project Structure
```
. 
├── components/        # Reusable React components (Navbar, Layout, PlantCard)
├── context/           # React Context for plant state (PlantContext.js)
├── pages/             # Next.js pages and routing
│   ├── add.js
│   ├── index.js
│   ├── new-confirmation.js
│   └── plants/
│       ├── [id].js
│       └── [id]/water.js
├── styles/            # Global and component-specific CSS
├── drawings/          # UI mockup images
├── .gitignore
└── README.md
```

## Available Scripts
In the project directory, you can run:

- `npm run dev` - Start the development server  
- `npm run build` - Build the app for production  
- `npm start` - Start the production server  

## Tech Stack
- [Next.js](https://nextjs.org/) - React framework for server‑side rendering and routing  
- [React](https://reactjs.org/) - UI library  
- [uuid](https://www.npmjs.com/package/uuid) - For generating unique plant IDs  
