import { useLoaderData } from "react-router-dom"; 
import { useState , useEffect } from 'react';
import Lottie from 'lottie-react';

import Header from '../components/Header';
import Card from '../components/Card';
import Inputs from '../components/Inputs';

import pokeBallBg from '../assets/pokeballbackg.png';
import ronflex from '../assets/ronflex.json';

import '../styles/App.css';

export default function Home () {

  const pokemons = useLoaderData()
  // Création du State qui servira à stocker la valeur de l'input 'searchByName'
  const [valueName, setValueName] = useState('');
  // Création du state qui servira à stocker la valeur du select 'searchByType'
  const [selectType, setSelectType] = useState('');
   // Création du State qui servira à stocker la valeur de l'input 'searchById'
   const [valueId, setValueId] = useState('');

  // Création d'un filtre pour les pokémon en utilisant les valeurs défini dans le composant input
  const filterPokemons = pokemons.filter(pokemon => {
    if (valueId || valueName || selectType) {
      return (
         // Vérifie si l'ID du Pokémon correspond à la valeur saisie
        (valueId && pokemon.pokedex_id.toString().includes(valueId)) || 
        // Vérifie si le nom du Pokémon contient la valeur saisie 
        (valueName && pokemon.name.fr && pokemon.name.fr.toLowerCase().includes(valueName)) ||
        // Vérifie si le type d'un Pokemon correspondant au type sélectionné
        (selectType && pokemon.types.some(type => type.name === selectType))
      );
    }else{
      return true; 
    }
  } );
  
useEffect(() => {
  const numbersOfCards = document.querySelectorAll('.card-container');
  const animatEmpty = document.querySelector("#animatEmpty")
  if(numbersOfCards.length === 0 && (valueId !== "" || valueName !== "")){
    animatEmpty.style.display = "flex"
  }else{
    animatEmpty.style.display = "none"
  }
},[valueId, valueName]);

  return (
    <>
      <Header />
      <Inputs 
          idState={{valueId, setValueId}}
          nameState={{valueName, setValueName}}
          typeState={{selectType, setSelectType}}
          />
      <section className='main'>
      <img src={pokeBallBg} className='pokeballBg' alt='pokeball'/>
      <div id='animatEmpty'>
        <div className="animat">
          <Lottie animationData={ronflex} loop={true}/>
        </div>
        <p id='text-notFound'>AUCUN POKEMON TROUVÉ!</p>
      </div>
        {filterPokemons?.map((pokemon) => (
          // Crée un composant Card pour chaque Pokémon filtré avec filterPokemons 
          <Card key={pokemon.pokedex_id} pokemon={pokemon} pokemons={pokemons}/>
        ))}
      </section>
    </>
  );   
}