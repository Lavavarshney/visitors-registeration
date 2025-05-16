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
   ```


  2. **Install Dependencies**:

    ```bash
    npm install
    ```

  3. **Running the App**:
  
    ```bash
     npm run dev
    ```



Usage

Access the App:

Open http://localhost:5173 after running npm run dev.



1. **Fill in the form**:



2. **Click Register Visitor**.



3. **View Confirmation**:



4. **Check History**:



5. **Clear Logs (Optional)**:






## Project Structure
```
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
```







## License
This project is open-source under the MIT License. Feel free to use, modify, and distribute as needed.
© 2025 Building Management System
