import { NewBudgetForm } from "@/shared_components/new_budget_form/NewBudgetForm";
import { SingleBudgetPage } from "@/shared_components/single_budget_page/SingleBudgetPage";
import { useState } from "react";

export const MainAppPage = () => {
  const [isBudgetMenu, setIsBudgetMenu] = useState<Boolean>(true);

  const togglePageView = (toggle: Boolean) => {
    setIsBudgetMenu(toggle);
  };

  return (
    <>
      {isBudgetMenu ? (
        <NewBudgetForm toggleBudgetMenu={togglePageView} />
      ) : (
        <SingleBudgetPage toggleBudgetMenu={togglePageView} />
      )}
    </>
  );
};
