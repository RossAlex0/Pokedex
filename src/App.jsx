import { useState , useEffect } from 'react';
import Header from './components/Header';
import './App.css';

function App() {
  const [pokemons, setPokemons] = useState();
  //image du pokemon = pokemon[76].sprites.regular
  // nom du pokemon = pokemon[76].name.fr
  // id pokemon = pokemon[76].pokedex_id
  // type pokemon = pokemon[76].types[0].name 

  useEffect(() => {
    fetch('https://tyradex.vercel.app/api/v1/gen/1')
      .then(response => response.json())
      .then((response) => { 
        setPokemons(response)
      })
  }, []);

  // axios

  return (
    <>
      <Header />
      {pokemons?.map((pokemon, index) => (
          <div className='oh' key={index}>
            <img src={pokemon.sprites.regular} alt={pokemon.name.fr} />
            <p>Nom: {pokemon.name.fr}</p>
            <p>ID: {pokemon.pokedex_id}</p>
            <p>Type: {pokemon.types[0].name}</p>
          </div>
        ))}
    </>
  );
}

export default App



// {pokedex_id: 1, generation: 1, category: 'Pokémon Graine', name: {…}, sprites: {…}, …}
// catch_rate
// : 
// 45
// category
// : 
// "Pokémon Graine"
// egg_groups
// : 
// (2) ['Monstrueux', 'Végétal']
// evolution
// : 
// {pre: null, next: Array(2), mega: null}
// formes
// : 
// null
// generation
// : 
// 1
// height
// : 
// "0,7 m"
// level_100
// : 
// 1059862
// name
// : 
// {fr: 'Bulbizarre', en: 'Bulbasaur', jp: 'フシギダネ'}
// pokedex_id
// : 
// 1
// resistances
// : 
// (18) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// sexe
// : 
// {male: 87.5, female: 12.5}
// sprites
// : 
// {regular: 'https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/1/regular.png', shiny: 'https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/1/shiny.png', gmax: null}
// stats
// : 
// {hp: 45, atk: 49, def: 49, spe_atk: 65, spe_def: 65, …}
// talents
// : 
// (2) [{…}, {…}]
// types
// : 
// (2) [{…}, {…}]
// weight
// : 
// "6,9 kg
