import React from "react";
import style from "./DroppableComponent.module.css";
export const DraggableComponent = ({
  children,
  itemId,
  sourceId,
}: {
  children: React.ReactNode;
  itemId: string;
  sourceId: string;
}) => {
  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.stopPropagation();
    e.dataTransfer.setData(
      "action",
      JSON.stringify({ source: sourceId, item: itemId })
    );
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };
  return (
    <div
      draggable
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      className={"draggableComponent" + style.draggableComponent}
    >
      {children}
    </div>
  );
};
