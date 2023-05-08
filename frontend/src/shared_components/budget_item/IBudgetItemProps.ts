import { IBudgetItem } from "@/types/IBudgetItem";

export interface IBudgetItemProps {
  budgetItemInfo: IBudgetItem;
  onDelete: (itemId: number) => void;
  onUpdateInit: (itemInfo: IBudgetItem) => void;
}
