import { BudgetItem } from "@/shared_components/budget_item/BudgetItem";
import { BudgetTracker } from "@/shared_components/budget_tracker/BudgetTracker";
import { NewItemForm } from "@/shared_components/new_item_form/NewItemForm";
import Head from "next/head";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { MainPage } from "./main_page/MainPage";

export default function Home() {
  return (
    <>
      <Head>
        <title>Budgeting Tool</title>
      </Head>
      <main>
        <h1>NavBar</h1>
        <MainPage />
      </main>
    </>
  );
}
