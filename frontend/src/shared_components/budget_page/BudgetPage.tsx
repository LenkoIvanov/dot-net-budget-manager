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
import { HttpPostService } from "@/services/HttpPostService";
import { HttpDeleteService } from "@/services/HttpDeleteService";

export const BudgetPage = (props: IBudgetPageProps) => {
  const { toggleBudgetMenu, handleOpenBudget } = props;

  const [isCreatingBudget, setIsCreatingBudget] = useState<Boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [budgets, setBudgets] = useState<IBudget[]>([]);

  useEffect(() => {
    const fetchBudgets = async () => {
      const budgets = await new HttpGetService().getBudgets();
      if (budgets) setBudgets(budgets);
    };

    fetchBudgets();
  }, []);

  const handleCancelBudgetCreation = () => {
    setIsCreatingBudget(false);
  };

  const renderBudgets = (): JSX.Element[] => {
    return budgets.map((budget) => {
      return (
        <BudgetListItem
          key={budget.id}
          budgetInfo={budget}
          handleOpenBudget={handleOpenBudget}
          handleDeleteBudget={deleteBudget}
        />
      );
    });
  };

  const postNewBudget = async (
    name: string,
    funds: number | null,
    currency: string
  ) => {
    const postService = new HttpPostService();
    const budgetId: number = await postService.postBudget(
      name,
      funds === null ? 0 : funds,
      currency
    );
    const newBudget: IBudget = {
      id: budgetId,
      name: name,
      funds: funds === null ? 0 : funds,
      budgetItems: [],
      currency: currency,
    };
    const updatedBudgets = budgets;
    updatedBudgets.push(newBudget);
    setBudgets([...updatedBudgets]);
    handleOpenBudget(newBudget);
  };

  const deleteBudget = async (budgetId: number) => {
    const deleteService = new HttpDeleteService();
    await deleteService.deleteBudget(budgetId);
    const idxOfDeletedBudget = budgets.findIndex(
      (budget) => budget.id === budgetId
    );
    const updatedBudgets = budgets;
    updatedBudgets.splice(idxOfDeletedBudget, 1);
    setBudgets([...updatedBudgets]);
  };

  return (
    <div>
      {isCreatingBudget ? (
        <NewBudgetForm
          toggleBudgetMenu={toggleBudgetMenu}
          toggleOffCreation={handleCancelBudgetCreation}
          handleCreation={postNewBudget}
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
          >
            {renderBudgets()}
          </Dialog>
        </div>
      )}
    </div>
  );
};
