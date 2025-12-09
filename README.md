# Personal Portfolio

A modern web portfolio built with React, TypeScript, and Tailwind CSS. This project showcases professional experience and skills in a responsive and interactive web application.

## 🚀 Tech Stack

-   **Framework:** [React 19](https://react.dev/)
-   **Build Tool:** [Vite](https://vitejs.dev/)
-   **Language:** [TypeScript](https://www.typescriptlang.org/)
-   **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
-   **Deployment:** Azure Static Web Apps

## 📂 Project Structure

The project is organized as follows:

-   `portfolio/`: Contains the main React application source code.
-   `.github/workflows/`: CI/CD configuration for Azure Static Web Apps.

## 🛠️ Getting Started

### Prerequisites

-   [Node.js](https://nodejs.org/) (Latest LTS recommended)
-   npm (comes with Node.js)

### Installation

1.  Clone the repository:
    ```bash
    git clone <repository-url>
    ```

2.  Navigate to the project directory:
    ```bash
    cd PersonalPortfolio
    ```

3.  Navigate to the application folder and install dependencies:
    ```bash
    cd portfolio
    npm install
    ```

### Running Locally

To start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the port shown in your terminal).

## 📦 Building for Production

To build the application for production:

```bash
npm run build
```

This will compile the TypeScript code and bundle the assets into the `dist` directory, ready for deployment.

## ☁️ Deployment

This project is configured for automated deployment to **Azure Static Web Apps** using GitHub Actions. Any push to the main branch will trigger the workflow defined in `.github/workflows/`.
