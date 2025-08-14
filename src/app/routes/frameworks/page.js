import Image from "next/image";
import styles from "./page.module.css";
import Card, { CardsContainer } from "../../componentes/Card";

export default function Frameworks() {
  return (
    <div className={styles.page}>
      <h1>Frameworks de Desenvolvimento</h1>
      <p className={styles.description}>
        Os frameworks de desenvolvimento são ferramentas essenciais que aceleram o processo de criação de aplicações web e mobile, oferecendo uma base sólida e componentes reutilizáveis.
      </p>
      <p className={styles.description}>
        Eles permitem que desenvolvedores foquem na lógica de negócio específica do projeto, ao invés de reinventar funcionalidades básicas, resultando em maior produtividade e código mais organizado.
      </p>
      <CardsContainer />
    </div>
  );
}