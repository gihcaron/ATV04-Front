import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <span className={styles.logoText}> Mini Wiki Tech</span>
        </div>
        
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <a href="#" className={styles.navLink}>Framework</a>
          </li>
          <li className={styles.navItem}>
            <a href="#" className={styles.navLink}>Meta-framework</a>
          </li>
          <li className={styles.navItem}>
            <a href="#" className={styles.navLink}>Bibliotecas de Estilos</a>
          </li>
          <li className={styles.navItem}>
            <a href="#" className={styles.navLink}>Next.js 15</a>
          </li>
          <li className={styles.navItem}>
            <a href="#" className={styles.navLink}>App Router</a>
          </li>
          <li className={styles.navItem}>
            <a href="#" className={styles.navLink}>Raiz do Projeto</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
