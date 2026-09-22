# 🔌 Shrinkly Backend API

RESTful API backend for **Shrinkly**, handling URL shortening, instant 302 redirections, atomic click analytics, and user authentication.

Built with **Node.js (ESM)**, **Express 5**, and **MongoDB (Mongoose 9)**.

---

## ⚡ Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment
Create a `.env` file in the `server` directory:
```env
PORT=8000
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/shrinkly?retryWrites=true&w=majority
FRONTEND_URL=http://localhost:3000
BASE_URL=http://localhost:8000
```

### 3. Run Development Server
```bash
npm run dev
```

The server will start on [http://localhost:8000](http://localhost:8000).

---

## 📡 API Endpoints Summary

- `GET /` — Health check endpoint (`"Running Healthy"`).
- `POST /api/url/` — Shorten a long URL (`{ originalUrl: "https://..." }`).
- `GET /:shortCode` — Redirect to original URL (302) and increment click counter.
- `POST /api/url/stats` — Fetch analytics for a short URL (`{ url: "http://localhost:8000/:shortCode" }`).
- `POST /auth/register` — Register a new user account.
- `POST /auth/login` — Login user account.

For full project documentation, architecture, and Docker deployment, refer to the [Root README](../README.md).
