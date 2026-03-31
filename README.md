# 🛠️ ProService | High-Conversion Local Service Landing Page

A high-impact, mobile-first React application engineered for the home services industry (Plumbing/HVAC). This project focuses on **Emergency UX**, trust-building through social proof, and high-conversion lead generation.

![Local Service Preview](https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&q=80&w=1000)

## 🚀 Live Demo
[https://local-service-pro-five.vercel.app/]

## 🎯 The "Why": Strategic Design & UX
Unlike a browsing-heavy e-commerce site, a local service site must solve a problem *instantly*. This project demonstrates:
* **The "Thumb-Zone" Navigation:** A sticky navbar with a prominent "Click-to-Call" button, optimized for one-handed mobile use during emergencies.
* **Psychological Color Palette:** Utilizes **Deep Navy** (Trust/Stability) and **Safety Orange** (Urgency/Action) to guide the user's eye directly to the booking funnel.
* **Social Proof Integration:** A dedicated testimonials engine that maps customer reviews to build immediate credibility.

## 🧠 Technical Highlights

### 1. Data-Driven Component Architecture
Instead of hardcoding every section, this app uses modular React components that map over structured data objects (`services.js`, `reviews.js`). 
* **Dynamic SVG Rendering:** Implemented a logic-based icon renderer that injects specific SVG graphics based on the service category.

### 2. Lead Generation & State Management
The booking system is built using **Controlled Components**.
* **React `useState`:** Manages real-time form inputs and validation.
* **"Demo Mode" Logic:** Successfully simulates a backend API handoff. Upon submission, the UI triggers a success state that explains how the data would be dispatched to a technician in a live environment.

### 3. Modern Styling with Tailwind CSS v4
* Utilizes the latest **Tailwind CSS v4** engine for lightning-fast styling.
* Implements complex CSS Grid layouts that transition seamlessly from a 1-column mobile view to a 4-column desktop service menu.

## 🛠️ Tech Stack
* **Framework:** React.js
* **Build Tool:** Vite
* **Styling:** Tailwind CSS v4
* **Deployment:** Vercel

## 💻 Local Setup

1. Clone the repo:
```bash
git clone [https://github.com/YourUsername/local-service-pro.git](https://github.com/YourUsername/local-service-pro.git)