<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>My Blog Home</title>
  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: 'Segoe UI', sans-serif;
      background: linear-gradient(to right, #f3f4f6, #e5e7eb);
      color: #333;
    }

    header {
      background: linear-gradient(to right, #3b82f6, #6366f1);
      padding: 25px 0;
      text-align: center;
      color: white;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    }

    header h1 {
      font-size: 32px;
      margin-bottom: 10px;
    }

    nav {
      margin-top: 10px;
    }

    nav a {
      color: #fff;
      text-decoration: none;
      margin: 0 15px;
      font-weight: 600;
      font-size: 16px;
      transition: color 0.3s;
    }

    nav a:hover {
      color: #fffb7d;
    }

    .container {
      max-width: 1200px;
      margin: 40px auto;
      padding: 0 20px;
    }

    h2 {
      text-align: center;
      font-size: 28px;
      margin-bottom: 40px;
      color: #374151;
    }

    .blog-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 30px;
    }

    .blog-card {
      background: white;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
      display: flex;
      flex-direction: column;
      transition: transform 0.3s, box-shadow 0.3s;
    }

    .blog-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 24px rgba(0, 0, 0, 0.15);
    }

    .blog-card img {
      width: 100%;
      height: 180px;
      object-fit: cover;
    }

    .blog-content {
      padding: 20px;
      flex-grow: 1;
    }

    .blog-title {
      font-size: 20px;
      margin-bottom: 12px;
      color: #111827;
    }

    .blog-summary {
      font-size: 15px;
      line-height: 1.5;
      margin-bottom: 20px;
      color: #4b5563;
    }

    .read-more {
      text-decoration: none;
      background: #10b981;
      color: white;
      padding: 10px 16px;
      border-radius: 6px;
      font-weight: bold;
      display: inline-block;
      transition: background 0.3s;
    }

    .read-more:hover {
      background: #059669;
    }

    footer {
      background: #1f2937;
      color: #d1d5db;
      text-align: center;
      padding: 20px 10px;
      margin-top: 60px;
      font-size: 14px;
    }
  </style>
</head>
<body>

  <header>
    <h1>Blog</h1>
    <nav>
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Blog</a>
      <a href="#">Contact</a>
    </nav>
  </header>

  <div class="container">
    <h2>Latest Blog Posts</h2>
    <div class="blog-grid">

      <!-- Blog 1 -->
      <div class="blog-card">
        <img src="https://i.ytimg.com/vi/1Rs2ND1ryYc/maxresdefault.jpg" alt="Blog 1">
        <div class="blog-content">
          <h3 class="blog-title">The Future of Web Development</h3>
          <p class="blog-summary">Explore how modern frameworks like Next.js and tools like Tailwind CSS are shaping the next generation of web apps.</p>
          <a href="blog1.html" class="read-more">Read More</a>
        </div>
      </div>

      <!-- Blog 2 -->
      <div class="blog-card">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQKDkW6Irk6pvAXWLRa6jZe0RStRumZ74K3g&s" alt="Blog 2">
        <div class="blog-content">
          <h3 class="blog-title">Why You Should Learn to Code in 2025</h3>
          <p class="blog-summary">Coding is not just for developers. Learn how coding can improve your productivity and open new opportunities.</p>
          <a href="blog2.html" class="read-more">Read More</a>
        </div>
      </div>

      <!-- Blog 3 -->
      <div class="blog-card">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvkUFmp5jSF-DhrD5102bzHU7RbidetfqYfA&s" alt="Blog 3">
        <div class="blog-content">
          <h3 class="blog-title">Understanding AI: A Beginner’s Guide</h3>
          <p class="blog-summary">Get started with artificial intelligence. Learn key concepts, how it works, and what it means for your future.</p>
          <a href="blog3.html" class="read-more">Read More</a>
        </div>
      </div>

      <!-- Blog 4 -->
      <div class="blog-card">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYKRpURTbQaCWxrRw8KDNMmsoCAG8urvrHZg&s" alt="Blog 4">
        <div class="blog-content">
          <h3 class="blog-title">The Power of Side Projects</h3>
          <p class="blog-summary">Discover how side projects can boost your resume, creativity, and technical skills. Real tips for developers and creatives.</p>
          <a href="blog4.html" class="read-more">Read More</a>
        </div>
      </div>

      <!-- Blog 5 -->
      <div class="blog-card">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCNukKFusPo-N1SxXC_x2VHXgh5P2ASNiMmQ&s" alt="Blog 5">
        <div class="blog-content">
          <h3 class="blog-title">Top 10 Tools for Remote Work in 2025</h3>
          <p class="blog-summary">Master productivity with the best tools for working from home, freelancing, or managing remote teams.</p>
          <a href="blog5.html" class="read-more">Read More</a>
        </div>
      </div>
      <!-- Blog 6 -->
      <div class="blog-card">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsHxrvF5Q3q4YPXSHcpuzBB_PnAfZx_bT1mQ&s" alt="Blog 5">
        <div class="blog-content">
          <h3 class="blog-title">How to Write a blog.</h3>
          <p class="blog-summary">Master productivity with the best tools for working from home, freelancing, or managing remote teams.</p>
          <a href="blog5.html" class="read-more">Read More</a>
        </div>
      </div>

    </div>
  </div>

  <footer>
    &copy; 2025 My Blog. All rights reserved.
  </footer>

</body>
</html>

# 📚 React 19 Learning Repository

Welcome to the **React 19 Learning Repository** — a place where I document, practice, and master the latest concepts and best practices in **React 19**.

This repo is structured not just for basic learning, but also to build a **production-level understanding** of how modern React apps are developed today.

---

## 🚀 Goals of This Repository

- 🧠 Deeply understand core **React 19** concepts.
- ⚡ Explore and master **new features** like `useOptimistic`, `useActionState`, and **Server Actions**.
- 🏗️ Build real-world, scalable **mini-projects** and **components**.
- 🛠️ Practice writing **industry-standard**, **scalable**, and **type-safe** code.
- 🧹 Maintain clean code using **modern tooling** and **file structures**.
- 🌟 Stay up-to-date with **React's latest patterns** (Server Components, Actions, Async-first rendering).

---

## 📚 Tech Stack

| Technology        | Purpose                                  |
| ------------------ | ---------------------------------------- |
| **React 19**        | Core frontend library                   |
| **Vite** / **Next.js 14** | Development environment and optimizations |
| **TypeScript**     | Type safety and better developer experience |
| **Tailwind CSS**   | Utility-first CSS framework             |
| **ShadCN UI**      | Reusable accessible UI components       |
| **Axios**          | HTTP client for API requests            |
| **React Query**    | Data fetching and caching               |
| **React Router**   | Client-side routing solution            |
| **Framer Motion**  | Animations and transitions              |

---

## 🗂️ Repository Structure

```bash
src/
 ├── basics/               # Core React concepts (JSX, props, state)
 ├── hooks/                # Custom hooks created during learning
 ├── components/           # Common reusable UI components
 ├── projects/             # Mini applications and real-world examples
 ├── advanced/             # Advanced patterns (optimistic UI, server actions)
 ├── services/             # API service handlers (Axios configurations)
 ├── utils/                # Helper functions and utilities
 ├── types/                # Centralized TypeScript types/interfaces
 ├── lib/                  # Third-party or internal libraries/helpers
 ├── constants/            # Constant values and enums
 └── assets/               # Static assets like images, icons
```

Every folder will be organized by feature → scalable when building big apps (industry recommended pattern).

---

## 🛠️ Getting Started

Follow these steps to set up and run the project locally:

```bash
# Clone this repository
git clone https://github.com/your-username/react-19-learning.git

# Navigate to the project folder
cd react-19-learning

# Install project dependencies
npm install

# Start the development server
npm run dev
```

Make sure you have **Node.js v18+** and **npm v9+** installed.

---

## 🧩 Learning Plan (Module Roadmap)

| Module                   | Description                                     | Status |
| ------------------------- | ----------------------------------------------- | ------ |
| JSX & Components          | Write basic components, understand JSX syntax  | ✅     |
| Props & State             | Dynamic component behavior                     | ✅     |
| Event Handling            | Handle DOM events like clicks, input changes   | ✅     |
| Conditional Rendering     | Render UI based on conditions                  | ✅     |
| List Rendering & Keys     | Render dynamic lists and optimize rendering    | ✅     |
| Lifting State Up          | Share state between components                 | ✅     |
| Forms & Controlled Inputs | Handle form inputs properly                   | ✅     |
| Context API Basics        | Manage global state without prop drilling      | ✅     |
| Custom Hooks              | Reusable logic across components               | ✅     |
| Routing (React Router)    | Client-side navigation                         | 🔄     |
| New APIs (useOptimistic, useActionState) | New React 19 patterns         | 🔄     |
| Server Actions & Async Forms | Native form handling at server level         | 🔄     |
| API Integration (Axios)   | Consume and interact with external APIs        | 🔄     |
| State Management (React Query) | Fetch, cache, and sync server data         | 🔄     |
| Animations (Framer Motion)| Animate UI components                         | 🔄     |
| Advanced Concepts (Suspense, Server Components) | Async-first rendering    | 🔄     |
| Project Building          | Build full-stack apps with best practices      | 🔄     |

> 🔄 - In Progress  
> ✅ - Completed

---

## 🏗️ Project Folder Conventions

- **PascalCase** for component and folder names (`ButtonComponent`, `UserProfile`).
- **camelCase** for variables and function names (`handleClick`, `fetchUserData`).
- **snake_case** for file names when needed (`user_service.ts`, `auth_context.ts`).
- Typescript types in separate `types/` folder for easy access.
- `hooks/` only for reusable hooks — not just simple utilities.
- `services/` folder handles **all API communications** centrally.

---

## 📋 Notes and Best Practices Followed

- ✅ Type-safe code using **TypeScript**.
- ✅ Reusable **custom hooks** (`useForm`, `useFetch` etc.).
- ✅ Followed **Atomic Design** for components wherever possible.
- ✅ Code comments and documentation for better understanding.
- ✅ Using **React DevTools** and **VSCode Extensions** like ES7+ Snippets.
- ✅ Folder structure and naming conventions based on **real-world SaaS projects**.

---

## 📈 Progress Tracking

```markdown
### Current Progress
- [x] Basic React 19 setup
- [x] Core JSX and State/Props concepts
- [x] Components and Modularization
- [ ] useOptimistic and Server Actions Practice
- [ ] Form Handling (Client and Server Forms)
- [ ] Routing and Navigation (React Router v7)
- [ ] Advanced React Patterns and Architecture
- [ ] Final mini project deployment
```

---

## 📖 Resources Being Used

- [React 19 Official Release Notes](https://react.dev/blog/2024/04/25/react-19)
- [React Documentation (react.dev)](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [Shadcn UI](https://ui.shadcn.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)

---

## 🧠 How to Contribute (Optional)

- Fork the repo
- Create a new branch: `feature/your-learning-topic`
- Push your updates
- Create a Pull Request (PR)

---

## 📄 License

This project is licensed under the **MIT License** — feel free to learn and contribute.

---

# ✨ Final Thoughts

> "Mastering React isn't just about syntax — it's about thinking declaratively, designing systems, and creating user-centric experiences."

This repository will grow as I keep learning and mastering **React 19**.

Let's build **strong, scalable, and production-ready** React apps together! 🚀
