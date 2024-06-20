import { useState , useEffect } from 'react';
import Lottie from 'lottie-react';

import Header from './components/Header';
import Card from './components/Card';
import Inputs from './components/Inputs';

import pokeBallBg from './assets/pokeballbackg.png';
import ronflex from './assets/ronflex.json';
import './styles/App.css';

function App() {
  // Création d'un State pour stocker les données provenant de l'API
  const [pokemons, setPokemons] = useState([]);
  // Utilisation de useEffect pour améliorer les performances en mettant à jour
  //  la liste de pokémons une seule fois lorsque le composant est créé
  useEffect(() => {
    // Effectue une requête API pour récupérer les données de s pokémons de première génération
   fetch('https://tyradex.vercel.app/api/v1/gen/1')
        // Transforme la réponse en un objet JSON
        .then(response => response.json())
        .then((response) => { 
        setPokemons(response) // Met à jour l'état de pokemons
      })
  }, []);

  // Création du State qui servira à stocker la valeur de l'input 'searchById'
  const [valueId, setValueId] = useState('');
  const handleInputId = (input) => {
    // Modifie la visibilité des bouttons de rafraichissement des inputs
    close1.style.display = "none"
    close2.style.display = "inline-block"
    close3.style.display = "none"
    // 
    // Réinitialisation des valeurs de l'input
    setValueName('');
    setSelectType(" ");
    // 
    const searchId = input.target.value;
    // Met à jour valueId avec la valeur de l'input cibler
    setValueId(searchId); 
  };

  // Création du State qui servira à stocker la valeur de l'input 'searchByName'
  const [valueName, setValueName] = useState('');
  const handleInputName = (input) => {
    // Modifie la visibilité des bouttons de rafraichissement des inputs
    close1.style.display = "none"
    close2.style.display = "none"
    close3.style.display = "inline-block"
    // 
    // Réinitialisation des valeurs de l'input
    setValueId('');
    setSelectType(" ");
    // 
    const searchValue = input.target.value.toLowerCase();
    // Met à jour valueName avec la valeur de l'input cibler
    setValueName(searchValue);
  };

  // Création du state qui servira à stocker la valeur du select 'searchByType'
  const [selectType, setSelectType] = useState('');
  const changeType = (change) => {
    // Modifie la visibilité des bouttons de rafraichissement des inputs
    close1.style.display = "inline-block"
    close2.style.display = "none"
    close3.style.display = "none"
    // 
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
        (valueId && pokemon.pokedex_id.toString().includes(valueId)) || 
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
// Si 'pokemons='true'( n'est pas vide ), alors le Hook useEffect 
// s'exécutera à chaque fois que valueId ou valueName change
pokemons? useEffect(() => {
  // Sélectionne tous les éléments avec la classe 'card-container'
  const numbersOfCards = document.querySelectorAll('.card-container');
  // Vérifie si le nombre d'éléments 'card-container' est égal à 0
  // et si valueId ou valueName ne sont pas vides
  if(numbersOfCards.length === 0 && (valueId !== "" || valueName !== "")){
    animatEmpty.style.display = "flex"
  }else{
    animatEmpty.style.display = "none"
  }
},[valueId, valueName]) : null;

  return (
    <>
      <Header />
      <Inputs 
          // Props pour transmettre des valeurs ou fonctions à l'élément enfant via
          valueId={valueId} 
          valueName={valueName}
          setValueName={setValueName}
          setValueId={setValueId} 
          handleInputId={handleInputId} 
          handleInputName={handleInputName} 
          changeType={changeType}
          selectType={selectType}
          setSelectType={setSelectType}
          />
      <section className='main'>
      <img src={pokeBallBg} className='pokeballBg' alt='pokeball'/>
      <div id='animatEmpty'>
        <div className="animat">
          <Lottie animationData={ronflex} loop={true}/>
        </div>
        <p id='text-notFound'>POKEMON NOT FOUND!</p>
      </div>
        {filterPokemons?.map((pokemon) => (
        // Crée un composant Card pour chaque Pokémon filtré avec filterPokemons 
              <Card key={pokemon.pokedex_id} pokemon={pokemon}/>
        ))}
      </section>
    </>
  );
    
};

export default App


