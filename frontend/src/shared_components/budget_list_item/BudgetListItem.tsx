import { MdDelete } from "react-icons/md";
import { RxEyeOpen } from "react-icons/rx";
import { IBudgetListItemProps } from "./IBudgetListItemProps";
import styles from "./BudgetListItem.module.css";

export const BudgetListItem = (props: IBudgetListItemProps) => {
  const { budgetInfo, handleOpenBudget, handleDeleteBudget } = props;

  return (
    <div className={styles.listItemContainer}>
      <span style={{ display: "flex", alignItems: "end" }}>
        {budgetInfo.name}
      </span>
      <div className={styles.iconContainer}>
        <RxEyeOpen
          style={{ cursor: "pointer" }}
          onClick={() => handleOpenBudget(budgetInfo)}
        />
        <MdDelete
          style={{ cursor: "pointer" }}
          onClick={() => handleDeleteBudget(budgetInfo.id)}
        />
      </div>
    </div>
  );
};
