import { BudgetItem } from "@/shared_components/budget_item/BudgetItem";
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
        <BudgetItem name="DefaultItem" value={100} />
      </main>
    </>
  );
}
