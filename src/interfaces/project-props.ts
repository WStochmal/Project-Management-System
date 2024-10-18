import { ColumnProps } from "./column-props";

export interface ProjectProps {
  id: string;
  title: string;
  description: string;
  status: string;
  created_at: string;
  updated_at: string;
  statuses: ColumnProps[];
}
export interface ProjectContextProps {
  projectData: ProjectProps | null;
  setProjectData: React.Dispatch<React.SetStateAction<ProjectProps | null>>;
}
