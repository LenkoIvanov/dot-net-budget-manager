import { IBudget } from "@/types/IBudget";

export interface IBudgetPageProps {
  toggleBudgetMenu: (toggle: Boolean) => void;
  handleOpenBudget: (selectedBudget: IBudget) => void;
}
