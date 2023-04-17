import { BudgetItem } from "@/shared_components/budget_item/BudgetItem";
import { BudgetTracker } from "@/shared_components/budget_tracker/BudgetTracker";
import { NewItemForm } from "@/shared_components/new_item_form/NewItemForm";
import styles from "./MainPage.module.css";

export const MainPage = () => {
  return (
    <div className={styles.container}>
      <BudgetTracker
        budgetName="Default Budget"
        currency="BGN"
        remaining={100}
        total={100}
      />
      <NewItemForm />
      <BudgetItem name="DefaultItem" value={100} />
    </div>
  );
};
