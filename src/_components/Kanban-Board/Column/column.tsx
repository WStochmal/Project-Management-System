import { DraggableComponent } from "@/_features/dragAndDrop/DraggableComponent";
import { DroppableComponent } from "@/_features/dragAndDrop/DroppableComponent";
import { Card } from "../Card/Card";
import { ColumnProps } from "@/interfaces/column-props";
import style from "./Column.module.css";
import React from "react";

export const Column = ({ column }: { column: ColumnProps }) => {
  return (
    <DraggableComponent itemId={`column-${column.id}`} sourceId="tttt">
      <DroppableComponent id={`column-${column.id}`}>
        <div className={style.column}>
          <div className={style.column_title}>{column?.title}</div>
          <div className={style.column_cards}>
            {column.cards?.map((card) => (
              <React.Fragment key={card.id}>
                <DroppableComponent
                  id={`column-${column.id}-dropBefore-${card.id}`}
                >
                  <Card card={card} columnId={column.id} />
                </DroppableComponent>
              </React.Fragment>
            ))}
          </div>
        </div>
      </DroppableComponent>
    </DraggableComponent>
  );
};
