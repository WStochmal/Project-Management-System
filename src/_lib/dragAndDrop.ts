import { ProjectProps } from "@/interfaces/project-props";

export const transferData = (
  source: string,
  item: string,
  target: string,
  projectData: ProjectProps,
  setProjectData
): boolean => {
  // console.log("Source:", source, "Item:", item, "Target:", target);
  const itemType = item.split("-")[0]; // card or column

  const sourceId = source.split("-").slice(1).join("-");
  const itemId = item.split("-").slice(1).join("-");
  const targetIdParts = target.split("-");
  const targetId = target.includes("dropBefore")
    ? targetIdParts.slice(1, 3).join("-")
    : targetIdParts.slice(1).join("-"); // extract just target id

  const itemBeforeId = target.includes("dropBefore")
    ? targetIdParts.slice(4).join("-")
    : null; // card id of card before or null

  console.log(
    "Item Type:",
    itemType,
    "Source Id:",
    sourceId,
    "Item Id:",
    itemId,
    "Target Id:",
    targetId,
    "Item Before Id:",
    itemBeforeId
  );

  if (itemType === "card") {
    const sourceColumn = projectData.statuses.find(
      (status) => status.id === sourceId
    );
    const targetColumn = projectData.statuses.find(
      (status) => status.id === targetId
    );
    if (!sourceColumn || !targetColumn) return false;
    const card = sourceColumn.cards.find((card) => card.id === itemId);
    if (!card) return false;
    sourceColumn.cards = sourceColumn.cards.filter(
      (card) => card.id !== itemId
    );
    if (itemBeforeId) {
      const beforeIndex = targetColumn.cards.findIndex(
        (card) => card.id === itemBeforeId
      );
      if (beforeIndex !== -1) {
        targetColumn.cards.splice(beforeIndex, 0, card);
      } else {
        targetColumn.cards.push(card);
      }
    } else {
      targetColumn.cards.push(card);
    }
    console.log("Project Data after transfer:", projectData);
    setProjectData({ ...projectData });
    return true;
  }

  return true;
};
