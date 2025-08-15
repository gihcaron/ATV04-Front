import Link from 'next/link';
import styles from './VoltarButton.module.css';

export default function VoltarButton({ href = '/Next15', label = 'Voltar' }) {
  return (
    <div className={styles.wrapper}>
      <Link href={href} className={styles.btn} aria-label={`Voltar para ${href}`}>{label}</Link>
    </div>
  );
}
