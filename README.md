# JEEVANAND R — AWS Cloud Engineer Portfolio

> **Gamified AWS Operator Console & Cloud Infrastructure Portfolio**  
> Inspired by enterprise observability dashboards, server rack mounts, and Amazon Route 53 / IAM architecture.

---

## Live Demo
- **URL**: [https://JEEVANAND-24.github.io/portfolio/](https://JEEVANAND-24.github.io/portfolio/)
- **Live Status**: INSYNC · ap-south-1 (Mumbai)

---

## Technical Features

- **AWS Operator Console Aesthetic**: Dual-pane layout featuring a macOS window header, active system status telemetry, and interactive command tools.
- **Route 53 Hosted Zone Records**: Contact gateway styled as an authentic DNS records table (`A`, `CNAME`, `TXT`) with 1-click clipboard copy.
- **Official AWS Architecture SVG Icons**: Standardized icons for EC2, S3, IAM, CloudWatch, Route 53, EKS, Lambda, WAF, and EventBridge.
- **Eye-Comfort & Reading System**:
  - Soft midnight slate canvas (`#0e141c`) and anti-glare pearl typography (`#e2e8f0`).
  - 4 Dynamic Cool & Calm accent switchers: Glacier Blue, Calm Teal, Soft Sage, and Serene Lavender.
  - Seamless Dark/Light mode toggle.
- **Automated CI/CD**: Fully automated build and deployment to GitHub Pages via GitHub Actions (`.github/workflows/deploy.yml`).

---

## Tech Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend** | React 19, Vite, Framer Motion, React Router (`HashRouter`) |
| **Styling** | Vanilla CSS Design System with custom CSS variables & tokens |
| **Icons** | Custom AWS Architecture SVGs, React Icons (Feather / FontAwesome 6) |
| **Backend API** | Node.js + Express (Contact Dispatcher & Telemetry) |
| **Deployment** | GitHub Actions + GitHub Pages |

---

## Quick Start (Local Development)

### Frontend
```bash
cd frontend
npm install
npm run dev
```
Open `http://localhost:5173` to explore the console.

### Backend (Optional)
```bash
cd backend
npm install
node server.js
```
The API server runs at `http://localhost:3001`.

---

## Author

**JEEVANAND R**  
AWS Cloud Engineer | DevOps | Linux Administration | Site Reliability  
- **Email**: [rjeevanand9632@gmail.com](mailto:rjeevanand9632@gmail.com)  
- **LinkedIn**: [www.linkedin.com/in/jeevanand-r-2001](https://www.linkedin.com/in/jeevanand-r-2001)  
- **GitHub**: [github.com/JEEVANAND-24](https://github.com/JEEVANAND-24)  
- **Location**: Bengaluru, Karnataka, India (ap-south-1)
