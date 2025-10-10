# README – Sitemap for Voice AI Trucking Website

This document defines the **sitemap** and information architecture (IA) for the **Voice AI for Trucking & Logistics** website.  
Cursor should use this sitemap to scaffold the Next.js App Router structure and create placeholder content for each page.

---

## 1. Core Pages
- `/` — **Home**
- `/pricing` — Pricing
- `/demo` — Book a Demo
- `/about` — About
- `/contact` — Contact
- `/careers` — Careers
- `/legal/privacy` — Privacy Policy
- `/legal/terms` — Terms of Service
- `/status` — Status
- `/docs/[slug]` — Developer Docs

---

## 2. Solutions
Parent: `/solutions`  
- `/solutions/dispatch-automation` — Dispatch Automation  
- `/solutions/driver-communications` — Driver Communications  
- `/solutions/freight-broker-ops` — Freight Broker Ops Automation  
- `/solutions/pod-bol-automation` — POD & BOL Automation  
- `/solutions/logistics-ops` — Logistics Ops Automation  

---

## 3. Features
Parent: `/features`  
- `/features/batch-dialing` — Batch Dialing  
- `/features/smart-ivr` — Smart IVR / Phone Tree  
- `/features/call-routing-queues` — Call Routing & Queues  
- `/features/local-presence` — Local Presence  
- `/features/ai-voicemail` — AI Voicemail & Callbacks  
- `/features/transcription-recording` — Transcription & Recording  
- `/features/qa-analytics` — QA & Analytics  
- `/features/agent-assist` — Agent Assist  

---

## 4. Industries
Parent: `/industries`  
- `/industries/trucking` — Trucking Fleets & Carriers  
- `/industries/freight-brokerage` — Freight Brokerages  
- `/industries/3pl-logistics` — 3PLs & Logistics Providers  
- `/industries/ports-intermodal` — Ports & Intermodal  

---

## 5. Integrations
Parent: `/integrations`  
- `/integrations/telematics` — Telematics & IFTA  
- `/integrations/tms` — TMS & Load Boards  
- `/integrations/carrier-ops` — Carrier Ops & Compliance  

---

## 6. Compliance
- `/compliance/fmcsa-eld-ifta-call-recording` — FMCSA, ELD, IFTA & Call Recording  

---

## 7. Resources
Parent: `/resources`  
- `/blog/[slug]` — Blog  
- `/guides/[slug]` — Guides  
- `/case-studies/[slug]` — Case Studies  
- `/faq` — FAQ  

---

## 8. SEO Notes
- Each page has **one primary keyword** (H1) and **supporting keywords** (H2/H3, FAQ, anchors).  
- Keywords have already been mapped to these routes in `keyword_to_site_routes_updated.csv` and summarized in `registry.json`.  
- Blog backlog is provided in `blog_backlog.csv` for long-tail content.  

---

## 9. Files to Use
- **consolidated_sitemap.json** → JSON hierarchy of this sitemap  
- **registry.json** → page → primary keyword + supporting keywords  
- **keyword_to_site_routes_updated.csv** → full keyword-to-page mapping  
- **blog_backlog.csv** → blog articles backlog  

---

✅ Cursor should use this sitemap to:
1. Scaffold the `/app` directory with the routes above.  
2. Create content placeholders using `registry.json`.  
3. Generate blog pages from `blog_backlog.csv`.  
4. Maintain internal linking across Solutions ↔ Features ↔ Industries.  
