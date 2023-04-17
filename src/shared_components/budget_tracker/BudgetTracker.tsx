import { IBudgetTrackerProps } from "./IBudgetTrackerProps";

export const BudgetTracker = (props: IBudgetTrackerProps) => {
  const { budgetName, currency, total, remaining } = props;

  return (
    <div>
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
