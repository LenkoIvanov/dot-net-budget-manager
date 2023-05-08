import axios from "axios";

export class HttpDeleteService {
  deleteBudget(budgetId: number) {
    return axios
      .delete(`http://localhost:5018/api/budgets/${budgetId}`)
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  }
}
