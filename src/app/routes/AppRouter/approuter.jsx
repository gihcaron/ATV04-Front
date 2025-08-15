import React from 'react';
import styles from "./approuter.module.css";

export default function AppRouter() {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.cardGrande}>
                    <h2 className={styles.cardTitle}>Arquivos e Funções do App Router</h2>
                    <p className={styles.cardParagraph}>
                        O App Router do Next.js utiliza arquivos específicos para lidar com erros, páginas não encontradas,
                        carregamento, layouts e rotas. Abaixo, veja cada um e suas funções.
                    </p>

                    <div className={styles.subCard}>
                        <h3>Error.js</h3>
                        <p>Lida com erros específicos de um componente ou rota.</p>
                    </div>

                    <div className={styles.subCard}>
                        <h3>Global-error.js</h3>
                        <p>Lida com erros que ocorrem em toda a aplicação, incluindo a página inicial ou erros que não podem ser vistos no "error.js".</p>
                    </div>

                    <div className={styles.subCard}>
                        <h3>Função Geral de error.js / global-error.js</h3>
                        <p>Sua função é encontrar e resolver os erros que aparecem dentro de um componente ou em rotas específicas, fornecendo ao usuário uma experiência mais localizada e controlada dos erros.</p>
                        <p>Para implementar, coloque na pasta de componente ou rota específica dentro de <code>app</code>, ex: <code>app/products/[id]/error.js</code>.</p>
                    </div>

                    <div className={styles.subCard}>
                        <h3>Not-found.js</h3>
                        <p>Renderiza uma página personalizada quando uma rota não é encontrada (erro 404). Permite exibir mensagens ou interfaces amigáveis, como links para outras páginas ou formulário de contato.</p>
                    </div>

                    <div className={styles.subCard}>
                        <h3>Loading.js</h3>
                        <p>Exibe uma tela de carregamento enquanto a página ou componentes estão sendo carregados. Pode conter animações, spinners ou mensagens para melhorar a experiência do usuário.</p>
                    </div>

                    <div className={styles.subCard}>
                        <h3>Layout.js</h3>
                        <p>Define layouts globais ou por rota.</p>
                        <ul>
                            <li><b>Layout Global:</b> Definido em <code>app/layout.js</code>, usado em todas as rotas.</li>
                            <li><b>Layout por Rota:</b> Definido em pastas específicas, ex: <code>app/dashboard/layout.js</code>, aplicando layout apenas às rotas internas.</li>
                        </ul>
                    </div>

                    <div className={styles.subCard}>
                        <h3>Page.js</h3>
                        <p>Define a interface de usuário para uma rota específica. O conteúdo do <code>page.js</code> é renderizado quando o usuário acessa a rota correspondente.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
