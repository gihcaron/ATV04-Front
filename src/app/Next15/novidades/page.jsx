import styles from './Novidades.module.css';
import VoltarButton from '../../componentes/VoltarButton';

export default function Novidades() {
	return (
		<div className={styles.background}>
			<div className={styles.container}>
				<h1 className={styles.titulo}>Novidades do Next.js 15</h1>
				<p className={styles.intro}>
					Principais mudanças e novidades que tornam o desenvolvimento mais rápido, seguro e simples.
				</p>
				<div className={styles.grid}>
					<div className={styles.item}>
						<h3>🚀 Turbopack padrão</h3>
						<p>
							Novo empacotador focado em velocidade para <span className={styles.destaque}>JavaScript</span> e <span className={styles.destaque}>TypeScript</span>. Reduz drasticamente o tempo de inicialização e de Hot Reload.
						</p>
					</div>
					<div className={styles.item}>
						<h3>📝 Componente {'<Form>'}</h3>
						<p>
							Estende o elemento tradicional com pré-busca e navegação no cliente. Formulários mais fluidos e sem gambiarras.
						</p>
					</div>
					<div className={styles.item}>
						<h3>🔒 Cache mais seguro</h3>
						<p>Rotas GET agora não armazenam dados por padrão. Use <code>force-static</code> para ativar. <code>force-dynamic</code> desativa totalmente.</p>
					</div>
					<div className={styles.item}>
						<h3>⚙️ React Compiler</h3>
						<p>Otimização automática de componentes (experimental) diminuindo a necessidade de <code>memo</code> e <code>useCallback</code>.</p>
					</div>
					<div className={styles.item}>
						<h3>🛡️ Middleware melhorado</h3>
						<p>Maior flexibilidade e tratamento de erros mais robusto antes da requisição chegar às rotas.</p>
					</div>
					<div className={styles.item}>
						<h3>⚡ Async em todos os lugares</h3>
						<p>APIs com suporte oficial a <code>async/await</code>, simplificando fluxos assíncronos.</p>
					</div>
					<div className={styles.item}>
						<h3>🛠️ next.config.ts</h3>
						<p>Configuração agora aceita TypeScript com tipagem automática e mais segurança.</p>
					</div>
				</div>
				<VoltarButton />
			</div>
		</div>
	);
}
