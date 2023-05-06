import { BudgetItem } from "@/shared_components/budget_item/BudgetItem";
import { BudgetTracker } from "@/shared_components/budget_tracker/BudgetTracker";
import { NewItemForm } from "@/shared_components/new_item_form/NewItemForm";
import { Button } from "primereact/button";
import { useEffect, useState } from "react";
import styles from "./SingleBudgetPage.module.css";
import { ISingleBudgetPageProps } from "./ISingleBudgetPageProps";
import btnStyles from "../../shared_styles/ButtonStyles.module.css";
import { IBudgetItem } from "@/types/IBudgetItem";

export const SingleBudgetPage = (props: ISingleBudgetPageProps) => {
  const { toggleBudgetMenu, selectedBudget } = props;
  const [isCreating, setIsCreating] = useState<Boolean>(false);
  const [budgetItems, setBudgetItems] = useState<IBudgetItem[]>([]);
  const [budgetItemsJSX, setBudgetItemsJSX] = useState<JSX.Element[]>([]);
  const [availableFunds, setAvailableFunds] = useState<number>(0);

  useEffect(() => {
    const items = selectedBudget.budgetItems;
    let fundsLeft = selectedBudget.funds;
    items.forEach((item) => (fundsLeft = fundsLeft - item.cost));
    renderBudgetItems(items);
    setAvailableFunds(fundsLeft);
    setBudgetItems(items);
  }, [selectedBudget]);

  const handleClose = () => {
    setIsCreating(false);
  };

  const renderBudgetItems = (allItems: IBudgetItem[]) => {
    const elementItems = allItems.map((budgetItem) => {
      return <BudgetItem key={budgetItem.id} budgetItemInfo={budgetItem} />;
    });
    setBudgetItemsJSX(elementItems);
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
        <NewItemForm closeForm={handleClose} />
      ) : (
        <Button
          label="Create new item"
          onClick={() => setIsCreating(true)}
          style={{ marginBottom: "1rem" }}
          className={btnStyles.btnPrimary}
        />
      )}
      <div className={styles.itemContainer}>{budgetItemsJSX}</div>
      <Button
        label={"To budgets menu"}
        onClick={() => toggleBudgetMenu(true)}
        style={{ marginTop: "2rem" }}
        className={btnStyles.btnPrimary}
      />
    </div>
  );
};
