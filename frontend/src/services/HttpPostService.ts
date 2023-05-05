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
}
