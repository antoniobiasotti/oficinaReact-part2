import styles from "./modal.module.css";
import Image from "next/image";
import { ArrowLeft } from "@phosphor-icons/react";

export const Modal = ({
    imagePath,
    name,
    population,
    region,
    subregion,
    capital,
    topleveldomain,
    currencieSymbol,
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
                    <h2>{name}</h2>
                        <div>
                            <p>
                                <span>Native name: </span>
                                {name}
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
                                {subregion}
                            </p>
                            <p>
                                <span>Capital: </span>
                                {capital}
                            </p>
                        </div>
                        <div>    
                            <p>
                                <span>Top level Domain: </span>
                                {topleveldomain}
                            </p>
                            <p>
                                <span>Currencies: </span>
                                {currencieSymbol}
                            </p>
                            <p>
                                <span>Languages: </span>
                                {region}
                            </p>
                        </div>
                        <footer>
                            <p>
                                <span>Border Countries: </span>
                                <button>
                                    {region}
                                </button>
                            </p>
                        </footer>
                </div>
            </div>
        </section>
    );
}; 