import styles from "./card.module.css";
import Image from "next/image";

export const Card = ({
  imagePath,
  country,
  population,
  region,
  capital,
  code,
  key,
  openModal,
}) => {
  return (
    <div className={styles.container} onClick={openModal}>
      <div className={styles.image}>
        <Image
          src={imagePath}
          width={264}
          height={160}
          alt="flag"
          className={styles.img}
        />
      </div>
      <div className={styles.text}>
        <h2 className={styles.h2}>{country}</h2>
        <div className={styles.info}>
          <p>
            <span>Population: </span>
            {population.toLocaleString("pt-BR")}
          </p>
          <p>
            <span>Region: </span>
            {region}
          </p>
          <p>
            <span>Capital: </span>
            {capital}
          </p>
        </div>
      </div>
    </div>
  );
};
