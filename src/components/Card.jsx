import { useState } from 'react';

export default function Card({ pokemon }) {
  
    const backgroundImageGet = (type) => {
      switch (type) {
        case "Feu":
          return "url('../src/assets/fond-feu.png')";
        case "Eau":
          return "url('../src/assets/fond-eau.png')";
        case "Plante":
          return "url('../src/assets/fond-plante.png')";
        case "Combat":
          return "url('../src/assets/fond-combat.png')";
        case "Dragon":
          return "url('../src/assets/fond-dragon.png')";
        case "Fée":
          return "url('../src/assets/fond-fee.png')";
        case "Glace":
          return "url('../src/assets/fond-glace.png')";
        case "Insecte":
          return "url('../src/assets/fond-insecte.png')";
        case "Électrik":
          return "url('../src/assets/fond-electrique.png')";
        case "Roche":
          return "url('../src/assets/fond-roche.png')";
        case "Poison":
          return "url('../src/assets/fond-poison.png')";
        case "Psy":
          return "url('../src/assets/fond-psy.png')";
        case "Sol":
          return "url('../src/assets/fond-sol.png')";
        case "Spectre":
          return "url('../src/assets/fond-spectre.png')";
        default:
          return "url('../src/assets/fond-normal.png')";
      }
    };
  
    const backgroundImage = backgroundImageGet(pokemon.types[0].name);

    const [flipped, setFlipped] = useState(false);
  
    const handleCardClick = () => {
      setFlipped(!flipped);
    };
  
    return (
      <div className={`card-container ${flipped ? 'flipped' : ''}`}>
          <div className="card card-front" style={{ backgroundImage }}>
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
              <img className="imgPokemon" src={pokemon.sprites.regular} alt={pokemon.name.fr} />
              <div className="description">
                  <p className="name">
                      {pokemon.name.fr} <span className="idPokemon">#{pokemon.pokedex_id}</span>
                  </p>
                  <p className="types">Type : {pokemon.types[0].name}<img src={pokemon.types[0].image} alt={pokemon.types[0].name} />
                      {pokemon.types[1] && (
                          <>
                            {pokemon.types[1].name}
                            <img src={pokemon.types[1].image} alt={pokemon.types[1].name} />
                          </>
                      )}
                  </p>
                  <span className='iconBackFace' onClick={handleCardClick}> &#x3009;</span>
              </div>
          </div>
          <div className="card card-back">
              <img className="imgPokemon" id="imgPokemonBack" src={pokemon.sprites.shiny} alt={pokemon.name.fr}/>
              <div className="description">
                  <p className="name">{pokemon.name.fr} Shiny 🌟</p>
                  <p className="types">C'est un {pokemon.category}.<br />Taille: {pokemon.height}<br />Poids: {pokemon.weight}</p>
                  <span className='iconBack' onClick={handleCardClick}>&#x3008;</span>
              </div>
          </div>
      </div>
  );
}