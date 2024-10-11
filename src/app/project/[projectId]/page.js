"use client";
const ProjectPage = ({ params }) => {
  const { projectId } = params;
  console.log(projectId);

  return (
    <div>
      <h1>Project Page</h1>
    </div>
  );
};
export default ProjectPage;
