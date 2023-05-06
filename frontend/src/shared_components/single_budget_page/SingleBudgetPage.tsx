import { BudgetItem } from "@/shared_components/budget_item/BudgetItem";
import { BudgetTracker } from "@/shared_components/budget_tracker/BudgetTracker";
import { NewItemForm } from "@/shared_components/new_item_form/NewItemForm";
import { Button } from "primereact/button";
import { useState } from "react";
import styles from "./SingleBudgetPage.module.css";
import { ISingleBudgetPageProps } from "./ISingleBudgetPageProps";
import btnStyles from "../../shared_styles/ButtonStyles.module.css";

export const SingleBudgetPage = (props: ISingleBudgetPageProps) => {
  const [isCreating, setIsCreating] = useState<Boolean>(false);
  const { toggleBudgetMenu, selectedBudget } = props;

  const callBackPlaceholder = () => {
    setIsCreating(false);
  };

  return (
    <div className={styles.container}>
      <BudgetTracker
        budgetName={selectedBudget.name}
        currency={selectedBudget.currency}
        remaining={selectedBudget.funds}
        total={selectedBudget.funds}
      />
      {isCreating ? (
        <NewItemForm closeForm={callBackPlaceholder} />
      ) : (
        <Button
          label="Create new item"
          onClick={() => setIsCreating(true)}
          style={{ marginBottom: "1rem" }}
          className={btnStyles.btnPrimary}
        />
      )}
      <div className={styles.itemContainer}>
        <BudgetItem name="DefaultItem" value={100} />
        <BudgetItem name="DefaultItem" value={100} />
        <BudgetItem name="DefaultItem" value={100} />
        <BudgetItem name="DefaultItem" value={100} />
        <BudgetItem name="DefaultItem" value={100} />
      </div>
      <Button
        label={"To budgets menu"}
        onClick={() => toggleBudgetMenu(true)}
        style={{ marginTop: "2rem" }}
        className={btnStyles.btnPrimary}
      />
    </div>
  );
};
