export interface INewBudgetFormProps {
  toggleBudgetMenu: (toggle: Boolean) => void;
  toggleOffCreation: () => void;
  handleCreation: (
    name: string,
    funds: number | null,
    currency: string
  ) => void;
}
