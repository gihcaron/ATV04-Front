import React from "react";
import Header from "../../componentes/Header";
import Styles from "./Framework.module.css";
import Card, { CardsContainer } from "../../componentes/Card";

const Frameworks = () => {
  return (
    <div className={Styles.container}>
      <Header />
      <main className={Styles.main}>
        <h1 className={Styles.title}>Frameworks de Desenvolvimento</h1>
        <CardsContainer />
      </main>
    </div>
  );
};

export default Frameworks;

