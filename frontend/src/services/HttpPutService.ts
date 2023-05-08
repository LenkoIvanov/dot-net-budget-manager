import { IBudgetItem } from "@/types/IBudgetItem";
import axios from "axios";

export class HttpPutService {
  updateBudgetItem(itemId: number, updatedItem: IBudgetItem) {
    return axios
      .put(`http://localhost:5018/api/budgetitem/${itemId}`, updatedItem)
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  }
}
