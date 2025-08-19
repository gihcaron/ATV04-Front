"use client";

import React from "react";
import Image from "next/image";
import styles from "./BibliotecaDescription.module.css";

export default function BibliotecaDescription({ BibliotecaName, Description, SubDescription }) {
  return(
       <div className={styles.Bibliotecas}>
        <h1 className={styles.BibliotecaName}>{BibliotecaName} </h1>

        <p className={styles.contentText}>
          {Description}
        </p>
        <p className={styles.contentText}>
          {SubDescription}
        </p>
      </div>
  )
}
