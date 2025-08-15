import styles from './Curiosidades.module.css';
import VoltarButton from '../../componentes/VoltarButton';

export default function Curiosidades() {
	return (
		<div className={styles.background}>
			<div className={styles.wrap}>
				<h1 className={styles.titulo}>🧠 Curiosidades sobre o Next.js 15</h1>
				<section className={styles.bloco}>
					<ul className={styles.lista}>
						<li className={styles.item}>
							<span className={styles.emoji}>💨</span>
							<div>
								<strong>Turbopack na prática</strong><br />
								<small>Com <code>next dev --turbo</code> o servidor inicia até 75% mais rápido e o Fast Refresh pode ficar até 95% mais ágil.</small>
							</div>
						</li>
						<li className={styles.item}>
							<span className={styles.emoji}>📝</span>
							<div>
								<strong>Novo componente {'<Form>'}</strong><br />
								<small>Exemplo: <code>{'<Form action="/busca">'}</code>. Traz pré-busca e navegação do lado do cliente.</small>
							</div>
						</li>
						<li className={styles.item}>
							<span className={styles.emoji}>🗂️</span>
							<div>
								<strong>Controle de cache</strong><br />
								<small>Ative cache em rotas GET com <code>export const dynamic = 'force-static'</code>.</small>
							</div>
						</li>
						<li className={styles.item}>
							<span className={styles.emoji}>🛠️</span>
							<div>
								<strong>Resumo geral</strong><br />
								<small>Turbolinks? Não. Mas Turbopack, APIs assíncronas, {'<Form>'}, React Compiler e cache seguro tornam o ecossistema mais moderno.</small>
							</div>
						</li>
					</ul>
				</section>
				<VoltarButton />
			</div>
		</div>
	);
}
