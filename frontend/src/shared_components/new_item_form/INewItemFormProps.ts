export interface INewItemFormProps {
  closeForm: () => void;
  selectedBudgetId: number;
  onCreation: (name: string, cost: number | null) => void;
  availableFunds: number;
}
