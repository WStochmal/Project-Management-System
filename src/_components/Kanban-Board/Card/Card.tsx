import { DraggableComponent } from "@/features/dragAndDrop/DraggableComponent";
import { CardProps } from "@/interfaces/card-props";
import style from "./Card.module.css";
export const Card = ({ card }: { card: CardProps }) => {
  return (
    <DraggableComponent id={`card-${card.id}`}>
      <div className={style.card}>{card?.title}</div>
    </DraggableComponent>
  );
};
