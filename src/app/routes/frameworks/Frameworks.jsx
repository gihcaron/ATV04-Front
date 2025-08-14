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
        <p>
         Sua tradução literal é: estrutura, ou seja  é uma planta para desenvolver software de maneira mais rápida e eficiente. 
        </p>
        <p>Um framework define a estrutura do projeto que você vai criar, e oferece uma arquitetura padrão para o desenvolvimento de aplicações, reduzindo a quantidade de código que os desenvolvedores precisam escrever do zero, que você pode usar como blocos de construção  que podem ser modificados pelo programador para atender necessidades específicas.  
</p>
        <CardsContainer />
      </main>
    </div>
  );
};

export default Frameworks;

