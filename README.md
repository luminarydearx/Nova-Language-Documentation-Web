# 🌌 Nova Documentation Portal

![Nova Logo](./public/icon_nova.png)

This is the official documentation website for the **Nova Programming Language** — a modern, expressive, space-themed language built on Java 21. This web application serves as the primary gateway for users to learn Nova, read the CLI references, and explore the core language features.

## ✨ Key Features

- **Cosmic Aesthetics**: Deep-space color palettes (`nova-black`, `nova-deep`, `nova-cyan`), glowing neon element overlays (`drop-shadow`), and advanced CSS `@keyframes` (Supernova explosions, float, fade-up, star twinkle) for a stunning visual experience.
- **Dynamic Routing & Navigation**: Modern App Router architecture. Sidebar navigation includes an automated feature interceptor that reroutes any `badge: "Coming Soon"` item to a beautiful dynamic "Under Construction" page.
- **Secure Translation Engine**: Native, client-side, layout-shift-free Google Translate dropdown setup. Secures the user's language selection with Base64 obfusation and LocalStorage salt (`N0v4-S3cur3-L4ng:`) to prevent malicious console manipulations of cookies.
- **Responsive & Premium UI**: Custom scrollbars, glassmorphic cards, terminal-mimicking code blocks (`<CodeBlock />`), and mobile-responsive layouts.
- **Lightning Fast**: Built on Next.js Turbopack with Server Components where applicable, offering instant load times and excellent SEO.

## 🛠️ Tech Stack

- **Framework**: [Next.js v16+ (App Router)](https://nextjs.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Language**: TypeScript
- **Fonts**: Orbitron (Display), DM Sans (Body), JetBrains Mono (Code)

## 📁 Project Structure

```bash
nova-documentation/
├── public/                 # Static assets (icon_nova.png, SVG icons)
├── src/
│   ├── app/                # Next.js 16 App Router
│   │   ├── docs/           # Documentation pages (Routing, Examples, Language specs)
│   │   ├── globals.css     # Global styles, Tailwind @theme, and complex animations
│   │   ├── layout.tsx      # Root layout, font definitions, metadata
│   │   └── page.tsx        # Landing Page (Hero section, Features, Installation)
│   ├── components/         # Reusable React UI Components
│   │   ├── CodeBlock.tsx   # Custom syntax highlighting component
│   │   ├── Footer.tsx      # Global footer
│   │   ├── GoogleTranslate.tsx # Secure translation dropdown logic
│   │   ├── Navbar.tsx      # Top navigation header
│   │   └── Sidebar.tsx     # Contextual documentation sidebar
│   ├── lib/
│   │   └── navigation.ts   # Sidebar definitions & "Coming Soon" interceptor logic
│   └── types.d.ts          # Global TS definitions
```

## 🚀 Getting Started

### Prerequisites

- **Node.js**: v18.0.0 or higher.
- **npm** or **yarn**.

### Installation

1. Navigate to the project directory:

   ```bash
   cd nova-documentation
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Development Server

Start the Next.js development server with Turbopack:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Building for Production

To create an optimized production build:

```bash
npm run build
```

To start the production server:

```bash
npm start
```

## 🌐 Secure Translation Component (`GoogleTranslate.tsx`)

The translation dropdown uses Google's Website Translator but aggressively overwrites its default CSS to eliminate layout shifting (preventing the topmost banner injection or floating buttons).
Language continuity is handled securely:

- Selections are stored locally and obfuscated with a salt.
- The component forcefully overwrites raw document cookies upon mismatch, essentially locking out users attempting to send invalid payload injections via the `googtrans` cookie in the developer console.

## 📄 License & Attribution

Designed and developed by **Luminar** for the Nova Programming Language project.

---

> _"The universe compiles in Nova."_
