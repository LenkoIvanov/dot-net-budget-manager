import { BudgetItem } from "@/shared_components/budget_item/BudgetItem";
import { BudgetTracker } from "@/shared_components/budget_tracker/BudgetTracker";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Budgeting Tool</title>
      </Head>
      <main>
        <h1>NavBar</h1>
        <h1>Budgeting tool with React & .NET</h1>
        <BudgetTracker
          budgetName="Default Budget"
          currency="BGN"
          remaining={100}
          total={100}
        />
        <BudgetItem name="DefaultItem" value={100} />
      </main>
    </>
  );
}
