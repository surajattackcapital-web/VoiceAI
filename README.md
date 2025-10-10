# Voice AI for Logistics - Next.js Website

A modern, responsive website for VoiceAI's logistics voice automation platform, built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **Modern Design**: Geometric curved lines theme with dark mode and electric accents
- **Responsive Navigation**: Multi-level dropdown navigation with mobile support
- **SaaS Footer**: Comprehensive footer with links, contact info, and newsletter signup
- **Framer Motion**: Smooth animations and transitions throughout
- **TypeScript**: Full type safety and better development experience
- **Tailwind CSS**: Utility-first CSS framework with custom design tokens

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter, Sora, JetBrains Mono

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── components/          # Reusable React components
│   ├── Layout.tsx      # Main layout wrapper
│   ├── Navigation.tsx  # Navigation bar with dropdowns
│   └── Footer.tsx      # SaaS-style footer
├── pages/              # Next.js pages
│   ├── index.tsx       # Homepage
│   ├── about.tsx       # About page
│   ├── pricing.tsx     # Pricing page
│   ├── demo.tsx        # Demo scheduling page
│   ├── solutions/      # Solutions pages
│   ├── features/       # Features pages
│   ├── integrations/   # Integration pages
│   ├── privacy-policy.tsx
│   └── terms-of-service.tsx
├── styles/
│   └── globals.css     # Global styles and CSS variables
└── tailwind.config.js  # Tailwind configuration
```

## Design System

The website uses a custom design system with:

- **Colors**: Dark theme with electric blue and purple accents
- **Typography**: Inter for body text, Sora for headings
- **Components**: Consistent button styles, cards, and form elements
- **Animations**: Smooth transitions and hover effects

## Navigation Structure

The navigation includes:

- **Home**: Landing page
- **Solutions**: Dispatch automation, driver communications, etc.
- **Features**: AI voicemail, batch dialing, smart IVR, etc.
- **Integrations**: 500+ integrations with popular tools
- **Resources**: Blogs, case studies, comparisons
- **Company**: About us, careers, contact
- **Pricing**: Transparent pricing plans

## Customization

### Colors
Update CSS variables in `styles/globals.css`:
```css
:root {
  --accent-1: #48A8FF;
  --accent-2: #7C4DFF;
  /* ... */
}
```

### Content
- Update page content in individual page files
- Modify navigation items in `components/Navigation.tsx`
- Update footer links in `components/Footer.tsx`

## Deployment

Build the project for production:
```bash
npm run build
```

Start the production server:
```bash
npm start
```

## License

This project is proprietary software for VoiceAI's logistics platform.

## Support

For questions or support, contact the development team.