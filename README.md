# Visitor Registration App

A React-based web application for registering society visitors, built with Vite and styled with Tailwind CSS. The app allows users to submit visitor details (name, flat number, purpose, mobile number), validates input, stores logs in `localStorage`, and displays submission history with a tabbed interface. Icons from `lucide-react` enhance the UI, and the app is optimized for development and production with Vite's fast build system.

## Features

- **Form Submission**:
  - Fields: Full Name, Flat Number, Purpose of Visit (dropdown: Delivery, Guest, Maintenance, Other), Mobile Number.
  - Client-side validation for 10-digit mobile numbers.
  - Form resets after submission.
- **Tabbed Interface**:
  - **Registration Form**: Input visitor details.
  - **Confirmation**: Displays the last submitted entry with icons for purpose (e.g., `MoreHorizontal` for Other).
  - **History**: Shows all past submissions in a table, stored in `localStorage`.
- **Responsive Design**: Styled with Tailwind CSS for a modern, mobile-friendly UI.
- **Icons**: Uses `lucide-react` for purpose-specific icons (e.g., `Package` for Delivery).
- **Persistent Storage**: Visitor logs persist across sessions via `localStorage`.
- **Fast Development**: Vite with Hot Module Replacement (HMR) for quick feedback.
- **Linting**: ESLint with React Hooks and React Refresh plugins for code quality.

## Prerequisites

- **Node.js**: Version 18 or higher.
- **npm**: Version 8 or higher (included with Node.js).
- **Git**: For cloning the repository.

## Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/Lavavarshney/visitors-registeration
   cd visitor-registration


Install Dependencies:
npm install

This installs all dependencies listed in package.json, including react, tailwindcss, lucide-react, and Vite plugins.

Verify Configuration:

Ensure postcss.config.js and tailwind.config.js are present for Tailwind CSS.
Check vite.config.js for the @tailwindcss/vite plugin.



Running the App

Development Server:
npm run dev


Opens the app at http://localhost:5173 (or another port if 5173 is in use).
Supports Hot Module Replacement for instant updates.


Build for Production:
npm run build


Outputs optimized files to the dist folder.


Preview Production Build:
npm run preview


Serves the production build locally for testing.


Linting:
npm run lint


Runs ESLint to check code quality, using rules from eslint.config.js.



Usage

Access the App:

Open http://localhost:5173 after running npm run dev.


Register a Visitor:

Fill in the form:
Full Name: Any text (required).
Flat Number: Any text (e.g., A-101, required).
Purpose of Visit: Select from Delivery, Guest, Maintenance, or Other.
Mobile Number: Must be exactly 10 digits.


Click Register Visitor.
The form resets, and the Confirmation tab shows the submitted details with an icon for the purpose.


View Confirmation:

The Confirmation tab displays the last submission, including name, flat number, purpose (with icon), mobile, and timestamp.
Click Register Another Visitor to return to the form.


Check History:

Switch to the History tab to see all past submissions in a table.
Entries persist in localStorage and remain across browser sessions.


Clear Logs (Optional):

To clear visitor logs, run in the browser console:
localStorage.removeItem('visitorLogs');


Refresh the page to update the History tab.




Project Structure
visitor-registration/
├── public/
│   └── vite.svg           # Vite favicon
├── src/
│   ├── App.jsx            # Main app component, renders Form
│   ├── Form.jsx           # Visitor registration form component
│   ├── index.css          # Tailwind CSS directives
│   └── main.jsx           # React entry point
├── .gitignore             # Git ignore rules
├── eslint.config.js       # ESLint configuration
├── index.html             # HTML entry point
├── package.json           # Project metadata and dependencies
├── postcss.config.js      # PostCSS configuration for Tailwind
├── README.md              # This file
├── tailwind.config.js     # Tailwind CSS configuration
└── vite.config.js         # Vite configuration

Dependencies
From package.json:
Core

react, react-dom: React 19 for building the UI.
lucide-react: Icon library for purpose icons.
tailwindcss, @tailwindcss/vite, @tailwindcss/postcss: Styling and Vite integration.

Dev Dependencies

vite, @vitejs/plugin-react: Build tool and React plugin.
eslint, eslint-plugin-react-hooks, eslint-plugin-react-refresh: Linting and code quality.
@types/react, @types/react-dom: TypeScript types (optional, for TypeScript users).
globals: Browser globals for ESLint.

Deployment
GitHub

Push to GitHub:
git add .
git commit -m "Update visitor registration app"
git push origin main

Repository: https://github.com/Lavavarshney/visitors-registeration

Ensure .gitignore:

Includes node_modules, dist, and other build artifacts.



Vercel

Import Repository:

Go to vercel.com, sign in, and click New Project.
Import your GitHub repository (Lavavarshney/visitors-registeration).


Configure:

Framework Preset: Vite
Build Command: npm run build
Output Directory: dist
Install Command: npm install (default)


Deploy:

Click Deploy. Vercel provides a live URL (e.g., https://visitor-registration.vercel.app).
Auto-deploys on new commits to the main branch.



Troubleshooting

Form Validation Errors:

Ensure mobile number is exactly 10 digits. Non-numeric input or incorrect length triggers an error.


Icons Not Displaying:

Verify lucide-react is installed (npm install lucide-react).
Check getPurposeIcon in Form.jsx for correct icon mappings.


Tailwind CSS Not Applying:

Confirm @tailwindcss/vite is in vite.config.js.
Ensure src/index.css imports tailwindcss and is included in main.jsx.
Run npm run dev to rebuild styles.


Vite Errors:

If App.css errors persist, ensure no stray imports exist (removed in this setup).
Check postcss.config.js for correct Tailwind and Autoprefixer setup.


Linting Issues:

Run npm run lint to identify ESLint errors.
Fix or ignore specific rules in eslint.config.js if needed.



Credits

Built By: Lavanya Varshney
Tools:
Vite: Build tool.
React: UI library.
Tailwind CSS: Styling framework.
Lucide React: Icon library.


Deployment: Hosted on Vercel.

License
This project is open-source under the MIT License. Feel free to use, modify, and distribute as needed.
© 2025 Building Management System```
