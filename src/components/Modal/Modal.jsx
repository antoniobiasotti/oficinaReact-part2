import styles from "./modal.module.css";
import Image from "next/image";

export const Modal = ({
    imagePath,
    country,
    population,
    region,
    capital,
    code,
    key,
    index,
    closeModal,
}) => {
    return (
        <section className={styles.modalBody}>
            <button onClick={closeModal}>
                Back
            </button>
            <div className={styles.image}>
                <Image
                src={imagePath}
                width={154}
                height={70}
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