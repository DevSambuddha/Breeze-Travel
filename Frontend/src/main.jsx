import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { CategoryProvider } from "./context/category-context.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <CategoryProvider>
        <App />
      </CategoryProvider>
    </Router>
  </StrictMode>
);
