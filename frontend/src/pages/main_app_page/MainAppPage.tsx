import { HttpService } from "@/services/httpService";
import { BudgetPage } from "@/shared_components/budget_page/BudgetPage";
import { SingleBudgetPage } from "@/shared_components/single_budget_page/SingleBudgetPage";
import { useState } from "react";

export const MainAppPage = () => {
  const [isBudgetMenu, setIsBudgetMenu] = useState<Boolean>(true);

  const togglePageView = (toggle: Boolean) => {
    setIsBudgetMenu(toggle);
  };

  const performCalls = async () => {
    const service = new HttpService();
    service.fetchCurrencies();
  };

  return (
    <>
      {isBudgetMenu ? (
        <BudgetPage toggleBudgetMenu={togglePageView} />
      ) : (
        <SingleBudgetPage toggleBudgetMenu={togglePageView} />
      )}
      <button onClick={performCalls}>bla</button>
    </>
  );
};
