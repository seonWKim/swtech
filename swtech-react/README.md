# SW Systems (에스더블유테크)

A modern React website for SW Systems, a Korean software development company.

## Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS v4** - Styling
- **React Router v6** - Routing
- **Framer Motion** - Animations
- **Lucide React** - Icons

## Getting Started

### Install dependencies

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── common/          # Logo, Button, Container
│   ├── layout/          # Header, Footer, Layout
│   ├── sections/        # Hero, Notice, Services, About, Contact
│   └── ui/              # ServiceCard, InfoBox, MobileMenu
├── pages/               # HomePage, TermsPage, PrivacyPage, RefundPage, NotFoundPage
├── constants/           # companyInfo, services, navigation
├── styles/              # Tailwind globals
└── assets/              # Static assets
```

## Pages

- `/` - Home page
- `/terms` - Terms of service
- `/privacy` - Privacy policy
- `/refund` - Refund policy
- `/*` - 404 Not found

## Features

- Responsive design with mobile hamburger menu
- Smooth animations and transitions
- Professional SVG logo with code brackets icon
- SEO-optimized with meta tags
- Korean language support (Pretendard font)
