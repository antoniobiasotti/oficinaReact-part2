import styles from "./modal.module.css";

export const Modal = () => {
    return (
        <section className={styles.modalBody}>
            <button>
                Fechar
            </button>
            <div className={styles.image}>
                <Image
                src={imagePath}
                width={264}
                height={160}
                alt="flag"
                className={styles.img}
                />
            </div>
            <div>
                <h2>Nome do País</h2>
            </div>
        </section>
    );
}; 