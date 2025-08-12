import React from 'react';
import styles from "./approuter.module.css";

export default function AppRouter() {
    return (
        <>
            <div>
                <h1 className={styles.title}>APP ROUTER E RAÍZ DO PROJETO</h1>
            </div>
            <div className={styles.container}>
                <div className={styles.carousel}>
                    <div className={styles.cardsWrapper}>
                        <div className={styles.card}>
                            <h1 className={styles.cardTitle}>Error.js</h1>
                            <p className={styles.cardParagraph}>
                                Lida com erros específicos de um componente ou rota.
                            </p>
                        </div>
                        <div className={styles.card}>
                            <h1 className={styles.cardTitle}>Global-error.js</h1>
                            <p className={styles.cardParagraph}>
                                Lida com erros que ocorrem em toda a aplicação, incluindo a página inicial ou erros que não podem ser vistos no "error.js". 
                            </p>
                        </div>
                        <div className={styles.card}>
                            <h1 className={styles.cardTitle}>Função</h1>
                            <p className={styles.cardParagraph}>
                                Sua função é encontrar e resolver os erros que aparecem dentro de um componente ou em rotas específicas. Além de fornecer ao usuário uma experiência mais localizada e controlada dos erros.
                            </p>
                        </div>
                        <div className={styles.card}>
                            <h1 className={styles.cardTitle}>Implementação</h1>
                            <p className={styles.cardParagraph}>
                                Colocar em uma pasta de componente ou rota específica dentro da pasta app. Por exemplo, app/products/[id]/error.js.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
