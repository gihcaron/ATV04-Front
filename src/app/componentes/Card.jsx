"use client";

import React from 'react';
import styles from './Card.module.css'; 

const Card = ({ title, description }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>
      </div>
    </div>
  );
};

const CardsContainer = () => {
  const handleCardClick = (cardTitle) => {
    alert(`Você clicou no card: ${cardTitle}`);
  };

  return (
    <div className={styles.cardsContainer}>
      <Card 
        title="Definição"
        description="Sua tradução literal é: estrutura, ou seja  é uma planta para desenvolver software de maneira mais rápida e eficiente. 
Um framework define a estrutura do projeto que você vai criar, e oferece uma arquitetura padrão para o desenvolvimento de aplicações, reduzindo a quantidade de código que os desenvolvedores precisam escrever do zero, que você pode usar como blocos de construção  que podem ser modificados pelo programador para atender necessidades específicas. "
        onButtonClick={() => handleCardClick("React")}
      />
      
      <Card 
        title="Tipos de frameworks"
        description="Frameworks de suporte e aplicação:
Oferecem uma estrutura e conjunto de funcionalidades para tarefas comuns em muitas aplicações, como interfaces gráficas ou comunicação com a web.
É um conjunto de serviços gerais, como gerenciamento de banco de dados ou autenticação de usuários. Por exemplo, o Spring Framework na linguagem Java facilita a criação de aplicações robustas através da injeção de dependência e gerenciamento de transações.
."

      />
      
      <Card 
        title="Angular"
        description="Plataforma para construir aplicações web e mobile."
      />
    </div>
  );
};

export default Card;
export { CardsContainer };