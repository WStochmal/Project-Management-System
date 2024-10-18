"usec client";
import { ProjectContextProps, ProjectProps } from "@/interfaces/project-props";
import { useState } from "react";
import { createContext } from "react";

export const ProjectContext = createContext<ProjectContextProps | undefined>(
  undefined
);

export const ProjectContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [projectData, setProjectData] = useState<ProjectProps | null>(null);

  return (
    <ProjectContext.Provider value={{ projectData, setProjectData }}>
      {children}
    </ProjectContext.Provider>
  );
};
