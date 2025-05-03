import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { CategoryProvider } from "./context/category-context.jsx";
import { DateProvider } from "./context/date-context.jsx";
import { AuthProvider } from "./context/auth-context.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <AuthProvider>
        <CategoryProvider>
          <DateProvider>
            <App />
          </DateProvider>
        </CategoryProvider>
      </AuthProvider>
    </Router>
  </StrictMode>
);
