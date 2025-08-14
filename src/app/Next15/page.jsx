import styles from "./Next15.module.css";
import Link from "next/link";

export default function NextCard() {
  return (
    <div className={styles.background}>
      <div className={styles.NextFoto}>
        <img src="/images/Nextjs.jpg" alt="Next.js Logo" className={styles.NextFoto} />
      </div>
      <h1>Next.js 15</h1>
      <p className={styles.textoCentralizado}>
        O Next.js 15 é a versão mais recente do framework React para desenvolvimento web, trazendo melhorias de desempenho, um sistema de cache aprimorado, novos recursos e a pré-renderização parcial. Ele também inclui a estabilização do Turbopack e suporte para o React 19, tornando o desenvolvimento mais rápido e eficiente.
      </p>
      <div className={styles.buttons}>
        <Link href="/Next15/pontosFortes"><button>Pontos fortes</button></Link>
        <Link href="/Next15/novidades"><button>Novidades em relação às versões anteriores</button></Link>
        <Link href="/Next15/curiosidades"><button>Curiosidades</button></Link>
        <Link href="/Next15/empresas"><button>Empresas usuárias</button></Link>
        <Link href="/Next15/oportunidades"><button>Áreas de atuação e oportunidades</button></Link>
      </div>
    </div>
  );
}
