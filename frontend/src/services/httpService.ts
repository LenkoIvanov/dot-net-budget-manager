export class HttpService {
  async fetchCurrencies() {
    try {
      const res = await fetch(`http://localhost:5018/api/currency`, {
        method: "GET",
        mode: "cors",
        headers: { accept: "application/json" },
      });
      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }
}
