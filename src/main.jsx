import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import { ProjectProvider } from "./context/ProjectContext.jsx";
import { AchievementProvider } from "./context/AchievementContext.jsx";
import { ScrollTop } from "./components/ScrollTop.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ProjectProvider>
        <AchievementProvider>
          <ScrollTop />
          <App />
        </AchievementProvider>
      </ProjectProvider>
    </BrowserRouter>
  </StrictMode>,
);
