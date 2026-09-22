# 🌐 DD Shortener Frontend

The frontend client for **DD Shortener**, a modern URL shortening and real-time click tracking web application.

Built with **Next.js 16**, **React 19**, **Tailwind CSS v4**, and **TypeScript**.

---

## ⚡ Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment
Create a `.env.local` file in the `client` directory:
```env
NEXT_PUBLIC_API_URL=http://localhost:8000
NEXT_PUBLIC_BASE_URL=http://localhost:8000
```

### 3. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🏗️ Tech Stack & Highlights

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4 with dark mode slate/violet aesthetic & radial glow effects
- **Icons**: Lucide React
- **HTTP Client**: Axios
- **Type Safety**: TypeScript 5

---

## 📂 Components Structure

- `app/components/layout`: `Navbar`, `Footer`, `BrandMark`
- `app/components/sections`: `HeroSection`, `CheckClickCount`, `HowItWorks`, `BenefitsSection`
- `app/components/url-shortner`: `UrlShortenerForm`, `ShortUrlResult`
- `app/components/click-analytics`: `ClickCountForm`
- `app/lib/urlService.ts`: Axios API services for shortening URLs and querying click counts

For full project documentation, architecture, backend setup, and Docker deployment, refer to the [Root README](../README.md).
