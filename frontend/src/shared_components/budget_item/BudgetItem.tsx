import { IBudgetItemProps } from "./IBudgetItemProps";
import styles from "./BudgetItem.module.css";
import { MdCreate, MdDelete } from "react-icons/md";

export const BudgetItem = (props: IBudgetItemProps) => {
  const { budgetItemInfo, onDelete, onUpdateInit } = props;

  return (
    <div className={styles.container}>
      <div>
        {budgetItemInfo.name} - {budgetItemInfo.cost}
      </div>
      <div className={styles.iconContainer}>
        <MdCreate
          style={{ cursor: "pointer" }}
          onClick={() => onUpdateInit(budgetItemInfo)}
        />
        <MdDelete
          style={{ cursor: "pointer" }}
          onClick={() => onDelete(budgetItemInfo.id)}
        />
      </div>
    </div>
  );
};
