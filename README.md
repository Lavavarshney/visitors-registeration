# Visitor Registration App

A **React-based** web application for registering society visitors. Built with **Vite** and styled using **Tailwind CSS**, the app allows users to submit visitor details, validates inputs, stores logs in `localStorage`, and displays submission history through a clean **tabbed interface**. Icons from `lucide-react` are used for visual clarity.

---

## Table of Contents

1. [Features](#features)  
2. [Prerequisites](#prerequisites)  
3. [Installation](#installation)  
4. [Usage](#usage)  
5. [Project Structure](#project-structure)  
6. [Dependencies](#dependencies)  
7. [Deployment](#deployment)  
8. [Troubleshooting](#troubleshooting)  
9. [Credits](#credits)  
10. [License](#license)  

---

## Features

- **Form Submission**  
  - Fields: Full Name, Flat Number, Purpose (Delivery, Guest, Maintenance, Other), Mobile Number  
  - Client-side validation (e.g., 10-digit mobile number)  
  - Auto-reset form after submission  

- **Tabbed Interface**  
  - **Registration**: Enter visitor information  
  - **Confirmation**: View the most recent entry (with icon and timestamp)  
  - **History**: See all past entries in a persistent table  

- **Persistent Storage**  
  - Visitor entries are saved using `localStorage` and persist across sessions  

- **Responsive Design**  
  - Optimized for mobile and desktop using **Tailwind CSS**

- **Icons**  
  - Purpose-based icons using `lucide-react` (e.g., `Package`, `User`, `Wrench`)

- **Fast Development**  
  - Built with **Vite** for fast build and HMR (Hot Module Replacement)

- **Code Quality**  
  - Linting setup with ESLint, React Hooks, and Refresh plugins

---

## Prerequisites

- **Node.js**: v18+  
- **npm**: v8+  
- **Git**: For cloning the repository

---

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/Lavavarshney/visitors-registeration
cd visitor-registration
