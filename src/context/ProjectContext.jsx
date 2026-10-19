import { createContext, useState } from "react";
import { projectsData } from "../data/project";

export const ProjectContext = createContext(null);

export const ProjectProvider = ({ children }) => {

    const [projects, setProjects] = useState(projectsData);

  return <ProjectContext value={{projects, setProjects}}>{children}</ProjectContext>;
};
