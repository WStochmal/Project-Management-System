import { DraggableComponent } from "@/features/dragAndDrop/DraggableComponent";
import { DroppableComponent } from "@/features/dragAndDrop/DroppableComponent";
import { Card } from "../Card/card";

export const Column = ({ column }) => {
  return (
    <DraggableComponent>
      <DroppableComponent>
        <div className="column">
          <div className="column-title">{column.title}</div>
          <div className="column-cards">
            {column.cards.map((card) => (
              <Card key={card.id} card={card} />
            ))}
          </div>
        </div>
      </DroppableComponent>
    </DraggableComponent>
  );
};
