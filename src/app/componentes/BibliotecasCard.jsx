"use client";

import React from "react";
import Image from "next/image";
import styles from "./BibliotecasCard.module.css";

const BibliotecasCard = () => {
  return (
    <div className={styles.Bibliotecas}>
      <div className={styles.BibliotecasImage}>
        <Image
          src="/images/antd.jpg"
          alt="Ant Design"
          width={300}
          height={300}
          priority
          className={styles.cardImage}
        />
      </div>
      <div className={styles.category}>
        <p> Estilização </p>
      </div>
      <div className={styles.Title}>
        <p>Tailwind UI</p>
      </div>
      <div className={styles.Description}>
        <p>
          Tailwind UI é uma biblioteca de componentes baseada no Tailwind CSS,
          que oferece elementos pré-construídos .
        </p>
      </div>
      <div className={styles.Usage}>
        <p>Usabilidade </p>
      </div>
      <div className={styles.Description}>
        <p>Usabilidade </p>
      </div>
    </div>
  );
};

export default BibliotecasCard;
