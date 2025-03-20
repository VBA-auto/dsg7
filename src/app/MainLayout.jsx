import React from "react";
import Hero from "./Components/Hero/Hero";
import Head from "next/head";

const MainLayout = () => {
  const pageDescription = "Spécialiste DSG & EDC - Réparation & Vente | DSG7";
  const HeadingText = "BOITE EDC Renault DC4";
  return (
    <div className="">
      <Head>
        <title>Spécialiste DSG & EDC - Réparation & Vente | DSG7</title>
        <meta name="description" content={pageDescription} />
        <meta name="headline" content={HeadingText} />
      </Head>
      <div className="sr-only">
        <h1>Mécatronique DSG7</h1>
        <h1>BOITE EDC Renault DC4</h1>
        <h2>Calculateur DSG7</h2>
        <h2>Calculateur DQ381</h2>
      </div>{" "}
      <Hero />
    </div>
  );
};

export default MainLayout;
