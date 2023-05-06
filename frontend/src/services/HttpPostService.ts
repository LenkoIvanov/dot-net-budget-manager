import axios from "axios";

export class HttpPostService {
  postBudget(name: string, funds: number, currency: string) {
    axios
      .post("http://localhost:5018/api/budgets", {
        name: name,
        funds: funds,
        currency: currency,
      })
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  }

  postBudgetItem(name: string, cost: number, budgetId: number) {
    axios
      .post("http://localhost:5018/api/budgetitem", {
        name: name,
        cost: cost,
        budgetid: budgetId,
      })
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  }
}
