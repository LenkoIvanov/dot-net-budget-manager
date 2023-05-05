import { IBudgetItem } from "@/types/IBudgetItem";

export interface IBudgetListItemProps {
  name: string;
  id: number;
  currency: string;
  budgetItems: IBudgetItem[];
  funds: number;
}
