<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=2,12,24&height=200&section=header&text=⚛️%20React%20MySQL%20Full%20Stack%20App&fontSize=38&fontColor=ffffff&animation=fadeIn&fontAlignY=38" width="100%"/>

[![React](https://img.shields.io/badge/React-18+-61DAFB?style=for-the-badge&amp;logo=react&amp;logoColor=black)](https://reactjs.org)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&amp;logo=vite&amp;logoColor=white)](https://vitejs.dev)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&amp;logo=node.js&amp;logoColor=white)](https://nodejs.org)
[![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&amp;logo=express&amp;logoColor=white)](https://expressjs.com)
[![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&amp;logo=mysql&amp;logoColor=white)](https://www.mysql.com)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&amp;logo=tailwind-css&amp;logoColor=white)](https://tailwindcss.com)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&amp;logo=javascript&amp;logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License](https://img.shields.io/badge/License-MIT-22c55e?style=for-the-badge)](LICENSE)

---

## 📌 Project Overview

A production-ready **full-stack web application** built with a modern JavaScript ecosystem. The frontend is powered by **React + Vite** with hot module replacement (HMR) for blazing-fast development, styled using **Tailwind CSS**. The backend is a structured **Node.js + Express** REST API following the **MVC (Model-View-Controller)** architecture pattern, connected to a **MySQL** relational database.

This project demonstrates end-to-end full-stack development — from database schema design and RESTful API construction to a dynamic, responsive React UI.

---

## 🏗️ Architecture

```
React (Vite) Frontend  -->  Express REST API  -->  MySQL Database
        ^                          ^
  Tailwind CSS              MVC Pattern
  (Styling)          (Controllers / Models / Routes)
```

---

## 🔄 Application Flow

```
Client Request --> Express Router --> Middleware --> Controller --> Model --> MySQL --> Response --> React UI
```

**1. React Frontend** — Component-based UI, communicates with backend via HTTP/API calls

**2. Express Router** — Defines API endpoints and maps them to controller functions

**3. Middleware** — Handles auth, validation, request parsing, CORS, and error handling

**4. Controller** — Business logic layer; processes requests and calls models

**5. Model** — Data access layer; executes queries against MySQL database

**6. MySQL** — Relational database storing and persisting application data

**7. Utils** — Shared helper functions (response formatters, error handlers, etc.)

---

## 🗂️ Repository Structure

```
ReactProject/
|
+-- src/                    # React frontend source
|   +-- components/         # Reusable UI components
|   +-- pages/              # Page-level components
|   +-- main.jsx            # React app entry point
|
+-- controllers/            # Express controller functions (business logic)
+-- models/                 # Database models (MySQL queries)
+-- routes/                 # API route definitions
+-- middlewares/            # Custom middleware (auth, validation, etc.)
+-- utils/                  # Shared utility functions
+-- public/                 # Static assets
|
+-- server.js               # Express app entry point
+-- index.html              # Vite HTML entry
+-- vite.config.js          # Vite configuration
+-- tailwind.config.js      # Tailwind CSS configuration
+-- eslint.config.js        # ESLint rules
+-- package.json            # Dependencies and scripts
```

---

## 🚀 Quick Start

### Prerequisites

- Node.js `v18+`
- MySQL Server running locally or remotely
- npm or yarn

### 1. Clone the Repository

```bash
git clone https://github.com/ronakrajput8882/ReactProject.git
cd ReactProject
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment

Create a `.env` file in the root directory:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=your_database_name
PORT=5000
```

### 4. Set Up the Database

Import your MySQL schema:

```bash
mysql -u root -p your_database_name < schema.sql
```

### 5. Run the Application

```bash
# Start the Express backend
node server.js

# In a new terminal, start the React frontend
npm run dev
```

The React app runs at `http://localhost:5173` and the API at `http://localhost:5000`.

---

## 🔍 Key Highlights

- **MVC Architecture** — Clean separation of concerns across Controllers, Models, and Routes for a maintainable codebase
- **Vite + HMR** — Lightning-fast development with instant hot module replacement
- **Tailwind CSS** — Utility-first styling for rapid and consistent UI development
- **Middleware Layer** — Centralized request validation, authentication, and error handling
- **MySQL Integration** — Structured relational data storage with a dedicated model layer
- **Modular Structure** — Each layer (routes, controllers, models, utils) is independently organized

---

## 🧠 Key Learnings

- Structuring a full-stack JavaScript project using MVC conventions
- Building RESTful APIs with Express.js and connecting them to a MySQL database
- Managing client-server communication in a React + Node.js monorepo setup
- Configuring Vite for a React app alongside an Express backend
- Implementing reusable middleware for validation, error handling, and auth
- Using Tailwind CSS utility classes for fast, responsive UI development

---

## 🛠️ Tech Stack

| Tool | Purpose |
|:---|:---|
| **React 18** | Frontend UI library |
| **Vite** | Frontend build tool and dev server |
| **Tailwind CSS** | Utility-first CSS framework |
| **Node.js** | JavaScript runtime for the backend |
| **Express.js** | REST API framework |
| **MySQL** | Relational database |
| **ESLint** | Code linting and quality |
| **JavaScript (ES6+)** | Primary language across the stack |

---

### Connect with me

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/ronakrajput8882)
[![Instagram](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://instagram.com/techwithronak)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/ronakrajput8882)

*If you found this useful, please star the repo!*

<img src="https://capsule-render.vercel.app/api?type=waving&amp;color=gradient&amp;customColorList=2,12,24&amp;height=100&amp;section=footer" width="100%"/>
