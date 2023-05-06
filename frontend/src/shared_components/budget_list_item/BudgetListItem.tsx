import { MdDelete } from "react-icons/md";
import { RxEyeOpen } from "react-icons/rx";
import { IBudgetListItemProps } from "./IBudgetListItemProps";
import styles from "./BudgetListItem.module.css";

export const BudgetListItem = (props: IBudgetListItemProps) => {
  const { budgetInfo, handleOpenBudget } = props;

  return (
    <div className={styles.listItemContainer}>
      <span style={{ display: "flex", alignItems: "end" }}>
        {budgetInfo.name}
      </span>
      <div>
        <RxEyeOpen
          style={{ cursor: "pointer", marginRight: "5px" }}
          onClick={() => handleOpenBudget(budgetInfo)}
        />
        <MdDelete style={{ cursor: "pointer" }} />
      </div>
    </div>
  );
};
