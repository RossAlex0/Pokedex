import { useLoaderData } from "react-router-dom";
import { useState, useEffect, useMemo } from "react";
import Lottie from "lottie-react";

import Header from "../components/Header";
import Card from "../components/Card";
import Inputs from "../components/Inputs";

import pokeBallBg from "../assets/pokeballbackg.png";
import ronflex from "../assets/ronflex.json";

import "../styles/App.css";

export default function Home() {
  const pokemons = useLoaderData();

  const [valueName, setValueName] = useState("");
  const [selectType, setSelectType] = useState("");
  const [valueId, setValueId] = useState("");
  const [numCard, setNumCard] = useState(20);

  const filterPokemons = useMemo(() => {
    if (!pokemons) return [];

    let currentPokemons = pokemons;

    if (valueId) {
      currentPokemons = currentPokemons.filter((pokemon) =>
        `${pokemon.pokedex_id}`.includes(valueId)
      );
    }

    if (valueName) {
      const nameLower = valueName.toLowerCase();
      currentPokemons = currentPokemons.filter(
        (pokemon) =>
          pokemon.name.fr && pokemon.name.fr.toLowerCase().includes(nameLower)
      );
    }

    if (selectType) {
      currentPokemons = currentPokemons.filter((pokemon) =>
        pokemon.types.some((type) => type.name === selectType)
      );
    }

    if (currentPokemons.length === 0) {
      if (!selectType && !valueName && !valueId) {
        return pokemons;
      }
      return [];
    }
    return currentPokemons;
  }, [pokemons, valueId, valueName, selectType]);

  useEffect(() => {
    const scrollAddCard = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 300
      ) {
        setNumCard((prevNumCard) => prevNumCard + 10);
      }
    };
    window.addEventListener("scroll", scrollAddCard);
    return () => window.removeEventListener("scroll", scrollAddCard);
  }, []);

  return (
    <>
      <Header />
      <Inputs
        idState={{ valueId, setValueId }}
        nameState={{ valueName, setValueName }}
        typeState={{ selectType, setSelectType }}
        setNumCard={setNumCard}
      />
      <section className="main">
        <img className="pokeballBg" alt="pokeball" src={pokeBallBg} />
        {filterPokemons.length === 0 ? (
          <div id="animatEmpty">
            <div className="animat">
              <Lottie animationData={ronflex} loop={true} />
            </div>
            <p id="text-notFound">AUCUN POKEMON TROUVÉ!</p>
          </div>
        ) : (
          filterPokemons
            .slice(0, numCard)
            .map((pokemon) => (
              <Card
                key={pokemon.pokedex_id}
                pokemon={pokemon}
                pokemons={pokemons}
              />
            ))
        )}
      </section>
    </>
  );
}
