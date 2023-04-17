import { useState } from "react";
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
import { Button } from "primereact/button";
import styles from "./NewItemForm.module.css";

export const NewItemForm = () => {
  const [nameValue, setNameValue] = useState<string>("");
  const [priceValue, setPriceValue] = useState<number | null>(null);

  const onBtnClickPlaceholder = () => {
    setNameValue("");
    setPriceValue(null);
  };

  return (
    <div className={styles.mainContainer}>
      <h4>Create a new budget item</h4>
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
          onClick={onBtnClickPlaceholder}
          style={{ marginRight: "2rem" }}
        />
        <Button label="Create" onClick={onBtnClickPlaceholder} />
      </div>
    </div>
  );
};
