# Drop-Todo

## Overview
Drop-Todo is a simple and efficient task management system that allows users to add, edit, delete, and reorder tasks within three different categories: **To-Do, In Progress, and Done**. Users can drag and drop tasks between these categories, and all changes are saved instantly in the database.

## Live Link

[Drop Todo](comming soooooooooo)

## Features
- **Task Management**: Add, edit, delete, and reorder tasks.
- **Drag & Drop**: Move tasks between categories using an intuitive drag-and-drop interface.
- **Instant Updates**: Changes are saved instantly in the database.
- **Task Categories**:
  - To-Do
  - In Progress
  - Done
- **Task Details**:
  - Title (Required, max 50 characters)
  - Description (Optional, max 200 characters)
  - Timestamp (Auto-generated upon creation)
  - Category (To-Do, In Progress, Done)
- **Real-time Collaboration** (using `socket.io-client` for live updates).
- **Responsive UI** (Designed with Tailwind CSS for a smooth experience on all devices).

## Tech Stack
### Frontend:
- **React.js** - Modern UI framework
- **Vite** - Fast build tool for optimized performance
- **Tailwind CSS** - Styling framework for a sleek UI
- **Dnd Kit** (`@dnd-kit/core`, `@dnd-kit/sortable`) - Drag-and-drop functionality
- **Radix UI** (`@radix-ui/react-checkbox`, `@radix-ui/react-dialog`, etc.) - Modern UI components
- **React Router** - Client-side navigation
- **React Icons** - Icon set for UI elements

### Backend:
- **Node.js & Express.js** - Backend framework for API handling
- **MongoDB** - Database for storing tasks and user data
- **Firebase** - Authentication and real-time updates (Optional)

### Dependencies:
```json
"dependencies": {
  "@dnd-kit/accessibility": "^3.1.1",
  "@dnd-kit/core": "^6.3.1",
  "@dnd-kit/sortable": "^10.0.0",
  "@radix-ui/react-checkbox": "^1.1.4",
  "@radix-ui/react-dialog": "^1.1.6",
  "@radix-ui/react-dropdown-menu": "^2.1.6",
  "@radix-ui/react-label": "^2.1.2",
  "@radix-ui/react-select": "^2.1.6",
  "@radix-ui/react-slot": "^1.1.2",
  "@radix-ui/react-toast": "^1.2.6",
  "@tailwindcss/vite": "^4.0.7",
  "axios": "^1.7.9",
  "class-variance-authority": "^0.7.1",
  "clsx": "^2.1.1",
  "firebase": "^11.3.1",
  "lucide-react": "^0.475.0",
  "react": "^19.0.0",
  "react-dom": "^19.0.0",
  "react-icons": "^5.5.0",
  "react-router": "^7.2.0",
  "socket.io-client": "^4.8.1",
  "tailwind-merge": "^3.0.1",
  "tailwindcss-animate": "^1.0.7"
}
```

## Installation & Setup
### Prerequisites:
- Node.js (v16+ recommended)
- MongoDB (for storing tasks and user data)
- Firebase (if authentication is needed)

### Steps:
1. **Clone the repository:**
   ```sh
   git clone https://github.com/yourusername/drop-todo.git
   cd drop-todo
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Create an `.env` file** in the root directory and add the following:
   ```env
   VITE_FIREBASE_API_KEY=AIzaSyCOuPuwVp-puc-G1ifLP9q-4YKe02_Rxfg
   VITE_FIREBASE_AUTH_DOMAIN=first-firebase-6ac45.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=first-firebase-6ac45
   VITE_FIREBASE_STORAGE_BUCKET=first-firebase-6ac45.firebasestorage.app
   VITE_FIREBASE_MESSAGING_SENDER_ID=246302313819
   VITE_FIREBASE_APP_ID=1:246302313819:web:12a0dde179ae5491201e7e
   VITE_imgbb=ae00074b4be5648f11f638bee28f6e3
   ```
4. **Run the development server:**
   ```sh
   npm run dev
   ```
5. Open `http://localhost:5173` in your browser to use Drop-Todo.

## Live Demo
Check out the live version of Drop-Todo here:
[Live Demo](https://drop-todo.netlify.app/)

## Build & Deployment
To create a production build:
```sh
npm run build
```
To preview the production build:
```sh
npm run preview
```

## Future Enhancements
- **Dark Mode Support**
- **Notifications & Reminders**
- **Task Sharing & Collaboration**
- **Mobile App Integration**
