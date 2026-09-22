<div align="center">

# ✂️ Shrinkly

### Modern, High-Performance URL Shortener & Real-Time Click Tracker

Transform lengthy, cluttered URLs into clean, shareable links in seconds — with instant click analytics and zero friction.

[![GitHub license](https://img.shields.io/badge/License-ISC-blue.svg?style=for-the-badge)](LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-16.3-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![Express.js](https://img.shields.io/badge/Express-5.2-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Docker Ready](https://img.shields.io/badge/Docker-Compose-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)

<p align="center">
  <a href="#-features">Features</a> •
  <a href="#-system-architecture">Architecture</a> •
  <a href="#-quick-start">Quick Start</a> •
  <a href="#-api-documentation">API Reference</a> •
  <a href="#-project-structure">Project Structure</a> •
  <a href="#-environment-variables">Environment Variables</a> •
  <a href="#-contributing">Contributing</a>
</p>

---

</div>

## 📖 Overview

**Shrinkly** is a production-grade full-stack URL shortening service engineered with **Next.js 16**, **Express 5**, and **MongoDB**. Designed with a focus on speed, privacy, and minimalist elegance, Shrinkly allows anyone to create short URLs immediately without being forced to create an account, while offering live click analytics and instant 302 redirections.

### Why Shrinkly?
- ⚡ **Zero-Friction Sharing**: Paste and shrink in a single click — no signup wall.
- 🎯 **Reliable & Fast**: Direct HTTP 302 redirections with atomic click-counter updates.
- 📊 **Built-In Analytics**: Track link performance, total hits, and creation timestamp anytime.
- 🎨 **State-of-the-Art Design**: Sleek dark mode, glassmorphism, responsive Bento-grid layout, and smooth micro-interactions.
- 🐳 **One-Command Deployment**: Ready for Docker and Docker Compose orchestration out of the box.

---

## ✨ Features

| Feature | Description |
| :--- | :--- |
| **Instant URL Shortening** | Turn bloated tracking URLs and query parameters into clean, compact links. |
| **Atomic Click Tracking** | Tracks every redirect accurately using MongoDB's `$inc` operator. |
| **Public Click Analytics** | Paste any Shrinkly URL into the search card to view real-time clicks and creation date. |
| **One-Click Clipboard Copy** | Instant copy button with dynamic success feedback and fallback handling. |
| **Strict Protocol Validation** | Sanitizes and ensures URLs use valid `http://` or `https://` schemas. |
| **Modular RESTful Architecture** | Clean separation of concerns with Controllers, Services, Models, and Utilities. |
| **Auth Foundations Built-In** | User model, password hashing (bcryptjs), and registration/login pipeline ready for multi-tenant features. |
| **Dockerized Microservices** | Containerized frontend and backend with lightweight Alpine-based images. |

---

## 🏗️ System Architecture

```mermaid
flowchart TD
    User([User / Browser])
    
    subgraph Frontend ["Frontend (Next.js 16 + React 19)"]
        UI[Tailwind Bento UI]
        ShortenerForm[Shortener Form]
        StatsForm[Click Tracker Form]
    end

    subgraph Backend ["Backend API (Express 5 & Node.js)"]
        Router[Express Router]
        APIController[API Controller]
        Services[URL Service / ShortID Generator]
    end

    subgraph Database ["Database Layer"]
        MongoDB[(MongoDB Atlas / Local)]
    end

    User -->|1. Submit Long URL| ShortenerForm
    ShortenerForm -->|POST /api/url| Router
    Router --> APIController
    APIController --> Services
    Services -->|Save Document| MongoDB
    Services -- Return Short Code -->> User

    User -->|2. Visit Short Link /:shortCode| Router
    Router -->|302 Redirect + Increment Counter| MongoDB
    Router -->|Redirect to Original URL| User

    User -->|3. Query Analytics| StatsForm
    StatsForm -->|POST /api/url/stats| Router
    Router -->|Fetch Click Count & Date| MongoDB
```

---

## 🛠️ Tech Stack

### Frontend (`/client`)
- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- **Library**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **HTTP Client**: [Axios](https://axios-http.com/)

### Backend (`/server`)
- **Runtime**: [Node.js](https://nodejs.org/) (ES Modules)
- **Framework**: [Express.js 5](https://expressjs.com/)
- **Database & ODM**: [MongoDB](https://www.mongodb.com/) via [Mongoose 9](https://mongoosejs.com/)
- **ID Generation**: [ShortID](https://github.com/skorokithakis/shortid)
- **Security & Utils**: [bcryptjs](https://github.com/dcodeIO/bcrypt.js), [cors](https://github.com/expressjs/cors), [dotenv](https://github.com/motdotla/dotenv)

### DevOps & Containerization
- **Container Engine**: [Docker](https://www.docker.com/) (Node 24 Alpine)
- **Orchestration**: [Docker Compose](https://docs.docker.com/compose/)

---

## 📂 Project Structure

```text
shrinkly-UrlShortner/
├── docker-compose.yaml         # Multi-container orchestration config
├── README.md                   # Project documentation
│
├── client/                     # Next.js Frontend Application
│   ├── app/
│   │   ├── components/
│   │   │   ├── click-analytics/
│   │   │   │   └── ClickCountForm.tsx   # Link activity lookup form
│   │   │   ├── layout/
│   │   │   │   ├── BrandMark.tsx        # SVG Logo & Branding
│   │   │   │   ├── Footer.tsx           # Site footer
│   │   │   │   └── Navbar.tsx           # Glassmorphic top navigation
│   │   │   ├── sections/
│   │   │   │   ├── BenefitsSection.tsx  # Bento grid showing advantages
│   │   │   │   ├── CheckClickCount.tsx  # Link activity search section
│   │   │   │   ├── HeroSection.tsx      # Main hero & interactive shortener
│   │   │   │   └── HowItWorks.tsx       # Step-by-step visual workflow
│   │   │   └── url-shortner/
│   │   │       ├── ShortUrlResult.tsx   # Copy & share output card
│   │   │       └── UrlShortenerForm.tsx # Input handling & validation
│   │   ├── lib/
│   │   │   └── urlService.ts            # Client-side Axios API integration
│   │   ├── globals.css                  # Tailwind styles and custom utilities
│   │   ├── layout.tsx                   # Root HTML layout with Geist font
│   │   └── page.tsx                     # Landing page assembler
│   ├── .env.example                     # Frontend environment template
│   ├── Dockerfile                       # Client container build instructions
│   ├── package.json                     # Frontend dependencies & scripts
│   └── tsconfig.json                    # TypeScript compiler configuration
│
└── server/                     # Express.js REST API
    ├── src/
    │   ├── config/
    │   │   └── db.js                    # MongoDB connection lifecycle handler
    │   ├── controllers/
    │   │   ├── apiController.js         # Shorten, redirect, and stats handlers
    │   │   └── authControllers.js       # Register and login controllers
    │   ├── models/
    │   │   ├── urlModel.js              # URL Schema (originalUrl, shortCode, clickCount)
    │   │   └── userModel.js             # User Schema (fullName, email, password)
    │   ├── routes/
    │   │   ├── apiRoutes.js             # API route endpoints
    │   │   └── authRoutes.js            # Auth route endpoints
    │   ├── services/
    │   │   ├── authServices.js          # User auth business logic
    │   │   └── urlServices.js           # URL shortening & click calculation logic
    │   └── utils/
    │       ├── apiErrors.js             # Standardized error structure
    │       ├── apiResponse.js           # Unified JSON response wrapper
    │       ├── extractShortCode.js      # URL parser & origin validator
    │       ├── generateShortCode.js     # ShortID generator wrapper
    │       └── password.js              # bcrypt hashing & verification
    ├── .env.example                     # Backend environment template
    ├── Dockerfile                       # Server container build instructions
    ├── index.js                         # Express application entrypoint
    └── package.json                     # Backend dependencies & scripts
```

---

## 🚀 Quick Start

You can run Shrinkly locally either using **Docker Compose** (recommended) or by running the **client and server manually**.

### Option A: Using Docker Compose (Fastest)

1. **Clone the repository:**
   ```bash
   git clone https://github.com/dipyamandas96/URL-Shortener.git
   cd URL-Shortener
   ```

2. **Set up environment files:**
   ```bash
   # Copy example env files
   cp server/.env.example server/.env
   cp client/.env.example client/.env
   ```
   > ⚠️ Make sure to configure `MONGO_URI` in `server/.env` with your MongoDB connection string (local or MongoDB Atlas).

3. **Start the containers:**
   ```bash
   docker compose up --build
   ```

4. **Access the application:**
   - 🌐 Frontend: [http://localhost:3000](http://localhost:3000)
   - 🔌 Backend API: [http://localhost:8000](http://localhost:8000)

---

### Option B: Manual Local Setup

#### Prerequisites
- [Node.js](https://nodejs.org/) (v20+ recommended)
- [MongoDB](https://www.mongodb.com/) (local instance or free cloud cluster on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))
- Git

---

#### 1. Setup Backend Server

```bash
# Navigate to the server folder
cd server

# Install dependencies
npm install

# Create environment configuration
cp .env.example .env
```

Configure `server/.env`:
```env
PORT=8000
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/shrinkly?retryWrites=true&w=majority
FRONTEND_URL=http://localhost:3000
BASE_URL=http://localhost:8000
```

Start the development server:
```bash
npm run dev
```
Server will start listening on `http://localhost:8000`.

---

#### 2. Setup Frontend Client

Open a new terminal window:

```bash
# Navigate to client folder
cd client

# Install dependencies
npm install

# Create environment configuration
cp .env.example .env.local
```

Configure `client/.env.local`:
```env
NEXT_PUBLIC_API_URL=http://localhost:8000
NEXT_PUBLIC_BASE_URL=http://localhost:8000
```

Start the Next.js development server:
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:3000`.

---

## ⚙️ Environment Variables

### Server (`server/.env`)
| Variable | Required | Default | Description |
| :--- | :---: | :--- | :--- |
| `PORT` | No | `8000` | Port for the Express backend server |
| `MONGO_URI` | **Yes** | — | MongoDB connection string (Atlas or `mongodb://localhost:27017/shrinkly`) |
| `FRONTEND_URL` | **Yes** | `http://localhost:3000` | Allowed origin for CORS headers |
| `BASE_URL` | **Yes** | `http://localhost:8000` | Base URL used to validate and construct short links |

### Client (`client/.env` or `client/.env.local`)
| Variable | Required | Default | Description |
| :--- | :---: | :--- | :--- |
| `NEXT_PUBLIC_API_URL` | **Yes** | `http://localhost:8000` | Endpoint where the frontend sends shortener and stats requests |
| `NEXT_PUBLIC_BASE_URL` | No | `http://localhost:8000` | Display base URL used when presenting generated links |

---

## 📡 API Documentation

### 1. Health Check
Checks if the server is healthy and responding.

- **URL**: `/`
- **Method**: `GET`
- **Response**:
  ```text
  Running Healthy
  ```

---

### 2. Shorten URL
Generates a unique short code for a provided target URL.

- **URL**: `/api/url/`
- **Method**: `POST`
- **Content-Type**: `application/json`
- **Request Body**:
  ```json
  {
    "originalUrl": "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
  }
  ```
- **Response (200 OK)**:
  ```json
  {
    "statusCode": 200,
    "message": "Short URL generated",
    "data": "sK9_2xL",
    "success": true
  }
  ```

---

### 3. Redirect to Destination
Redirects client to the original URL while atomically incrementing the click counter.

- **URL**: `/:shortCode`
- **Method**: `GET`
- **Example**: `GET http://localhost:8000/sK9_2xL`
- **Response**: `302 Found` (redirects to the target URL in browser)

---

### 4. Fetch URL Click Statistics
Retrieves total click count and link creation timestamp for any Shrinkly URL.

- **URL**: `/api/url/stats`
- **Method**: `POST`
- **Content-Type**: `application/json`
- **Request Body**:
  ```json
  {
    "url": "http://localhost:8000/sK9_2xL"
  }
  ```
- **Response (200 OK)**:
  ```json
  {
    "statusCode": 200,
    "message": "URL stats",
    "data": {
      "count": 42,
      "createdAt": "2026-09-23T03:30:00.000Z"
    },
    "success": true
  }
  ```

---

### Standard Response Envelope
All API endpoints follow a consistent JSON response schema:
```json
{
  "statusCode": 200,
  "data": { ... },
  "message": "Success message",
  "success": true
}
```

---

## 🛡️ Database Schema

### `Url` Collection
```typescript
{
  originalUrl: String,   // Required, trimmed destination link
  shortCode:   String,   // Required, unique indexed short string
  clickCount:  Number,   // Default: 0, atomically incremented on visit
  userId:      ObjectId, // Optional reference to User model
  createdAt:   Date,     // Automatic timestamp
  updatedAt:   Date      // Automatic timestamp
}
```

### `User` Collection
```typescript
{
  fullName:    String,   // Min: 3, Max: 50 characters
  email:       String,   // Unique, indexed, trimmed
  password:    String,   // Hashed with bcrypt (salt rounds = 10)
  createdAt:   Date,     // Automatic timestamp
  updatedAt:   Date      // Automatic timestamp
}
```

---

## 🔮 Roadmap

- [ ] **Custom Slugs / Aliases**: Allow users to specify branded short codes (e.g. `shrinkly.me/my-portfolio`).
- [ ] **QR Code Generator**: Instant SVG/PNG QR code generation for every created link.
- [ ] **User Dashboard**: Authenticated analytics panel with graphs, referrers, and geo-data.
- [ ] **Expiration Dates**: Expiring links after a set timeframe or click threshold.
- [ ] **Password Protection**: Restrict sensitive short links with custom passwords.
- [ ] **Rate Limiting**: Protect against spam and denial-of-service abuse with Redis-backed rate limiting.

---

## 🤝 Contributing

Contributions make the open-source community an inspiring place to learn, inspire, and create. Any contributions you make are **greatly appreciated**!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📜 License

This project is licensed under the **ISC License**. Feel free to use and modify it for personal or commercial projects.

---

<div align="center">

Built with ❤️ by [Dipyaman Das](https://github.com/dipyamandas96)

⭐ If you found this project helpful, give it a star on GitHub!

</div>
