import { MdDelete } from "react-icons/md";
import { IBudgetListItemProps } from "./IBudgetListItemProps";
import { Checkbox } from "primereact/checkbox";
import styles from "./BudgetListItem.module.css";
import { useState } from "react";

export const BudgetListItem = (props: IBudgetListItemProps) => {
  const { name } = props;
  const [checked, setChecked] = useState<boolean>(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <div className={styles.listItemContainer}>
      <span style={{ display: "flex", alignItems: "end" }}>
        <input
          type="checkbox"
          onChange={handleChange}
          checked={checked}
          style={{ color: "steelblue", cursor: "pointer" }}
        />
        {name}
      </span>
      <MdDelete style={{ cursor: "pointer" }} />
    </div>
  );
};
