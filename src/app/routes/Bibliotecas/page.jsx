"use client";

import React from "react";
import Image from "next/image";
import styles from "./bibliotecas.module.css";

// Importar componentes

import BibliotecasCard from "../../componentes/BibliotecasCard";
import BibliotecaDescription from "../../componentes/BibliotecaDescription";
import BibliotecasUso from "../../componentes/BibliotecasUso";
import ProseContras from "../../componentes/ProseContras";
import Empresas from "../../componentes/Empresas";

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
      <div className={styles.author}>
        <p className={styles.authorSettings}>12/08/2025</p>
        <p className={styles.authorSettings}>Desenvolvimento Front-End</p>
        <p className={styles.authorSettings}>Por: Giovanna Caron</p>

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

      <Empresas EmpresasName="GitHub,Laravel, Dev.to, Statamic, Algolia e Vercel." />

      {/* Chakra */}

      <BibliotecaDescription
        BibliotecaName="2. Chakra UI"
        Description="O Chakra UI é uma biblioteca de código aberto focada em acessibilidade e facilidade de uso. Ela oferece uma ampla gama de componentes como botões, formulários, tabelas e muito mais, todos projetados para serem responsivos e acessíveis."
      />

      <BibliotecasUso
        BibliotecaName="Chakra UI"
        Motivo1="🌟 | Simplicidade:"
        Description1="A interface do usuário do Chakra é simples de usar e entender, reduzindo a curva de aprendizado e permitindo que os desenvolvedores se concentrem no desenvolvimento."
        Motivo2="⚡ | Acessibilidade : "
        Description2="O Chakra UI foi criado pensando na acessibilidade."
        Motivo3="🎨 |Personalização : "
        Description3="Todos os estilos de componentes podem ser substituídos ou estendidos por meio de propriedades de estilo. Você pode personalizar facilmente o componente, incluindo detalhes como cores e espaçamento."
      />

      {/* Prós e contras */}
      <ProseContras
        MotivoPro1="Fácil de usar e aprender, permitindo que desenvolvedores criem interfaces de usuário rapidamente. "
        MotivoPro2="Chakra UI se integra bem com outras ferramentas populares, como o Next.js e o TypeScript, simplificando o desenvolvimento em diferentes ambientes. "
        MotivoPro3="A biblioteca foi projetada com foco em acessibilidade, seguindo padrões como WAI-ARIA."
        MotivoCon1="Se não for utilizada com cuidado, a criação de componentes grandes e complexos pode tornar o código mais difícil de manter. "
        MotivoCon2="Para projetos muito pequenos, a biblioteca pode ser mais do que o necessário."
        MotivoCon3="Limitações na identificação de estilos personalizados"
      />

      <Empresas EmpresasName="Coinbase, Brex, Twilio Paste" />

      {/* Atnd */}

      <BibliotecaDescription
        BibliotecaName="3. Ant Design"
        Description="O Ant Design para a web é uma biblioteca de componentes React que já vem com um conjunto de estilos e um sistema de design bem definido. Em vez de estilizar do zero, você usa os componentes prontos e os personaliza."
      />

      <BibliotecasUso
        BibliotecaName="Ant Design"
        Motivo1="🌟 | Componentes Estilizados:"
        Description1="Não é estilo do zero, é uma biblioteca de componentes que já vêm com estilos."
        Motivo2="⚡ | Tempo de Desenvolvimento : "
        Description2="Reduz drasticamente o tempo de desenvolvimento, pois você não precisa construir componentes de UI básicos."
        Motivo3="🎨 | Consistência Visual : "
        Description3="A sua grande vantagem é garantir a consistência visual em todo o projeto.        "
      />

      {/* Prós e contras */}
      <ProseContras
        MotivoPro1="Qualidade profissional: Componentes robustos e acessíveis, ideais para empresas. "
        MotivoPro2="Acelera o desenvolvimento: Componentes prontos economizam muito tempo."
        MotivoPro3="Temas flexíveis: Fácil de adaptar as cores e fontes de forma global."
        MotivoCon1="É muito robusto para necessidades simples. "
        MotivoCon2="Pode não se adequar a todos os projetos criativos."
        MotivoCon3="Pode aumentar o tamanho do seu aplicativo."
      />

      <Empresas EmpresasName=" Alibaba, Baidu e Yuque." />

      {/* Mantine */}

      <BibliotecaDescription
        BibliotecaName="4. Mantine"
        Description="O Mantine é uma biblioteca de componentes de interface moderna e rica em funcionalidades, projetada para ser responsiva, acessível e altamente personalizável. Ela traz não apenas componentes de UI prontos, mas também hooks úteis para lidar com formulários, notificações, modais e muito mais, o que torna o desenvolvimento mais rápido e consistente."
      />

      <BibliotecasUso
        BibliotecaName="Mantine"
        Motivo1="🌟 | Componentes Ricos:"
        Description1="Oferece uma vasta coleção de componentes modernos como tabelas, calendários, gráficos e controles de formulário avançados."
        Motivo2="⚡ | Hooks Integrados: : "
        Description2="Inclui hooks práticos para lidar com estado, formulários e interações comuns, reduzindo a necessidade de bibliotecas externas."
        Motivo3="🎨 | Responsividade: : "
        Description3="Suporte nativo a breakpoints e estilos responsivos."
      />

      {/* Prós e contras */}
      <ProseContras
        MotivoPro1="Grande variedade de componentes prontos, economizando tempo no desenvolvimento."
        MotivoPro2="Hooks utilitários que ajudam em lógica comum (ex: useForm, useDisclosure)."
        MotivoPro3="Fácil integração com Next.js e TypeScript."
        MotivoCon1="Por ser uma biblioteca mais nova em comparação com o Material UI, a comunidade ainda é menor."
        MotivoCon2="Pode adicionar sobrecarga desnecessária em projetos muito pequenos."
        MotivoCon3="Alguns componentes avançados exigem aprendizado adicional para aproveitar todo o potencial."
      />

      <Empresas EmpresasName="Meta (em projetos internos), ByteDance, e diversas startups na Europa e América do Norte." />

      {/* Next UI */}

      <BibliotecaDescription
        BibliotecaName="
5. NextUI"
        Description="O NextUI é uma biblioteca moderna de componentes de interface construída especialmente com foco no Next.js. Ela oferece componentes minimalistas, bonitos e altamente personalizáveis, com suporte nativo ao modo escuro e foco em performance. O objetivo principal é proporcionar uma excelente experiência para desenvolvedores, mantendo a simplicidade no uso."
      />

      <BibliotecasUso
        BibliotecaName="NextUI"
        Motivo1="🌟 | Integração Perfeita com Next.js:"
        Description1="Projetada para funcionar de forma otimizada no ecossistema Next.js."
        Motivo2="⚡ | Performance:"
        Description2="Inclui hooks práticos para lidar com estado, formulários e interações comuns, reduzindo a necessidade de bibliotecas externas."
        Motivo3="🎨 | Responsividade: : "
        Description3="Componentes leves e otimizados, garantindo carregamento rápido.
Alto Nível de Customização: Permite ajustar estilos, cores, tipografia e temas de forma simples."
      />

      {/* Prós e contras */}
      <ProseContras
        MotivoPro1="Boa integração com TypeScript e Next.js."
        MotivoPro2="API clara e fácil de usar, acelerando o desenvolvimento."
        MotivoPro3="Componentes leves e otimizados, garantindo carregamento rápido."
        MotivoCon1="Comunidade ainda em crescimento, com menos exemplos e plugins disponíveis."
        MotivoCon2="Projetos grandes podem exigir complementação com outras bibliotecas."
        MotivoCon3="Alguns componentes avançados podem exigir aprendizado adicional para serem utilizados de forma eficaz."
      />

      <Empresas EmpresasName="Vercel (criadora do Next.js), startups e projetos de showcase no ecossistema React/Next.js." />

    </div>
  );
}
