import { BudgetPage } from "@/shared_components/budget_page/BudgetPage";
import { NewBudgetForm } from "@/shared_components/new_budget_form/NewBudgetForm";
import { SingleBudgetPage } from "@/shared_components/single_budget_page/SingleBudgetPage";
import { useEffect, useState } from "react";

export const MainAppPage = () => {
  const [isBudgetMenu, setIsBudgetMenu] = useState<Boolean>(true);

  const fetchApi = async () => {
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
  };
  // useEffect(() => {

  //   fetchApi();
  // }, []);

  const togglePageView = (toggle: Boolean) => {
    setIsBudgetMenu(toggle);
  };

  return (
    <>
      {isBudgetMenu ? (
        <BudgetPage toggleBudgetMenu={togglePageView} />
      ) : (
        <SingleBudgetPage toggleBudgetMenu={togglePageView} />
      )}
      <button onClick={fetchApi}>bla</button>
    </>
  );
};
