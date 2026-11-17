# Naveen Sai - Portfolio

## 1. Add your 3 files
Copy from Emergent into `frontend/src/`:
- App.js  -> save as **App.jsx**
- App.css
- contact.css

## 2. Run the website
    cd frontend
    npm install
    npm run dev
Open the link it shows (http://localhost:5173).

## 3. Run the contact backend (new terminal)
    cd backend
    npm install
    copy .env.example to .env and fill it in
    npm start

Gmail App Password: Google Account > Security > turn on 2-Step Verification >
App passwords > create one > paste the 16 letters in EMAIL_PASS.

## 4. Photo and resume (important)
In App.jsx, `portraitUrl` and `resumeUrl` point to Emergent's servers and may stop working.
Download both, put them in `frontend/public/` (portrait.jpg, resume.pdf), then change to:
    const resumeUrl = "/resume.pdf";
    const portraitUrl = "/portrait.jpg";
