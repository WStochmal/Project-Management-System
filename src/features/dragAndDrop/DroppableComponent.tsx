import React from "react";

export const DroppableComponent = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <div draggable>{children}</div>;
};
