import { DraggableComponent } from "@/_features/dragAndDrop/DraggableComponent";
import { CardProps } from "@/interfaces/card-props";
import style from "./Card.module.css";
export const Card = ({
  card,
  columnId,
}: {
  card: CardProps;
  columnId: string;
}) => {
  return (
    <DraggableComponent
      itemId={`card-${card.id}`}
      sourceId={`column-${columnId}`}
    >
      <div className={style.card}>{card?.title}</div>
    </DraggableComponent>
  );
};
