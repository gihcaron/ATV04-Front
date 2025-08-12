"use cliente";

import react from "react";
import Image from "next/image";
import styles from "./bibliotecas.module.css";

export default function Bibliotecas() {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <p className={styles.containerTitle}>Bibliotecas de Estilos</p>
      </div>

      <div className={styles.contentContainer}>
        <p className={styles.ContentTitle}>O que são bibliotecas?</p>
        
        <p className={styles.contentText}> As bibliotecas são uma <span className={styles.grifado}> coleção de código pré escrito externo</span> que pode ser reutilizado em diferentes projetos para realizar tarefas comuns ou específicas, sem a necessidade de escrever do zero. Essas bibliotecas  <span className={styles.grifado}> fornecem funcionalidades prontas</span> que podem ser acessadas por outros programas ou bibliotecas, otimizando o desenvolvimento e tornando mais eficiente. </p>
      </div>
    <div className={styles.BibliotecasGrid} >
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
      <p>Tailwind UI é uma biblioteca de componentes baseada no Tailwind CSS, que oferece elementos pré-construídos .</p>
     </div>
     <div className={styles.Usage}>
      <p>Usabilidade </p>
     </div>
     <div className={styles.Description}>
     <p>Usabilidade </p>
     </div>
     </div>
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
      <p>Tailwind UI é uma biblioteca de componentes baseada no Tailwind CSS, que oferece elementos pré-construídos .</p>
     </div>
     <div className={styles.Usage}>
      <p>Usabilidade </p>
     </div>
     <div className={styles.Description}>
     <p>Usabilidade </p>
     </div>
     </div>

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
      <p>Tailwind UI é uma biblioteca de componentes baseada no Tailwind CSS, que oferece elementos pré-construídos .</p>
     </div>
     <div className={styles.Usage}>
      <p>Usabilidade </p>
     </div>
     <div className={styles.Description}>
     <p>Usabilidade </p>
     </div>
     </div>

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
      <p>Tailwind UI é uma biblioteca de componentes baseada no Tailwind CSS, que oferece elementos pré-construídos .</p>
     </div>
     <div className={styles.Usage}>
      <p>Usabilidade </p>
     </div>
     <div className={styles.Description}>
     <p>Usabilidade </p>
     </div>
     </div>


        
    </div>
      
    </div>
  );
}
