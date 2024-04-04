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

export default function Home() {
  const [countries, setCountries] = useState([]);

  // Montar o objeto, passar o segundo parâmetro como vazio
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/api/country", { cache: "no-store" });
      const data = await response.json();
      setCountries(data);
    }
    fetchData();
  }, []);

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
              capital={country.capital}
              flag={country.flag}
              code={country.code}
              key={index}
            />
          );
        })}
      </div>
    </main>
  );
}
