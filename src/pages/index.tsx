import Head from "next/head";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { useState } from "react";
import { NavBar } from "@/shared_components/nav_bar/NavBar";
import { MainAppPage } from "./main_app_page/MainAppPage";

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
        <MainAppPage />
      </main>
    </>
  );
}
