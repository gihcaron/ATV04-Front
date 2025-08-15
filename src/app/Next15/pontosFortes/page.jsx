import styles from './PontosFortes.module.css';
import VoltarButton from '../../componentes/VoltarButton';

export default function PontosFortes() {
  return (
    <div className={styles.background}>
      <div className={styles.card}>
  <h1 className={styles.titulo}>💪🏻 Pontos fortes</h1>
        <p className={styles.texto}>
          O Next.js 15 traz diversos pontos fortes, focando em melhorias de performance, como:
        </p>
        <ul className={styles.lista}>
          <li>Roteamento e suporte a TypeScript;</li>
          <li>A otimização do Turbopack para um desenvolvimento mais rápido;</li>
          <li>Suporte ao React Compiler, que reduz a necessidade de memorização manual;</li>
          <li>Aprimoramentos na segurança de ações do servidor e nas rotas de API.</li>
  </ul>
  <VoltarButton />
      </div>
    </div>
  );
}
