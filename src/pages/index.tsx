import Head from "next/head";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { SingleBudgetPage } from "./single_budget_page/SingleBudgetPage";
import { NewBudgetForm } from "@/shared_components/new_budget_form/NewBudgetForm";
import { useState } from "react";

export default function Home() {
  const [isBudgetMenu, setIsBudgetMenu] = useState<Boolean>(true);

  const togglePageView = (toggle: Boolean) => {
    setIsBudgetMenu(toggle);
  };

  return (
    <>
      <Head>
        <title>Budgeting Tool</title>
      </Head>
      <main>
        <h1>NavBar</h1>
        {isBudgetMenu ? (
          <NewBudgetForm toggleBudgetMenu={togglePageView} />
        ) : (
          <SingleBudgetPage toggleBudgetMenu={togglePageView} />
        )}
      </main>
    </>
  );
}
