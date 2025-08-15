"use client";

import React from 'react';
import styles from './Card.module.css';

const Card = ({ title, description }) => {
  // Se description for string, renderiza dentro de <p>, senão renderiza diretamente
  const isString = typeof description === 'string';
  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{title}</h3>
        {isString ? (
          <p className={styles.cardDescription}>{description}</p>
        ) : (
          <div className={styles.cardDescription}>{description}</div>
        )}
      </div>
    </div>
  );
};

const CardsContainer = () => {
  const handleCardClick = (cardTitle) => {
    alert(`Você clicou no card: ${cardTitle}`);
  };

  const frontendTopics = [
    {
      title: "AngularJS (JavaScript)",
      description: "Framework mantido pelo Google, usado para construir aplicações web SPA (Single Page Applications) ricas e interativas."
    },
    {
      title: "Vue.js (JavaScript)",
      description: "Leve e progressivo, focado na construção de interfaces de usuário e SPA de forma intuitiva e eficiente."
    },
    {
      title: "Svelte (JavaScript)",
      description: "Inovador em sua abordagem de compilar componentes em código altamente otimizado, aumentando a performance."
    },
    {
      title: "Bootstrap (HTML, CSS, JS)",
      description: "Um dos mais populares para design responsivo e mobile-first, oferece uma vasta gama de componentes estilizados."
    },
    {
      title: "Ember.js (JavaScript)",
      description: "Focado em produtividade, oferece um ecossistema completo para a criação de aplicações web ambiciosas."
    }
  ];

  const backendTopics = [
    {
      title: "Spring (Java)",
      description: "Amplamente utilizado para a criação de aplicações empresariais, destaca-se pela injeção de dependência e configuração declarativa."
    },
    {
      title: "Django (Python)",
      description: "Focado em desenvolvimento web rápido e pragmático, é conhecido por seu padrão model-template-view."
    },
    {
      title: "Express.js (Node.js)",
      description: "Um framework minimalista para construir aplicações web e APIs eficientes, valorizado por sua simplicidade e flexibilidade."
    },
    {
      title: "ASP.NET (C#)",
      description: "Voltado para a criação de aplicativos web dinâmicos, suporta MVC, Web API e mais, integrado ao ecossistema Microsoft."
    },
    {
      title: "Laravel (PHP)",
      description: "Um framework elegante e robusto para desenvolvimento web, com uma sintaxe expressiva e diversas funcionalidades integradas."
    }
  ];

  return (
    <div className={styles.cardsContainer}>
      <div className={styles.card}>
        <div className={styles.cardContent}>
          <h3 className={styles.cardTitle}>Frameworks Frontend</h3>
          <div className={styles.topicsContainer}>
            {frontendTopics.map((topic, index) => (
              <div key={index} className={styles.topicCard}>
                <h4 className={styles.topicTitle}>{topic.title}</h4>
                <p className={styles.topicDescription}>{topic.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.card}>
        <div className={styles.cardContent}>
          <h3 className={styles.cardTitle}>Frameworks Backend</h3>
          <div className={styles.topicsContainer}>
            {backendTopics.map((topic, index) => (
              <div key={index} className={styles.topicCard}>
                <h4 className={styles.topicTitle}>{topic.title}</h4>
                <p className={styles.topicDescription}>{topic.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Card
        title="PRÓS E CONTRAS"
        description={
          <>
            As vantagens estão na maior produtividade, código mais consistente e fácil manutenção, padronização, além de apresentar menos erros e bugs inesperados, já que os códigos são testados.
            <br /><br />
            As desvantagens incluem uma possível curva de aprendizado, restrições de personalização e dependência da tecnologia do framework.
          </>
        }
      />
      <Card
        title="PRINCIPAIS FUNCIONALIDADES"
        description={
          <>
            <ul>
              <li>Estrutura pré-definida;</li>
              <li>Reutilização de códigos;</li>
              <li>Boas práticas: Encoraja o uso de (Model-View-Controller);</li>
              <li>Documentação e suporte;</li>
              <li>Foco na especificidade.</li>
            </ul>

          </>
        }
      />

      <Card
        title="Uso e Oportunidades"
        description={
          <>
           No desenvolvimento web, frameworks como React, Angular, Vue.js (front-end) e Express, Django, Flask (back-end) são amplamente utilizados para construir aplicações web modernas e responsivas. 

          </>
        }
      />

      <Card
        title="Qual será utilizado em sala de aula?"
        description={
          <>
            O framework que será utilizado em sala de aula é o React, um dos mais populares para desenvolvimento frontend, conhecido por sua eficiência e flexibilidade na construção de interfaces de usuário dinâmicas.


          </>
        }
      />
    </div>
  );
};



export default Card;
export { CardsContainer };