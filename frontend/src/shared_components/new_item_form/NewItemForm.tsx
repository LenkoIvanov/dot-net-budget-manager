import { useState } from "react";
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
import { Button } from "primereact/button";
import styles from "./NewItemForm.module.css";
import { INewItemFormProps } from "./INewItemFormProps";
import btnStyles from "../../shared_styles/ButtonStyles.module.css";

export const NewItemForm = (props: INewItemFormProps) => {
  const { closeForm, onCreation } = props;
  const [nameValue, setNameValue] = useState<string>("");
  const [priceValue, setPriceValue] = useState<number | null>(null);

  const clearForm = () => {
    setNameValue("");
    setPriceValue(null);
    closeForm();
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
          label="Create"
          onClick={() => {
            onCreation(nameValue, priceValue);
            closeForm();
          }}
          className={btnStyles.btnPrimary}
        />
      </div>
    </div>
  );
};
