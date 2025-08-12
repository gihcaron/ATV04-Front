import styles from "./Next15.module.css";

export default function NextCard() {
  return (
    <div className={styles.background}>
      <div className={styles.NextFoto}>
        <img src="/images/Nextjs.jpg" alt="Next.js Logo" className={styles.NextFoto} />
      </div>
      <h1>Next.js 15</h1>
      <div className={styles.buttons}>
        <button>Pontos fortes</button>
        <button>Novidades em relação às versões anteriores</button>
        <button>Curiosidades</button>
        <button>Empresas usuárias</button>
        <button>Áreas de atuação e oportunidades</button>
      </div>
      <footer className={styles.footer}>MADE WITH <b>UNFOLD</b></footer>
    </div>
  );
}
