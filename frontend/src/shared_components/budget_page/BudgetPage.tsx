import { Button } from "primereact/button";
import btnStyles from "../../shared_styles/ButtonStyles.module.css";
import { useEffect, useRef, useState } from "react";
import { NewBudgetForm } from "../new_budget_form/NewBudgetForm";
import { IBudgetPageProps } from "./IBudgetPageProps";
import styles from "./BudgetPage.module.css";
import { GiMoneyStack } from "react-icons/gi";
import { Dialog } from "primereact/dialog";
import { BudgetListItem } from "../budget_list_item/BudgetListItem";
import { IBudget } from "@/types/IBudget";
import { HttpGetService } from "@/services/HttpGetService";

export const BudgetPage = (props: IBudgetPageProps) => {
  const { toggleBudgetMenu } = props;

  const [isCreatingBudget, setIsCreatingBudget] = useState<Boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [budgetElements, setBudgetElements] = useState<JSX.Element[]>([]);
  const [budgets, setBudgets] = useState<IBudget[]>([]);
  const [shouldRefetch, setShouldRefetch] = useState<{ refetch: boolean }>({
    refetch: true,
  });

  useEffect(() => {
    const fetchBudgets = async () => {
      const budgets = await new HttpGetService().getBudgets();
      if (budgets) setBudgets(budgets);
    };

    fetchBudgets();
  }, [shouldRefetch]);

  useEffect(() => {
    const budgetJsx: JSX.Element[] = budgets.map((budget) => {
      return (
        <BudgetListItem
          key={budget.id}
          name={budget.name}
          id={budget.id}
          currency={budget.currency}
          budgetItems={budget.budgetItems}
          funds={budget.funds}
        />
      );
    });

    setBudgetElements(budgetJsx);
  }, [budgets]);

  const handleCancelBudgetCreation = () => {
    setIsCreatingBudget(false);
  };

  const refetch = () => {
    setShouldRefetch({ refetch: true });
  };

  return (
    <div>
      {isCreatingBudget ? (
        <NewBudgetForm
          toggleBudgetMenu={toggleBudgetMenu}
          toggleOffCreation={handleCancelBudgetCreation}
          triggerRefetch={refetch}
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
          <Dialog
            header={"Existing budgets"}
            visible={isModalVisible}
            onHide={() => setIsModalVisible(false)}
            style={{ width: "50rem" }}
            footer={
              <Button
                label="Open budget"
                className={btnStyles.btnPrimary}
                onClick={() => {
                  setIsModalVisible(false);
                  toggleBudgetMenu(false);
                }}
                disabled={true}
              />
            }
          >
            {budgetElements}
          </Dialog>
        </div>
      )}
    </div>
  );
};
