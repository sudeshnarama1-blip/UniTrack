# UniTrack

**Your semester, in one dashboard.**

UniTrack is a student productivity app that brings attendance, CGPA, assignments and focused study time into one clean dashboard. It works on desktop and phone, and can be installed on a phone's home screen like a regular app.

🔗 **Live app:** https://sudeshnarama1-blip.github.io/UniTrack/
📱 **Android app:** [Download UniTrack.apk](https://github.com/sudeshnarama1-blip/UniTrack/releases/latest/download/UniTrack.apk)

Tap **Try the demo** on the login screen, or sign in with Student ID `2025CS101` and password `unitrack`.

---

## Features

- **Dashboard:** an overview of attendance, current CGPA, study time and upcoming work.
- **Attendance:** subject-wise attendance with progress bars, so it's easy to spot subjects close to the minimum.
- **CGPA tracker:** semester-by-semester SGPA and overall CGPA.
- **Assignments:** tasks by subject with due dates and status (Pending, In Progress, Completed).
- **Focus Mode:** a working 45-minute study timer you can start, pause and reset, plus a checklist of study tasks.
- **Profile:** student details and logout.
- **Works like a mobile app:** bottom tab navigation on phones, installable to the home screen, and opens offline after the first visit.

The current version uses sample data to demonstrate the experience.

## Built with

| Area | Technology |
|---|---|
| UI | React 19, React Router |
| Styling | Tailwind CSS 4 |
| Icons | Lucide |
| Build tool | Vite |
| App layer | Web App Manifest + Service Worker (PWA) |
| Android app | Capacitor, built automatically with GitHub Actions |
| Hosting | GitHub Pages, deployed automatically with GitHub Actions |

## Run it locally

```bash
npm install
npm run dev
```

Then open the address Vite prints (usually http://localhost:5173).

## Deployment

Every push to `main` runs the workflow in `.github/workflows/deploy.yml`, which builds the app and publishes it to GitHub Pages. No manual steps needed.

## What I learned

- Structuring a multi-page React app with reusable components and client-side routing.
- Building responsive layouts with Tailwind that switch from a sidebar on desktop to a bottom tab bar on phones.
- Turning a web app into an installable Progressive Web App.
- Setting up continuous deployment with GitHub Actions.

## Author

**Rama Sudeshna**, B.Tech Computer Science and Engineering, Woxsen University, Hyderabad
