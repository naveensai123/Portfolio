# Naveen Sai — Portfolio

This repository contains my personal developer portfolio. It presents my background, technical skills, selected projects, education, and ways to get in touch.

The portfolio is designed with a backend-first focus and a clean, responsive interface. It includes smooth scrolling, motion effects, project highlights, a downloadable resume, and links to my professional profiles.

## What is included

- Hero section with a short introduction and availability status
- About section describing my background and development interests
- Selected projects:
  - JWT Authentication Service
  - RF–DC Rectifier
- Skills grouped by languages, backend technologies, tools, and strengths
- Education and certification timeline
- Contact section with email, phone, GitHub, and LinkedIn links
- Local profile photo and resume files
- Optional Express API for sending contact messages by email

## Tech stack

### Frontend

- React
- Vite
- Framer Motion
- Lenis
- Lucide React
- CSS

### Backend

- Node.js
- Express
- CORS
- Nodemailer
- Gmail SMTP

## Project structure

```text
naveen-portfolio/
├── frontend/
│   ├── public/
│   │   ├── portrait.jpg
│   │   └── resume.pdf
│   └── src/
│       ├── App.jsx
│       ├── App.css
│       ├── contact.css
│       ├── index.css
│       └── main.jsx
└── backend/
    ├── package.json
    └── server.js
```

## Run the portfolio locally

### 1. Start the frontend

Open a terminal in the `frontend` folder:

```bash
cd frontend
npm install
npm run dev
```

Open the local URL shown by Vite, usually:

```text
http://localhost:5173
```

### 2. Build the frontend for production

```bash
cd frontend
npm run build
```

The production files will be generated in `frontend/dist`.

## Optional: run the contact API

The backend exposes:

- `GET /api` — basic API health response
- `POST /api/contact` — validates a contact message and sends it through Gmail

To run it:

```bash
cd backend
npm install
npm start
```

The API starts on port `8001` by default. You can change the port with the `PORT` environment variable.

Create a `backend/.env` file with:

```env
PORT=8001
EMAIL_USER=your-gmail-address@gmail.com
EMAIL_PASS=your-gmail-app-password
EMAIL_TO=where-you-want-to-receive-messages@example.com
CORS_ORIGINS=http://localhost:5173
```

For Gmail, use an App Password instead of your regular Gmail password. App Passwords require 2-Step Verification to be enabled on the Google account.

The current portfolio UI uses a Gmail compose link and does not submit its contact section to this API.

## Updating the portfolio

- Edit the content, project details, links, and skills in `frontend/src/App.jsx`.
- Edit layout, colors, typography, and responsive styles in `frontend/src/App.css`.
- Replace `frontend/public/portrait.jpg` to update the profile image.
- Replace `frontend/public/resume.pdf` to update the downloadable resume.

The frontend references these files as:

```js
const resumeUrl = "/resume.pdf";
const portraitUrl = "/portrait.jpg";
```

## Author

**N. Naveen Sai**

- GitHub: [naveensai123](https://github.com/naveensai123)
- LinkedIn: [Naveen Sai](https://linkedin.com/in/naveen-sai-76b9b8280)
