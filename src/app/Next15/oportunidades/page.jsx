import styles from './Oportunidades.module.css';
import VoltarButton from '../../componentes/VoltarButton';

export default function Oportunidades() {
	return (
		<div className={styles.background}>
			<div className={styles.layout}>
				<div className={styles.aside}>
					<h1 className={styles.titulo}>🎯 Áreas de atuação & 💼 Oportunidades</h1>
					<div>
						<VoltarButton />
					</div>
				</div>
				<div className={styles.col}>
					<h2 className={styles.secTitulo}>🚀 Áreas de atuação</h2>
					<ul className={styles.lista}>
						<li><strong>🧩 Desenvolvimento Full-Stack:</strong> SSR, SSG e CSR para soluções completas.</li>
						<li><strong>⚡ Apps de alta performance:</strong> Otimizações automáticas e Core Web Vitals.</li>
						<li><strong>📈 SEO & Marketing:</strong> Páginas estáticas e renderização no servidor para rankear melhor.</li>
						<li><strong>🔗 APIs escaláveis:</strong> Integrações com NestJS / GraphQL / REST.</li>
					</ul>
				</div>
				<div className={styles.col}>
					<h2 className={styles.secTitulo}>💡 Oportunidades</h2>
					<ul className={styles.lista}>
						<li><strong>🎬 Componentes de streaming:</strong> UX mais fluida com carregamento gradual.</li>
						<li><strong>🚀 Turbopack:</strong> Feedback instantâneo no desenvolvimento.</li>
						<li><strong>🛰️ Indicador de rota estática:</strong> Observabilidade e otimização rápida.</li>
						<li><strong>🔍 Depuração facilitada:</strong> Mensagens de erro mais claras e contextualizadas.</li>
						<li><strong>🔐 Autenticação NextAuth:</strong> Implementação segura multi-provedor.</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
