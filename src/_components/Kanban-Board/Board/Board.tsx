"use client";
import { useState } from "react";
import { data } from "@/data/testData";
import { Column } from "../Column/Column";
import { ProjectProps } from "@/interfaces/project-props";

// styles
import style from "./Board.module.css";

export const Board = ({}) => {
  const [projectData] = useState<ProjectProps>(data[0]);

  return (
    <div className={style.board}>
      {projectData.statuses.map((status) => (
        <Column key={status.id} column={status} />
      ))}
    </div>
  );
};
