import { useLoaderData } from "react-router-dom"; 
import { useState , useEffect } from "react";
import Lottie from "lottie-react";

import Header from "../components/Header";
import Card from "../components/Card";
import Inputs from "../components/Inputs";

import pokeBallBg from "../assets/pokeballbackg.png";
import ronflex from "../assets/ronflex.json";

import "../styles/App.css";

export default function Home () {
  const pokemons = useLoaderData()  

  const [valueName, setValueName] = useState("");
  const [selectType, setSelectType] = useState("");
  const [valueId, setValueId] = useState("");
  const [numCard, setNumCard] = useState(20)

  // Filtrage Pokemon avec les input et select
  const filterPokemons =  pokemons.filter(pokemon => {
    if (valueId || valueName || selectType) {
      return (
        (valueId && pokemon.pokedex_id.toString().includes(valueId)) || 
        (valueName && pokemon.name.fr && pokemon.name.fr.toLowerCase().includes(valueName)) ||
        (selectType && pokemon.types.some(type => type.name === selectType))
      );
    }else{
      return true; 
    }
  } );

  // Detection du défilement pour charger plus de carte
  useEffect(() => {
    const scrollAddCard = () => {
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 300) {
        setNumCard(prevNumCard => prevNumCard + 10); 
    }};
    window.addEventListener("scroll", scrollAddCard);
    return () => window.removeEventListener("scroll", scrollAddCard);
  }, []);


  return (
    <>
      <Header />
      <Inputs 
          idState={{valueId, setValueId}}
          nameState={{valueName, setValueName}}
          typeState={{selectType, setSelectType}}
          setNumCard={setNumCard}
          />
      <section className="main">
      <img 
        className="pokeballBg" 
        alt="pokeball"
        src={pokeBallBg}
      />
      <div id="animatEmpty">
        <div className="animat">
          <Lottie animationData={ronflex} loop={true}/>
        </div>
        <p id="text-notFound">AUCUN POKEMON TROUVÉ!</p>
      </div>
        {filterPokemons?.slice(0, numCard).map((pokemon) => (
          <Card key={pokemon.pokedex_id} pokemon={pokemon} pokemons={pokemons}/>
        ))}
      </section>
    </>
  );   
}