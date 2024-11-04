"use client";
import { useEffect } from "react";
import { data as testData } from "@/data/testData";
import { Column } from "../Column/Column";

// styles
import style from "./Board.module.css";
import { useProjectContext } from "@/_hooks/useProjectContext";

export const Board = () => {
  const [projectData, setProjectData] = useProjectContext();

  useEffect(() => {
    if (!projectData && testData && testData.length > 0) {
      setProjectData(testData[0]);
    }
  }, [projectData, setProjectData]);

  if (!projectData) {
    return <div>Loading...</div>;
  }

  return (
    <div className={style.board}>
      {projectData.statuses.map((status) => (
        <Column key={status.id} column={status} />
      ))}
    </div>
  );
};
