import { DraggableComponent } from "@/features/dragAndDrop/DraggableComponent";

export const Card = () => {
  return (
    <DraggableComponent>
      <div className="card">TEST{/* content */}</div>
    </DraggableComponent>
  );
};
