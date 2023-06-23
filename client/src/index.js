import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import './index.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
    );




    // "start": "npm run build && (cd server && npm start)"