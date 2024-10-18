import React from "react";

export const DroppableComponent = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    console.log("dropped");
    const data = e.dataTransfer.getData("item");
    console.log(data);
  };
  return (
    <div draggable onDrop={handleDrop}>
      {children}
    </div>
  );
};
