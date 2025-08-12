import styles from './EmpresaCard.module.css';

export default function EmpresaCard({ imagem, nome, descricao, link }) {
  return (
    <div className={styles.card}>
      <img src={imagem} alt={nome} className={styles.imagem} />
      <h3 className={styles.nome}>{nome}</h3>
      <p className={styles.descricao}>{descricao}</p>
      {link && <a href={link} className={styles.botao}>Saiba mais</a>}
    </div>
  );
}