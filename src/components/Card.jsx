import { useState } from "react";
import PropTypes from "prop-types"

import EvolutionCard from "./EvolutionCard";

import TypeData from "../data/dataTypeBackground.json"

import "../styles/card.css"

export default function Card({ pokemon }) {

    const [showEvolution, setShowEvolution] = useState(false);

    const handleClickEvolution = () => {
        setShowEvolution(!showEvolution)
    }
  
    const backgroundImage = `url("/fond-${TypeData[pokemon.types[0].name] || "normal"}.png")`;   
    
    const [flipped, setFlipped] = useState(false);  
    const handleCardClick = () => {
      setFlipped(!flipped);
    };

   

    return (
      <div className={`card-container ${flipped ? "flipped" : ""}`} >
          <div className="card card-front"  style={{ backgroundImage }}>
              <div className="stats">
                  <div className="stats-item">
                      <div className="title-stats" id="pv">
                          <p>PV</p>
                      </div>
                      <p className="pItem">{pokemon.stats.hp}</p>
                  </div>
                  <div className="stats-item">
                      <div className="title-stats" id="attaque">
                          <p>ATQ</p>
                      </div>
                      <p className="pItem">{pokemon.stats.atk}</p>
                  </div>
                  <div className="stats-item">
                      <div className="title-stats" id="defense">
                          <p>DEF</p>
                      </div>
                      <p className="pItem">{pokemon.stats.def}</p>
                  </div>
              </div>
              <img 
              className="imgPokemon" 
              src={pokemon.sprites.regular} 
              alt={pokemon.name.fr} 
              onClick={handleCardClick} 
              />
              <div className="description" onClick={handleCardClick}>
                  <p className="name">
                      {pokemon.name.fr} 
                      <span className="idPokemon">
                        #{pokemon.pokedex_id}
                      </span>
                  </p>
                  <p className="types">Type: {pokemon.types[0].name}<img src={pokemon.types[0].image} alt={pokemon.types[0].name} />
                      {pokemon.types[1] && (
                          <>
                            {pokemon.types[1].name}
                            <img src={pokemon.types[1].image} alt={pokemon.types[1].name} />
                          </>
                      )}
                  </p>
                  <span className="iconBackFace" onClick={handleCardClick}> &#x3009;</span>
              </div>
          </div>
          <div className="card card-back">
            <img src="/oeufEvo.png" id="evolutionClick" alt="Pierre evolution" onClick={handleClickEvolution}/>
            {pokemon.sprites.shiny 
            ? <img className="imgPokemon" id="imgPokemonBack" src={pokemon.sprites.shiny} alt={pokemon.name.fr} onClick={handleCardClick}/>
            : <img className="imgPokemon" id="imgPokemonBack" src={pokemon.sprites.regular} alt={pokemon.name.fr} onClick={handleCardClick}/>}
            <EvolutionCard pokemon={pokemon} evolutionState={{ showEvolution, setShowEvolution}}/> 
            <div className="description" id="descriptionBack" onClick={handleCardClick}>
                <p className="name">
                    {pokemon.name.fr} Shiny 🌟
                </p>
                <p className="types">
                    {pokemon.category}<br />Taille: {pokemon.height}<br />Poids: {pokemon.weight}
                </p>
              <span className="iconBack" onClick={handleCardClick}>&#x3008;</span>
            </div>
          </div>
      </div>
  );
}

Card.propTypes = {
    pokemon: PropTypes.shape({
        stats: PropTypes.shape({
            hp: PropTypes.number.isRequired,
            atk: PropTypes.number.isRequired,
            def: PropTypes.number.isRequired
        }).isRequired,
        sprites: PropTypes.shape({
            regular: PropTypes.string.isRequired,
            shiny: PropTypes.string
        }).isRequired,
        name: PropTypes.shape({
            fr: PropTypes.string.isRequired
        }).isRequired,
        pokedex_id: PropTypes.number.isRequired,
        types: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string.isRequired,
                image: PropTypes.string.isRequired
            }).isRequired,
        ).isRequired,
        category: PropTypes.string.isRequired,
        height: PropTypes.string.isRequired,
        weight: PropTypes.string.isRequired, 
}).isRequired,
  };