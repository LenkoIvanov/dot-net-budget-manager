import { IBudgetItemProps } from "./IBudgetItemProps";
import styles from "./BudgetItem.module.css";

export const BudgetItem = (props: IBudgetItemProps) => {
  const { name, value } = props;

  return (
    <div className={styles.container}>
      <div>
        {name} - {value}
      </div>
      <div>IconContainer</div>
    </div>
  );
};
