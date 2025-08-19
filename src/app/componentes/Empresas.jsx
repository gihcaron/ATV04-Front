"use client";

import React from "react";
import Image from "next/image";
import styles from "./Empresas.module.css";

export default function Empresas({ EmpresasName }) {
  return(
           <div className={styles.EmpresasContainer}>
        <h3 className={styles.EmpresasText}><span  className={styles.EmpresasUnderlineText}>Empresas que utilizam:</span> {EmpresasName} </h3>
      </div>
  )
}