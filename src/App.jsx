import { useState , useEffect } from 'react';
import Header from './components/Header';
import Card from './components/Card';
import Inputs from './components/Inputs';
import './styles/App.css';

function App() {

  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch('https://tyradex.vercel.app/api/v1/gen/1')
      .then(response => response.json())
      .then((response) => { 
        setPokemons(response)
      })
  }, []);

    const [valueId, setValueId] = useState('');

    const [valueName, setValueName] = useState('');

    const [selectType, setSelectType] = useState('');

    const handleInputId = (input) => {
      setValueName('');
      setSelectType(" ");
      const searchId = input.target.value;
      setValueId(searchId);
  };

  const handleInputName = (input) => {
      setValueId('');
      setSelectType(" ");
      const searchValue = input.target.value.toLowerCase();
      setValueName(searchValue);
  };

    const changeType = (change) => {
        setValueId('');
        setValueName(''); 
        const selectTypes = change.target.value;
        setSelectType(selectTypes); 
    };

  const filterPokemons = pokemons.filter(pokemon => {
    if (valueId || valueName || selectType) {
      return (
        (valueId && pokemon.pokedex_id.toString() === valueId) ||
        (valueName && pokemon.name.fr && pokemon.name.fr.toLowerCase().includes(valueName)) ||
        (selectType && pokemon.types.some(type => type.name === selectType))
      );
    }else{
      return true; 
    }
  } );

    
 


  return (
    <>
      <Header />
      <Inputs 
          valueId={valueId} 
          valueName={valueName} 
          handleInputId={handleInputId} 
          handleInputName={handleInputName} 
          changeType={changeType}
          selectType={selectType}/>
      <section className='main'>
      <img src="./src/assets/pokeballbackg.png" className='pokeballBg' alt='pokeball'/>
        {filterPokemons?.map((pokemon) => (
              <Card key={pokemon.pokedex_id} pokemon={pokemon}/>
        ))}
      </section>
    </>
  );
    
};

export default App
