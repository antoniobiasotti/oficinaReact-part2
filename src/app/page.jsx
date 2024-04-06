// essa página será renderizada do lado do cliente
"use client";
/*
3 formas de renderizar aplicações com Next: 
dinamica no server
estatico no server
direto no navegador
*/

import { useState, useEffect } from "react";

import styles from "./page.module.css";
import { Card } from "@/components/Card/Card";
import { Modal } from "@/components/Modal/Modal";

export default function Home() {
  const [countries, setCountries] = useState([]);

  const [selectedCountry, setSelectedCountry] = useState(null);

  
  // Montar o objeto, passar o segundo parâmetro como vazio
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/api/country", { cache: "no-store" });
      const data = await response.json();
      setCountries(data);
    }
    fetchData();
  }, []);

  const openModal = (country) => { 
    setSelectedCountry(country); // "Avisa" a home qual o país selecionado pelo useState
  };

  const closeModal = () => {
    setSelectedCountry(null); // Limpa o país selecionado
  }

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        {countries.map((country, index) => {
          return (
            <Card
              imagePath={country.flag}
              name={country.name}
              population={country.population}
              region={country.region}
              subregion={country.subregion}
              capital={country.capital}
              topleveldomain={country.topLevelDomain}
              flag={country.flag}
              code={country.code}
              key={index}
              openModal={() => openModal(country)} //callback function -> chama a openModal para setar o país clickado, ou seja, diferente de nulo
            />
            )
          })}
      </div>
      {selectedCountry && (
            <Modal
              imagePath={selectedCountry.flag}
              name={selectedCountry.name}
              population={selectedCountry.population}
              region={selectedCountry.region}
              subregion={selectedCountry.subregion}
              capital={selectedCountry.capital}
              topleveldomain={selectedCountry.topLevelDomain}
              flag={selectedCountry.flag}
              code={selectedCountry.code}
              closeModal={() => closeModal()}
            />
      )}
    </main>
  );
}
