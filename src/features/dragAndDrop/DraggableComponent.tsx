import React from "react";

export const DraggableComponent = ({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string;
}) => {
  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.stopPropagation();
    console.log("dragging", id);
    e.dataTransfer.setData("item", id);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };
  return (
    <div draggable onDragStart={handleDragStart} onDragOver={handleDragOver}>
      {children}
    </div>
  );
};
