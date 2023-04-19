import Head from "next/head";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { NewBudgetForm } from "@/shared_components/new_budget_form/NewBudgetForm";
import { useState } from "react";
import { NavBar } from "@/shared_components/nav_bar/NavBar";
import { SingleBudgetPage } from "@/shared_components/single_budget_page/SingleBudgetPage";

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
      <div style={{ marginBottom: "3rem" }}>
        <NavBar />
      </div>
      <main>
        {isBudgetMenu ? (
          <NewBudgetForm toggleBudgetMenu={togglePageView} />
        ) : (
          <SingleBudgetPage toggleBudgetMenu={togglePageView} />
        )}
      </main>
    </>
  );
}
