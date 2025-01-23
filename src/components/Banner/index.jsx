import styles from './Banner.module.css';

export default function Banner() {
    return (
        <div className={styles.Banner}>
            <div>
                <h1 className={styles.titulo}>
                    Olá, Mundo!
                </h1>

                <p className={styles.paragrafo}>
                    Boas Vindas ao meu espaço pessoal! Eu sou Felipe Jorge, desenvolvedor Full-Stack. Aqui comportilho um pouco do meu conhecimento e experiência na área de tecnologia.
                </p>
            </div>

            <div className={styles.imagens}>
                <img
                    className={styles.circuloColorido}
                    src={circuloColorido}
                    alt=""
                />
            </div>
        </div>
    );
}