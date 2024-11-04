import { ProjectContext } from "@/_context/ProjectContext";
import { useContext } from "react";

export const useProjectContext = () => {
  const context = useContext(ProjectContext);
  if (context === undefined) {
    throw new Error(
      "useProjectContext must be used within a ProjectContextProvider"
    );
  }
  return [context.projectData, context.setProjectData] as const;
};
