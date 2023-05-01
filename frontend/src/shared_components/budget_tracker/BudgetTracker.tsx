import { IBudgetTrackerProps } from "./IBudgetTrackerProps";
import styles from "./BudgetTracker.module.css";

export const BudgetTracker = (props: IBudgetTrackerProps) => {
  const { budgetName, currency, total, remaining } = props;

  return (
    <div className={styles.trackerContainer}>
      <h2>
        {budgetName} - {total}
        {currency}
      </h2>
      <h3>
        Remaining - {remaining}
        {currency}
      </h3>
    </div>
  );
};
