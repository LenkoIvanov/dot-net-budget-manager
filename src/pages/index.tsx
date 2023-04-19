import Head from "next/head";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { MainPage } from "./main_page/MainPage";
import { NewBudgetForm } from "@/shared_components/new_budget_form/NewBudgetForm";

export default function Home() {
  return (
    <>
      <Head>
        <title>Budgeting Tool</title>
      </Head>
      <main>
        <h1>NavBar</h1>
        <NewBudgetForm />
      </main>
    </>
  );
}
