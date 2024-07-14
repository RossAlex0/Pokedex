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

  const [valueName, setValueName] = useState('');
  const [selectType, setSelectType] = useState('');
  const [valueId, setValueId] = useState('');

  
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
          <Card key={pokemon.pokedex_id} pokemon={pokemon} pokemons={pokemons}/>
        ))}
      </section>
    </>
  );   
}