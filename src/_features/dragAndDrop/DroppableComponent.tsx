import { useProjectContext } from "@/_hooks/useProjectContext";
import { transferData } from "@/_lib/dragAndDrop";
import React, { useState } from "react";
import style from "./DroppableComponent.module.css"; // Dodaj styl dla efektu przeciągania

export const DroppableComponent = ({
  children,
  id,
}: {
  children?: React.ReactNode;
  id: string;
}) => {
  const [projectData, setProjectData] = useProjectContext();
  const [isDraggingOver, setIsDraggingOver] = useState<string | null>(null);

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDraggingOver(null); // Reset po upuszczeniu
    const data = e.dataTransfer.getData("action");
    const { source, item } = JSON.parse(data);
    const target = e.currentTarget.id;

    transferData(source, item, target, projectData, setProjectData);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDraggingOver(id); // Ustaw ID, nad którym jest przeciąganie
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    setIsDraggingOver(null); // Usuń efekt po opuszczeniu obszaru
  };

  return (
    <div
      draggable
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      id={id}
      // className={"smooth " + isDraggingOver === id ? style.dragOverActive : ""}
      className="smooth"
    >
      {isDraggingOver === id && <div className={style.dragOverIndicator} />}
      {children}
    </div>
  );
};
