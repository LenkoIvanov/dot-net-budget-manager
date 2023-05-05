import { IBudgetItem } from "./IBudgetItem";

export interface IBudget {
  id: number;
  name: string;
  funds: number;
  currency: string;
  budgetItems: IBudgetItem[];
}
