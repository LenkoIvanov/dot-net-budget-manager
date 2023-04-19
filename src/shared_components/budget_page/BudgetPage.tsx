import { Button } from "primereact/button";
import btnStyles from "../../shared_styles/ButtonStyles.module.css";
import { useState } from "react";
import { NewBudgetForm } from "../new_budget_form/NewBudgetForm";
import { IBudgetPageProps } from "./IBudgetPageProps";
import styles from "./BudgetPage.module.css";
import { GiMoneyStack } from "react-icons/gi";

export const BudgetPage = (props: IBudgetPageProps) => {
  const { toggleBudgetMenu } = props;

  const [isCreatingBudget, setIsCreatingBudget] = useState<Boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<Boolean>(true);

  const handleCancelBudgetCreation = () => {
    setIsCreatingBudget(false);
  };

  return (
    <div>
      {isCreatingBudget ? (
        <NewBudgetForm
          toggleBudgetMenu={toggleBudgetMenu}
          toggleOffCreation={handleCancelBudgetCreation}
        />
      ) : (
        <div className={styles.mainContainer}>
          <h3>Create a new budget or choose an existing one</h3>
          <div className={styles.btnContainer}>
            <Button
              label="Open budget list"
              className={btnStyles.btnPrimary}
              onClick={() => setIsModalVisible(true)}
            />
            <Button
              label="Create new budget"
              className={btnStyles.btnPrimary}
              onClick={() => setIsCreatingBudget(true)}
            />
          </div>
          <GiMoneyStack style={{ fontSize: "20rem", color: "slategray" }} />
        </div>
      )}
    </div>
  );
};
