import { IBudget } from "@/types/IBudget";

export interface IBudgetListItemProps {
  budgetInfo: IBudget;
  handleOpenBudget: (selectedBudget: IBudget) => void;
  handleDeleteBudget: (budgetId: number) => void;
}
