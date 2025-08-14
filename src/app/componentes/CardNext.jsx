import styles from './CardNext.module.css';

export default function EmpresaCard({ imagem, nome, descricao, link }) {
  return (
    <div className={styles.card}>
      <h3 className={styles.nome}>{nome}</h3>
      <p className={styles.descricao}>{descricao}</p>
    </div>
  );
}