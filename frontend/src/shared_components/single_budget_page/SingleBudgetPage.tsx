import { BudgetItem } from "@/shared_components/budget_item/BudgetItem";
import { BudgetTracker } from "@/shared_components/budget_tracker/BudgetTracker";
import { NewItemForm } from "@/shared_components/new_item_form/NewItemForm";
import { Button } from "primereact/button";
import { useEffect, useState } from "react";
import styles from "./SingleBudgetPage.module.css";
import { ISingleBudgetPageProps } from "./ISingleBudgetPageProps";
import btnStyles from "../../shared_styles/ButtonStyles.module.css";
import { IBudgetItem } from "@/types/IBudgetItem";
import { HttpGetService } from "@/services/HttpGetService";

export const SingleBudgetPage = (props: ISingleBudgetPageProps) => {
  const { toggleBudgetMenu, selectedBudget } = props;
  const [isCreating, setIsCreating] = useState<Boolean>(false);
  const [budgetItems, setBudgetItems] = useState<IBudgetItem[]>(
    selectedBudget.budgetItems
  );
  const [availableFunds, setAvailableFunds] = useState<number>(0);
  const [shouldRefetch, setShouldRefetch] = useState<{ refetch: boolean }>({
    refetch: false,
  });

  useEffect(() => {
    calculateRemainingFunds();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const getRelatedBudgetItems = async () => {
      const relatedBudgetItems = await new HttpGetService().getBudgetItems(
        selectedBudget.id
      );
      if (relatedBudgetItems) setBudgetItems(relatedBudgetItems);
    };

    getRelatedBudgetItems();
    calculateRemainingFunds();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shouldRefetch]);

  const handleClose = () => {
    setIsCreating(false);
  };

  const handleRefetch = () => {
    setShouldRefetch({ refetch: true });
  };

  const calculateRemainingFunds = () => {
    let fundsLeft = selectedBudget.funds;
    budgetItems.forEach((item) => (fundsLeft = fundsLeft - item.cost));
    setAvailableFunds(fundsLeft);
  };

  const renderBudgetItems = () => {
    return budgetItems.map((budgetItem) => {
      return <BudgetItem key={budgetItem.id} budgetItemInfo={budgetItem} />;
    });
  };

  return (
    <div className={styles.container}>
      <BudgetTracker
        budgetName={selectedBudget.name}
        currency={selectedBudget.currency}
        remaining={availableFunds}
        total={selectedBudget.funds}
      />
      {isCreating ? (
        <NewItemForm
          closeForm={handleClose}
          selectedBudgetId={selectedBudget.id}
          handleRefetch={handleRefetch}
        />
      ) : (
        <Button
          label="Create new item"
          onClick={() => setIsCreating(true)}
          style={{ marginBottom: "1rem" }}
          className={btnStyles.btnPrimary}
        />
      )}
      <div className={styles.itemContainer}>{renderBudgetItems()}</div>
      <Button
        label={"To budgets menu"}
        onClick={() => toggleBudgetMenu(true)}
        style={{ marginTop: "2rem" }}
        className={btnStyles.btnPrimary}
      />
    </div>
  );
};
