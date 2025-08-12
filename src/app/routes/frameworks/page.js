import Image from "next/image";
import styles from "./page.module.css";
import Card, { CardsContainer } from "../../componentes/Card";

export default function Frameworks() {
  return (
    <div className={styles.page}>
      <h1>Frameworks de Desenvolvimento</h1>
      <CardsContainer />
    </div>
  );
}