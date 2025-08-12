import styles from "./Next15.module.css";
import Link from "next/link";

export default function NextCard() {
  return (
    <div className={styles.background}>
      <div className={styles.NextFoto}>
        <img src="/images/Nextjs.jpg" alt="Next.js Logo" className={styles.NextFoto} />
      </div>
      <h1>Next.js 15</h1>
      <div className={styles.buttons}>
        <Link href="/Next15/pontos-fortes"><button>Pontos fortes</button></Link>
        <Link href="/Next15/novidades"><button>Novidades em relação às versões anteriores</button></Link>
        <Link href="/Next15/curiosidades"><button>Curiosidades</button></Link>
        <Link href="/Next15/empresas"><button>Empresas usuárias</button></Link>
        <Link href="/Next15/oportunidades"><button>Áreas de atuação e oportunidades</button></Link>
      </div>
    </div>
  );
}
