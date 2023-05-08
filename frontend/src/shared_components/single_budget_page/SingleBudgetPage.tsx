import { BudgetItem } from "@/shared_components/budget_item/BudgetItem";
import { BudgetTracker } from "@/shared_components/budget_tracker/BudgetTracker";
import { NewItemForm } from "@/shared_components/new_item_form/NewItemForm";
import { Button } from "primereact/button";
import { Suspense, useEffect, useState } from "react";
import styles from "./SingleBudgetPage.module.css";
import { ISingleBudgetPageProps } from "./ISingleBudgetPageProps";
import btnStyles from "../../shared_styles/ButtonStyles.module.css";
import { IBudgetItem } from "@/types/IBudgetItem";
import { HttpGetService } from "@/services/HttpGetService";
import { HttpPostService } from "@/services/HttpPostService";
import { HttpDeleteService } from "@/services/HttpDeleteService";
import { HttpPutService } from "@/services/HttpPutService";
import { UpdateItemForm } from "../update_item_form/UpdateItemForm";

//TODO: Refactor later as to not need a dummy obj. This case shouldn't ever be possible!!!
const dummyObj: IBudgetItem = {
  id: -1,
  budgetId: -1,
  cost: 0,
  name: "",
};

export const SingleBudgetPage = (props: ISingleBudgetPageProps) => {
  const { toggleBudgetMenu, selectedBudget } = props;
  const [isCreating, setIsCreating] = useState<Boolean>(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [budgetItems, setBudgetItems] = useState<IBudgetItem[]>([]);
  const [availableFunds, setAvailableFunds] = useState<number>(0);
  const [itemToUpdate, setItemToUpdate] = useState<IBudgetItem | null>(null);

  const getRelatedBudgetItems = async () => {
    const relatedBudgetItems = await new HttpGetService().getBudgetItems(
      selectedBudget.id
    );
    if (relatedBudgetItems) {
      setBudgetItems(relatedBudgetItems);
      calculateRemainingFunds(relatedBudgetItems);
    }
  };

  useEffect(() => {
    getRelatedBudgetItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClose = () => {
    setIsCreating(false);
  };

  const handleUpdateClose = () => {
    setIsUpdating(false);
    setItemToUpdate(null);
  };

  const handleUpdateOpen = (itemToUpdate: IBudgetItem) => {
    setIsUpdating(true);
    setItemToUpdate(itemToUpdate);
  };

  const calculateRemainingFunds = (items: IBudgetItem[]) => {
    let fundsLeft = selectedBudget.funds;
    items.forEach((item) => (fundsLeft = fundsLeft - item.cost));
    setAvailableFunds(fundsLeft);
  };

  const renderBudgetItems = () => {
    return budgetItems.map((budgetItem) => {
      return (
        <BudgetItem
          key={budgetItem.id}
          budgetItemInfo={budgetItem}
          onDelete={handleDeletion}
          onUpdateInit={handleUpdateOpen}
        />
      );
    });
  };

  const handleCreation = async (name: string, cost: number | null) => {
    const postService = new HttpPostService();
    const newItemID = await postService.postBudgetItem(
      name,
      cost === null ? 0 : cost,
      selectedBudget.id
    );
    const newItemToAppend: IBudgetItem = {
      id: newItemID,
      name: name,
      cost: cost === null ? 0 : cost,
      budgetId: selectedBudget.id,
    };
    const updatedItems = budgetItems;
    updatedItems.push(newItemToAppend);
    calculateRemainingFunds(updatedItems);
    setBudgetItems(updatedItems);
  };

  const handleDeletion = (itemId: number) => {
    const deleteService = new HttpDeleteService();
    deleteService.deleteBudgetItem(itemId);
    const idxOfItemToDelete = budgetItems.findIndex((bi) => bi.id === itemId);
    const updatedItems = [...budgetItems];
    updatedItems.splice(idxOfItemToDelete, 1);
    calculateRemainingFunds(updatedItems);
    setBudgetItems(updatedItems);
  };

  const handleUpdate = (itemId: number, newName: string, newCost: number) => {
    const idxOfItemToUpdate = budgetItems.findIndex((bi) => bi.id === itemId);
    const updatedBudgetItems = [...budgetItems];
    const itemInfo: IBudgetItem = updatedBudgetItems[idxOfItemToUpdate];
    itemInfo.name = newName;
    itemInfo.cost = newCost;
    const putService = new HttpPutService();
    putService.updateBudgetItem(itemId, itemInfo);
    calculateRemainingFunds(updatedBudgetItems);
    setBudgetItems(updatedBudgetItems);
  };

  return (
    <div className={styles.container}>
      <BudgetTracker
        budgetName={selectedBudget.name}
        currency={selectedBudget.currency}
        remaining={availableFunds}
        total={selectedBudget.funds}
      />
      {isCreating ? (
        <NewItemForm
          closeForm={handleClose}
          selectedBudgetId={selectedBudget.id}
          onCreation={handleCreation}
          availableFunds={availableFunds}
        />
      ) : (
        <Button
          label="Create new item"
          onClick={() => setIsCreating(true)}
          style={{ marginBottom: "1rem" }}
          className={btnStyles.btnPrimary}
          disabled={isUpdating}
        />
      )}
      {isUpdating ? (
        <UpdateItemForm
          budgetItemInfo={itemToUpdate === null ? dummyObj : itemToUpdate}
          closeUpdate={handleUpdateClose}
          onUpdate={handleUpdate}
          availableFunds={availableFunds}
        />
      ) : (
        <></>
      )}
      <div className={styles.itemContainer}>{renderBudgetItems()}</div>
      <Button
        label={"To budgets menu"}
        onClick={() => toggleBudgetMenu(true)}
        style={{ marginTop: "2rem" }}
        className={btnStyles.btnPrimary}
      />
    </div>
  );
};
