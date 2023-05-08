import { useState } from "react";
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
import { Button } from "primereact/button";
import styles from "../new_item_form/NewItemForm.module.css";
import btnStyles from "../../shared_styles/ButtonStyles.module.css";
import { IUpdateItemFormProps } from "./IUpdateItemFormProps";

export const UpdateItemForm = (props: IUpdateItemFormProps) => {
  const { budgetItemInfo, closeUpdate, onUpdate } = props;
  const [nameValue, setNameValue] = useState<string>(budgetItemInfo.name);
  const [priceValue, setPriceValue] = useState<number | null>(
    budgetItemInfo.cost
  );

  const clearForm = () => {
    setNameValue("");
    setPriceValue(null);
    closeUpdate();
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.inputContainer}>
        <InputText
          placeholder="Enter a name..."
          value={nameValue}
          onChange={(ev) => setNameValue(ev.target.value)}
          style={{ marginRight: "4rem" }}
        />
        <InputNumber
          placeholder="Enter a price..."
          value={priceValue}
          onChange={(ev) => setPriceValue(ev.value)}
          minFractionDigits={2}
          maxFractionDigits={2}
        />
      </div>
      <div className={styles.btnContainer}>
        <Button
          label="Cancel"
          outlined
          onClick={clearForm}
          style={{ marginRight: "2rem" }}
          className={btnStyles.btnSecondary}
        />
        <Button
          label="Update"
          onClick={() => {
            onUpdate(
              budgetItemInfo.id,
              nameValue,
              priceValue === null ? 0 : priceValue
            );
            clearForm();
          }}
          className={btnStyles.btnPrimary}
        />
      </div>
    </div>
  );
};
