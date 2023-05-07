import axios from "axios";

export class HttpPostService {
  postBudget(name: string, funds: number, currency: string): Promise<number> {
    return axios
      .post<number>("http://localhost:5018/api/budgets", {
        name: name,
        funds: funds,
        currency: currency,
      })
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        console.log(err);
        return -1;
      });
  }

  postBudgetItem(
    name: string,
    cost: number,
    budgetId: number
  ): Promise<number> {
    return axios
      .post<number>("http://localhost:5018/api/budgetitem", {
        name: name,
        cost: cost,
        budgetid: budgetId,
      })
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        console.log(err);
        return -1;
      });
  }
}
