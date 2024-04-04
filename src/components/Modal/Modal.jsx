import styles from "./modal.module.css";
import Image from "next/image";
import { ArrowLeft } from "@phosphor-icons/react";

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
            <div>
                <button onClick={closeModal}>
                    <ArrowLeft size={22} />
                    Back
                </button>
            </div>
            <div className={styles.modalContent}>
                <div className={styles.image}>
                    <Image
                    src={imagePath}
                    width={584}
                    height={450}
                    alt="flag"
                    className={styles.img}
                    />
                </div>
                <div className={styles.info}>
                    <h2>Nome do País</h2>
                    <div>
                        <p>
                            <span>Native name: </span>
                            {region}
                        </p>
                        <p>
                            <span>Population: </span>
                            {population.toLocaleString("pt-BR")}
                        </p>
                        <p>
                            <span>Region: </span>
                            {region}
                        </p>
                        <p>
                            <span>Sub Region: </span>
                            {capital}
                        </p>
                        <p>
                            <span>Capital: </span>
                                {region}
                        </p>
                    </div>
                    <div>    
                        <p>
                            <span>Top level Domain: </span>
                            {region}
                        </p>
                        <p>
                            <span>Currencies: </span>
                            {region}
                        </p>
                        <p>
                            <span>Languages: </span>
                            {region}
                        </p>
                        <p>
                            <span>Border Countries: </span>
                            {region}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}; 