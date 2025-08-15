import styles from './Empresas.module.css';
import VoltarButton from '../../componentes/VoltarButton';
import Image from 'next/image';

const dados = [
	{ nome: 'Netflix', desc: 'Streaming global que usa Next.js para experiências rápidas e personalizadas.', logo: '/images/netflix.jpg' },
	{ nome: 'Nike', desc: 'Experiências de e-commerce com alto desempenho e branding consistente.', logo: '/images/nike.jpg' },
	{ nome: 'Hulu', desc: 'Plataforma de streaming que aproveita SSR para conteúdo dinâmico.', logo: '/images/hulu.jpg' },
	{ nome: 'TikTok', desc: 'Escalabilidade e integração híbrida com outras stacks modernas.', logo: '/images/tiktok.jpg' },
	{ nome: 'Boticário', desc: 'Ecossistema com Redux, Apollo, GraphQL e Next.js no Brasil.', logo: '/images/oboticario.jpg' },
];

export default function Empresas() {
	return (
		<div className={styles.background}>
			<h1 className={styles.titulo}>Empresas que usam Next.js</h1>
			<div className={styles.grid}>
				{dados.map(c => (
					<div key={c.nome} className={styles.card}>
						<div className={styles.logoWrap}>
							<Image src={c.logo} alt={`Logo ${c.nome}`} fill sizes="120px" style={{objectFit:'cover'}} />
						</div>
						<h3>{c.nome}</h3>
						<p>{c.desc}</p>
					</div>
				))}
			</div>
			<VoltarButton />
		</div>
	);
}