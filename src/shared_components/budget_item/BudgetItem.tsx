import { IBudgetItemProps } from "./IBudgetItemProps";
import styles from "./BudgetItem.module.css";
import { MdCreate, MdDelete } from "react-icons/md";

export const BudgetItem = (props: IBudgetItemProps) => {
  const { name, value } = props;

  return (
    <div className={styles.container}>
      <div>
        {name} - {value}
      </div>
      <div className={styles.iconContainer}>
        <MdCreate style={{ cursor: "pointer" }} />
        <MdDelete style={{ cursor: "pointer" }} />
      </div>
    </div>
  );
};
