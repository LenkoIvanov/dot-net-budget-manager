import { Currency } from "@/types/Currency";
import { InputNumber } from "primereact/inputnumber";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { useState } from "react";
import { Button } from "primereact/button";
import styles from "./NewBudgetForm.module.css";

export const NewBudgetForm = () => {
  const [nameValue, setNameValue] = useState<string>("");
  const [totalValue, setTotalValue] = useState<number | null>(null);
  const [currency, setCurrency] = useState<string>("");

  // TODO: Rename mainpage to BudgetContents

  const btnPlaceholder = () => {
    setNameValue("");
    setTotalValue(null);
    setCurrency("");
  };

  return (
    <div className={styles.mainContainer}>
      <h4>Create a new budget</h4>
      <div className={styles.inputContainer}>
        <InputText
          placeholder="Enter budget name..."
          value={nameValue}
          onChange={(ev) => setNameValue(ev.target.value)}
          style={{ marginRight: "4rem" }}
        />
        <InputNumber
          placeholder="Enter available funds..."
          value={totalValue}
          onChange={(ev) => setTotalValue(ev.value)}
          minFractionDigits={2}
          maxFractionDigits={2}
        />
      </div>
      <div className={styles.dropDownContainer}>
        <Dropdown
          value={currency}
          onChange={(e) => setCurrency(e.value)}
          options={["BGN", "USD", "EUR"]}
          placeholder="Select a currency"
        />
      </div>
      <div className={styles.btnContainer}>
        <Button
          label="Cancel"
          outlined
          onClick={btnPlaceholder}
          style={{ marginRight: "2rem" }}
        />
        <Button label="Create" onClick={btnPlaceholder} />
      </div>
    </div>
  );
};
