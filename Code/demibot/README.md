# DemiBot Frontend

This is the frontend for the DemiBot application, a sleek and responsive chat interface built with React, TypeScript, and Vite. It communicates with the DemiBot backend to provide a streaming, real-time chat experience.

### Features

*   Sleek, modern UI built with Tailwind CSS.
*   Real-time streaming of AI responses token-by-token.
*   Full Markdown rendering for formatted messages (including code blocks, lists, tables, etc.).
*   "Copy to clipboard" functionality for bot messages (text, markdown, or rich format).
*   Responsive design for both desktop and mobile.

### Prerequisites

*   Node.js (v18.x or newer is recommended)
*   npm (which comes bundled with Node.js)

### Setup and Installation

1.  **Navigate to the Frontend Directory**

    Open a new terminal and change into the frontend directory:
    ```bash
    cd /path/to/your/project/Code/demibot
    ```

2.  **Install Dependencies**

    Install all the necessary npm packages defined in `package.json`.
    ```bash
    npm install
    ```

### Running the Application

1.  **Start the Backend First**

    Before starting the frontend, ensure the **DemiBot Backend** is running. Following its `README`, it should be available at `http://127.0.0.1:8000`.

2.  **Start the Vite Development Server**

    Run the following command to start the frontend application:
    ```bash
    npm run dev
    ```

3.  **Open in Browser**

    The application will now be running and available at `http://localhost:5173`. Open this URL in your web browser to start chatting with DemiBot.

### Project Scripts

*   `npm run dev`: Starts the development server with hot-reloading.
*   `npm run build`: Compiles and bundles the application for production into the `dist` folder.
*   `npm run lint`: Runs ESLint to check for code quality and style issues.
*   `npm run preview`: Starts a local server to preview the production build from the `dist` folder.

### Configuration

The API endpoint is configured in `src/App.tsx`. If you change the backend server's address or port, you will need to update the `API_URL` constant in that file:

```typescript
// /src/App.tsx
const API_URL = "http://127.0.0.1:8000/chat";
```
The current configuration is set up to work with the backend's default settings, so no changes are needed if you followed the backend setup instructions.