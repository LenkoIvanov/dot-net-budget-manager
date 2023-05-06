import { IBudget } from "@/types/IBudget";
import { IBudgetItem } from "@/types/IBudgetItem";
import axios from "axios";

export class HttpGetService {
  getBudgets(): Promise<IBudget[] | null> {
    return axios
      .get<IBudget[]>("http://localhost:5018/api/budgets")
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        console.log("Error: ", err);
        return null;
      });
  }

  getBudgetItems(budgetId: number): Promise<IBudgetItem[] | null> {
    return axios
      .get<IBudgetItem[]>(`http://localhost:5018/api/budgetitem/${budgetId}`)
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        console.log("Error: ", err);
        return null;
      });
  }
}
