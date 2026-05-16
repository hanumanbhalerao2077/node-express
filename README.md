# DevOps Intern Portfolio Dashboard (Node.js + Express + EJS)

Modern responsive portfolio dashboard showcasing DevOps skills with a production-ready Express scaffold.

## Features
- ✅ Landing page with hero + navbar (Bootstrap 5 + dark modern theme)
- ✅ Skills section
- ✅ Projects section with animated cards/buttons
- ✅ DevOps tools section (Docker, Kubernetes, Jenkins, GitHub Actions, Terraform, AWS)
- ✅ Contact page UI
- ✅ Responsive layout
- ✅ Animated/hover effects
- ✅ Health check API route: `GET /api/health`
- ✅ About API route returning JSON: `GET /api/about`
- ✅ EJS templating
- ✅ Security: `helmet`
- ✅ Performance: `compression`
- ✅ Logging: `morgan`
- ✅ CORS enabled
- ✅ Centralized error handling

## Tech Stack
- Node.js
- Express.js
- EJS
- Bootstrap 5 (via CDN)
- Docker
- Docker Compose

## Screenshots
> Add your screenshots here.
- Screenshot 1: Landing page
- Screenshot 2: Projects page
- Screenshot 3: Contact page

## Folder Structure
```
node-express/
│
├── src/
│   ├── routes/
│   │   ├── index.js
│   │   ├── pages.js
│   │   └── api.js
│   ├── views/
│   ├── public/
│   │   ├── css/
│   │   │   └── styles.css
│   │   └── js/
│   │       └── app.js
│   ├── controllers/
│   │   ├── pageController.js
│   │   └── apiController.js
│   └── middleware/
│       └── errorHandlers.js
│
├── views/
│   └── (EJS templates + partials)
│
├── Dockerfile
├── docker-compose.yml
├── .dockerignore
├── .gitignore
├── package.json
├── server.js
└── README.md
```

## Environment Variables
- `PORT` (default: `3000`)
- `CORS_ORIGIN` (default: `*`)
- `NODE_ENV` (set by Docker to `production`)

Create an optional `.env` file for local development.

## Local Setup
### 1) Install dependencies
```bash
npm install
```

### 2) Run in development
```bash
npm run dev
```
Open:
- http://localhost:3000/
- http://localhost:3000/api/health
- http://localhost:3000/about

## Production (Docker)
### Build image
```bash
npm run docker:build
```

### Run container
```bash
npm run docker:run
```

### Docker Compose
```bash
docker compose up --build
```
Open:
- http://localhost:3000/

## Commands
- Development:
  - `npm run dev`
- Production start:
  - `npm start`

## Git Commands (push to GitHub)
```bash
git init
git add .
git commit -m "Initial production-ready Express scaffold"
git branch -M main

git remote add origin <YOUR_GITHUB_REPO_URL>
git push -u origin main
```

