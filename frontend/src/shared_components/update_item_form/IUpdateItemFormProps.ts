import { IBudgetItem } from "@/types/IBudgetItem";

export interface IUpdateItemFormProps {
  closeUpdate: () => void;
  budgetItemInfo: IBudgetItem;
  onUpdate: (itemId: number, newName: string, newCost: number) => void;
  availableFunds: number;
}
