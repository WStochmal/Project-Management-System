import { DraggableComponent } from "@/features/dragAndDrop/DraggableComponent";
import { DroppableComponent } from "@/features/dragAndDrop/DroppableComponent";
import { Card } from "../Card/Card";
import { ColumnProps } from "@/interfaces/column-props";
import style from "./Column.module.css";

export const Column = ({ column }: { column: ColumnProps }) => {
  return (
    <DraggableComponent id={`column-${column.id}`}>
      <DroppableComponent>
        <div className={style.column}>
          <div className={style.column_title}>{column?.title}</div>
          <div className={style.column_cards}>
            {column.cards?.map((card) => (
              <Card key={card.id} card={card} />
            ))}
          </div>
        </div>
      </DroppableComponent>
    </DraggableComponent>
  );
};
