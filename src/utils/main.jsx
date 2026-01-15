import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // Active la gestion de l'URL
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        {/* BrowserRouter doit envelopper App pour que les liens fonctionnent */}
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);