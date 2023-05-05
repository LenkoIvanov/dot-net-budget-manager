import { IBudget } from "@/types/IBudget";
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
}
