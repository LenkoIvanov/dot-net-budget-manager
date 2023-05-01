import { NavBar } from "@/shared_components/nav_bar/NavBar";
import Head from "next/head";

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>Budgeting Tool</title>
      </Head>
      <div>
        <NavBar />
      </div>
      <div style={{ marginTop: "5rem" }}>
        <h1>Budget tracker app with React and .NET</h1>
        <div>
          This is an univeristy project, which aims to utilize React and .NET to
          build a web application in React, which communicates with a .NET API
          to fetch/post/redact data. The project aims to test my web development
          skills in React and is my first attempt at building a .NET API.
        </div>
        <h4>Place to link socials</h4>
        <h4>Lenko Ivanov</h4>
      </div>
    </>
  );
};

export default AboutPage;
