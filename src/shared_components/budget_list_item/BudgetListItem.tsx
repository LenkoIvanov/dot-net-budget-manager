import { MdDelete } from "react-icons/md";
import { IBudgetListItemProps } from "./IBudgetListItemProps";
import styles from "./BudgetListItem.module.css";

export const BudgetListItem = (props: IBudgetListItemProps) => {
  const { name } = props;

  return (
    <div className={styles.listItemContainer}>
      {name}
      <MdDelete style={{ cursor: "pointer" }} />
    </div>
  );
};
