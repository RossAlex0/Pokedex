import { useState } from 'react';

import "../styles/card.css"

// Un Props 'pokemon' pour transférer les données de l'API à partir d'un State défini dans App.jsx
export default function Card({ pokemon , pokemons }) {
    // Création d'un objet contenant tous les types pour les relier à leurs noms d'image.
    const typeForBackground = {
      Feu: 'feu' , Eau: 'eau' , Plante: 'plante',
      Combat: 'combat' , Acier: 'acier' , Ténèbres: 'tenebres' ,
      Dragon: 'dragon' , Fée: 'fee' , Glace: 'glace',
      Insecte: 'insecte' , Électrik: 'electrique' , Roche: 'roche',
      Poison: 'poison' , Psy: 'psy' , Sol: 'sol',
      Spectre: 'spectre' , Vol: 'vol' 
    };
    
    // Création de l'url pour récupérer le Background en fonction du type du pokemon
    const backgroundImage = `url('/fond-${typeForBackground[pokemon.types[0].name] || "normal"}.png')`;
    
    // Utilisation d'un State pour stocker la valeur initialisée 'true' et l'inverser au clic grâce à une fonction
    const [flipped, setFlipped] = useState(false);  
    const handleCardClick = () => {
      setFlipped(!flipped);
    };
    return (
      // Vérifie si 'flipped' retourne true, si c'est le cas, il ajoute la classe 'flipped' à la division
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
               {/* <CardEvo /> map ca pour refaire le systeme de de App.jsx (hard) */}
              <div className="description">
                  <p className="name">
                      {pokemon.name.fr} <span className="idPokemon">#{pokemon.pokedex_id}</span>
                  </p>
                  <p className="types">Type: {pokemon.types[0].name}<img src={pokemon.types[0].image} alt={pokemon.types[0].name} />
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