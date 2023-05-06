import { BudgetPage } from "@/shared_components/budget_page/BudgetPage";
import { SingleBudgetPage } from "@/shared_components/single_budget_page/SingleBudgetPage";
import { IBudget } from "@/types/IBudget";
import { useState } from "react";

export const MainAppPage = () => {
  const [isBudgetMenu, setIsBudgetMenu] = useState<Boolean>(true);
  const [selectedBudget, setSelectedBudget] = useState<IBudget>({
    budgetItems: [],
    currency: "",
    funds: 0,
    id: -1,
    name: "",
  });

  const toggleBudgetPageView = (toggle: Boolean) => {
    setIsBudgetMenu(toggle);
  };

  const openSelectedBudget = (budget: IBudget) => {
    setSelectedBudget(budget);
    toggleBudgetPageView(false);
  };

  return (
    <>
      {isBudgetMenu ? (
        <BudgetPage
          toggleBudgetMenu={toggleBudgetPageView}
          handleOpenBudget={openSelectedBudget}
        />
      ) : (
        <SingleBudgetPage
          toggleBudgetMenu={toggleBudgetPageView}
          selectedBudget={selectedBudget}
        />
      )}
    </>
  );
};
