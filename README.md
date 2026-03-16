# 💻 Mosammad's macOS Portfolio

A high-performance, **macOS-inspired** professional portfolio built with **React 18**, **Vite**, and **Tailwind CSS**. This project is a simulated desktop environment designed to showcase technical depth through a window-based UI and modular architecture.

[![Image](https://github.com/user-attachments/assets/b4681791-cd99-46b0-acbc-70f711cf6990)](https://github.com/user-attachments/assets/c68076fd-74f3-4c9c-a8b9-ce27aa3fdc7a)

[**Explore the Live Demo →**](https://m-kabir02.github.io/Professional-Portfolio)


## ✨ System Features

* **Window Management Engine:** Custom logic for draggable, resizable, and layered windows with active-state z-index management.
* **Interactive Dock:** A dynamic, physics-inspired dock for seamless application switching and status tracking.
* **Menu Bar & System Tray:** A functional top-level navigation bar mirroring the macOS menu system.
* **HOC Architecture:** Utilizes Higher-Order Components (`WindowWrapper`) to inject desktop functionality into modular project views.
* **Glassmorphism UI:** Heavily styled with Tailwind CSS to achieve the sleek, translucent "Frosted Glass" aesthetic.



## 🛠️ Tech Stack

| **Frontend** | React.js (Hooks, Context API) |
| **Styling** | Tailwind CSS & Framer Motion (Animations) |
| **Build Tool** | Vite |
| **State** | Centralized Global Store (Context) |
| **Deployment** | GitHub Pages |



## 📂 Project Structure

```text
├── src/
│   ├── components/     # UI Elements (Dock, Navbar, WindowControls)
│   ├── hoc/            # Higher-Order Components (WindowWrapper)
│   ├── store/          # Global state logic (window/task management)
│   ├── constants/      # Static data and configuration
│   ├── assets/         # Optimized images and icons
│   └── App.jsx         # Root application logic
├── package.json        # Subpath import definitions
└── vite.config.js      # Alias & Build configuration
```

## 🛠️ Installation & Local Setup
1. Clone the repository: 'git clone [https://github.com/m-kabir02/Professional-Portfolio.git](https://github.com/m-kabir02/Professional-Portfolio.git)'
2. Install NPM packages: `npm install`
3. Start the development server: `npm run dev`
4. To create a production-ready build of the portfolio: `npm run build`
The output will be located in the dist/ folder, which is ready for deployment.


## 📬 Contact
If you'd like to collaborate or chat about the architecture behind this project, feel free to reach out:
* [GitHub](https://github.com/m-kabir02)
* [LinkedIn](https://www.linkedin.com/in/sadiyak)
* [Email: sxdiyak@gmail.com](mailto:sxdiyak@gmail.com)

Created with ❤️ by Mosammad. If you like this project, feel free to give it a ⭐!
