"use client";

import React from "react";
import Image from "next/image";
import styles from "./ProseContras.module.css";

export default function ProseContras({ MotivoPro1, MotivoPro2, MotivoPro3, MotivoCon1, MotivoCon2, MotivoCon3 }) {
  return(
      <div className={styles.ProseContrasSection}>

      <div className={styles.ProseContras}>    
        <div className={styles.ProsContainer}>
          <h3 className={styles.BibliotecasTitles}>Prós da Biblioteca ✅</h3>
          <p className={styles.contentText}>{MotivoPro1} </p>
          <p className={styles.contentText}>{MotivoPro2} </p>
          <p className={styles.contentText}>{MotivoPro3} </p>

        </div>

        <div className={styles.ContrasContainer}>
          <h3 className={styles.BibliotecasTitles}>Contras da Biblioteca ❌</h3>
          <p className={styles.contentText}>{MotivoCon1} </p>
          <p className={styles.contentText}>{MotivoCon2} </p>
          <p className={styles.contentText}>{MotivoCon3} </p>
        </div>
      </div>

      </div>

      
  )
}