"usec client";
import { ProjectContextProps, ProjectProps } from "@/interfaces/project-props";
import { useMemo, useState } from "react";
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

  // Definition: Memoizing the context value to avoid unnecessary re-renders
  const contextValue = useMemo(
    () => ({ projectData, setProjectData }),
    [projectData, setProjectData]
  );

  return (
    <ProjectContext.Provider value={contextValue}>
      {children}
    </ProjectContext.Provider>
  );
};
