import { BudgetItem } from "@/shared_components/budget_item/BudgetItem";
import { BudgetTracker } from "@/shared_components/budget_tracker/BudgetTracker";
import { NewItemForm } from "@/shared_components/new_item_form/NewItemForm";
import { Button } from "primereact/button";
import { useState } from "react";
import styles from "./MainPage.module.css";

export const MainPage = () => {
  const [isCreating, setIsCreating] = useState<Boolean>(false);

  const callBackPlaceholder = () => {
    setIsCreating(false);
  };

  return (
    <div className={styles.container}>
      <BudgetTracker
        budgetName="Default Budget"
        currency="BGN"
        remaining={100}
        total={100}
      />
      {isCreating ? (
        <NewItemForm closeForm={callBackPlaceholder} />
      ) : (
        <Button
          label="Create new item"
          onClick={() => setIsCreating(true)}
          style={{ marginBottom: "1rem" }}
        />
      )}
      <BudgetItem name="DefaultItem" value={100} />
    </div>
  );
};
