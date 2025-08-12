import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const integrantes = [
    {
      id: 1,
      nome: "Amanda Gomes",
      foto: "/images/amandaGomes.jpg",
      curso: "Desenvolvimento de Software",
      sala: "2TDS1"
    },
    {
      id: 2,
      nome: "Ana Julia Demattei",
      foto: "/images/anaJu.jpg",
      curso: "Desenvolvimento de Software",
      sala: "2TDS1"
    },
    {
      id: 3,
      nome: "Flavia Mendes",
      foto: "/images/flaviaMendes.jpg",
      curso: "Desenvolvimento de Software",
      sala: "2TDS1"
    },
    {
      id: 4,
      nome: "Giovana Caron",
      foto: "/images/giovanaCaron.jpg",
      curso: "Desenvolvimento de Software",
      sala: "2TDS1"
    },
    {
      id: 5,
      nome: "Julia Neves",
      foto: "/images/juliaNeves.jpg",
      curso: "Desenvolvimento de Software",
      sala: "2TDS1"
    },
  ];
  return (
    <div className={styles.page}>

      <h1 className={styles.title}>Conheça nossa equipe:</h1>
      <div className={styles.cardsContainer}>
        {integrantes.map((integrante) => (
          <div key={integrante.id} className={styles.card}>
            <div className={styles.cardImage}>
              <Image
                src={integrante.foto}
                alt={integrante.nome}
                width={300}
                height={250}
                className={styles.image}
              />
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.nome}>{integrante.nome}</h3>
              <p className={styles.curso}>{integrante.curso}</p>
              <p className={styles.sala}>Sala: {integrante.sala}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
