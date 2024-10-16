import React from "react";

export const DraggableComponent = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <div draggable>{children}</div>;
};
