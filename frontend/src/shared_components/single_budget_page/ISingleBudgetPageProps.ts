import { IBudget } from "@/types/IBudget";

export interface ISingleBudgetPageProps {
  toggleBudgetMenu: (toggle: Boolean) => void;
  selectedBudget: IBudget;
}
