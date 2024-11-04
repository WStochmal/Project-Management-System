"use client";
import { Board } from "@/_components/Kanban-Board/Board/Board";
import { AuthContextProvider } from "@/_context/AuthContext";
import { ProjectContextProvider } from "@/_context/ProjectContext";
const ProjectPage = ({ params }) => {
  const { projectId } = params;

  return (
    <ProjectContextProvider>
      <AuthContextProvider>
        <div>
          <h1>Project Page</h1>
          <Board />
        </div>
      </AuthContextProvider>
    </ProjectContextProvider>
  );
};
export default ProjectPage;
