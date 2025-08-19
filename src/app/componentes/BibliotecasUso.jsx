"use client";

import React from "react";
import Image from "next/image";
import styles from "./BibliotecasUso.module.css";

export default function BibliotecasUso({ BibliotecaName, Motivo1, Motivo2, Motivo3, Description1, Description2, Description3 }) {
  return(
       <div className={styles.MotivosParaUsar}>
        <h3 className={styles.BibliotecasTitles}>
          Motivos para usar {BibliotecaName}
        </h3>
        <p className={styles.contentText}>
          <span className={styles.Negrito}> {Motivo1} </span> {Description1}
        </p>
        <p className={styles.contentText}>
           <span className={styles.Negrito}>{Motivo2} </span> {Description2}
        </p>
        <p className={styles.contentText}>
          <span className={styles.Negrito}>{Motivo3} </span> {Description3}
        </p>
      </div>
  )
}