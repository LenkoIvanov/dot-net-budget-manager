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
      <div>
        <>
          <MdCreate className={styles.icon} />
          <MdDelete className={styles.icon} />
        </>
      </div>
    </div>
  );
};
