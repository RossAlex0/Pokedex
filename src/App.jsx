import { useState , useEffect } from 'react';

import Header from './components/Header';
import Card from './components/Card';
import Inputs from './components/Inputs';

import './styles/App.css';

function App() {
  // Création d'un State pour stocker les données provenant de l'API
  const [pokemons, setPokemons] = useState([]);
  // Utilisation de useEffect pour améliorer la performance en
  useEffect(() => {
    // Effectue une requête API pour récupérer les données de s pokémons de première génération
    fetch('https://tyradex.vercel.app/api/v1/gen/1')
        // Transforme la réponse en un objet JSON
        .then(response => response.json())
        .then((response) => { 
        setPokemons(response) // Met à jour l'état de pokemons
      })
  }, []);

  // Création du State qui servira à stocker la valeur de l'input 'ID'
  const [valueId, setValueId] = useState('');
  const handleInputId = (input) => {
    // Réinitialisation des valeurs de l'input
    setValueName('');
    setSelectType(" ");
    // 
    const searchId = input.target.value;
    // Met à jour valueId avec la valeur de l'input cibler
    setValueId(searchId); 
  };

  // Création du State qui servira à stocker la valeur de l'input 'name'
  const [valueName, setValueName] = useState('');
  const handleInputName = (input) => {
    // Réinitialisation des valeurs de l'input
    setValueId('');
    setSelectType(" ");
    // 
    const searchValue = input.target.value.toLowerCase();
    // Met à jour valueName avec la valeur de l'input cibler
    setValueName(searchValue);
  };

  const [selectType, setSelectType] = useState('');
  const changeType = (change) => {
    // Réinitialisation des valeurs de l'input
    setValueId('');
    setValueName(''); 
    // 
    const selectTypes = change.target.value;
    // Met à jour slectType en prenant la valeur de l'option cliquer dans le select cibler
    setSelectType(selectTypes); 
  };

  // Création d'un filtre pour les pokémon en utilisant les valeurs défini dans le composant input
  const filterPokemons = pokemons.filter(pokemon => {
    // Vérifie si au moins un des critères de filtrage est défini
    if (valueId || valueName || selectType) {
      return (
         // Vérifie si l'ID du Pokémon correspond à la valeur saisie
        (valueId && pokemon.pokedex_id.toString() === valueId) || 
        // Vérifie si le nom du Pokémon contient la valeur saisie 
        (valueName && pokemon.name.fr && pokemon.name.fr.toLowerCase().includes(valueName)) ||
        // Vérifie si le type d'un Pokemon correspondant au type sélectionné
        (selectType && pokemon.types.some(type => type.name === selectType))
      );
    }else{
      // Si les filtres ne renvoie aucune valeur renvoie tous les pokemon
      return true; 
    }
  } );

  return (
    <>
      <Header />
      <Inputs 
          // Props pour transmettre des valeurs ou fonctions à l'élément enfant via
          valueId={valueId} 
          valueName={valueName} 
          handleInputId={handleInputId} 
          handleInputName={handleInputName} 
          changeType={changeType}
          selectType={selectType}
          />
      <section className='main'>
      <img src="./src/assets/pokeballbackg.png" className='pokeballBg' alt='pokeball'/>
        {filterPokemons?.map((pokemon) => (
        // Crée un composant Card pour chaque Pokémon filtré avec filterPokemons 
              <Card key={pokemon.pokedex_id} pokemon={pokemon}/>
        ))}
      </section>
    </>
  );
    
};

export default App


