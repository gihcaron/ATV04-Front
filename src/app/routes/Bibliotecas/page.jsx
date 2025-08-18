"use client";

import React from "react";
import Image from "next/image";
import styles from "./bibliotecas.module.css";

// Importar componentes

import BibliotecasCard from "../../componentes/BibliotecasCard";
import BibliotecaDescription from "../../componentes/BibliotecaDescription";
import BibliotecasUso from "../../componentes/BibliotecasUso";
import ProseContras from "../../componentes/ProseContras";

export default function Bibliotecas() {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.tag}>
          <p className={styles.containerTag}>Dicas e Utilidades</p>
        </div>
        <p className={styles.containerTitle}>Bibliotecas de Estilos</p>
        <p className={styles.containerText}>
          Uma coleção de componentes reutilizáveis para estilização de
          aplicações.
        </p>
      </div>

      <div className={styles.contentContainer}>
        <h1 className={styles.ContentTitle}>O que são bibliotecas?</h1>

        <p className={styles.contentText}>
          {" "}
          As bibliotecas são uma{" "}
          <span className={styles.grifado}>
            {" "}
            coleção de código pré escrito externo
          </span>{" "}
          que pode ser reutilizado em diferentes projetos para realizar tarefas
          comuns ou específicas, sem a necessidade de escrever do zero. Essas
          bibliotecas{" "}
          <span className={styles.grifado}>
            fornecem funcionalidades prontas
          </span>
          que podem ser acessadas por outros programas ou bibliotecas,
          otimizando o desenvolvimento e tornando mais eficiente. Confira abaixo
          alguns exemplos.
        </p>
      </div>

      {/* Biblioteca Tailwind */}

      <BibliotecaDescription 
        BibliotecaName="1. Tailwind CSS"
        Description=" O Tailwind CSS oferece uma abordagem baseada em classes que
          representam estilos individuais. Cada classe utilitária é projetada
          para realizar uma tarefa específica, como definir cores, tamanhos,
          espaçamento, posicionamento e muito mais. Ao combinar essas classes,
          você pode criar estilos complexos e layouts responsivos sem escrever
          CSS customizado extensivo."
        SubDescription="O principal objetivo do Tailwind CSS é melhorar a produtividade dos
          desenvolvedores, permitindo-lhes criar designs de forma mais rápida e
          eficiente. Ele também promove um fluxo de trabalho mais previsível, já
          que os estilos são expressos diretamente no HTML, tornando o código
          mais autoexplicativo e facilitando a colaboração entre equipes de
          design e desenvolvimento."
        />

      {/* Pq eu usaria */}

      <BibliotecasUso 
        BibliotecaName="Tailwind CSS"
        Motivo1="😎 | Produtividade e Consistência:"
        Description1="Estilização rápida com classes
          utilitárias, sem precisar escrever CSS do zero, garantindo design
          uniforme em todo o projeto."
        Motivo2="📣 |Performance e Comunidade:"
        Description2="CSS final otimizado (removendo estilos não usados) e uma comunidade ativa com plugins e suporte."
        Motivo3="📱 | Flexibilidade e Responsividade:"
        Description3="Fácil personalização das classes e
          suporte nativo para layouts responsivos em diferentes dispositivos."
      />


      {/* Prós e contras */}
      <ProseContras 
      MotivoPro1="Desenvolvimento Rápido"
      MotivoPro2="O Tailwind utiliza o PurgeCSS para otimizar o tamanho dos arquivos CSS finais, removendo classes não utilizadas."
      MotivoPro3="O Tailwind facilita a criação de layouts responsivos."
      MotivoCon1="HTML poluído, muitas classes utilitárias deixam o código longo e menos legível."
      MotivoCon2="É preciso se acostumar com a 'linguagem de classes' do Tailwind."
      MotivoCon3="O Tailwind exige uma configuração inicial que pode ser um pouco complexa."
      />

      {/* Empresas que usam */}

      <div className={styles.EmpresasContainer}>
        <h3>Empresas que utilizam: </h3>
      </div>
     
      <div className={styles.BibliotecasGrid}>
        <div className={styles.Bibliotecas}>{/* <BibliotecasCard /> */}</div>
      </div>
    </div>
  );
}
