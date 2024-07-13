import { useRef, useState } from 'react';
import PropTypes from 'prop-types'

import TypePokemon from "../data/dataTypeSelect.json"

import '../styles/Input.css'

export default function Inputs ({ idState, nameState, typeState }) {

    const [focus, setFocus] = useState(false);

    const refClose1 = useRef(null);
    const refClose2 = useRef(null);
    const refClose3 = useRef(null);

    const focusSearch = () => {
        setFocus(true);
    };
    const blurSearch = () => {
        setFocus(false);
    }
    const handleClickReset = () => {
        idState.setValueId('');
        nameState.setValueName('');
        typeState.setSelectType('');
        refClose1.current.style.display = "none";
        refClose2.current.style.display = "none";
        refClose3.current.style.display = "none";
    };
    const handleChangeId = (e) => {
        nameState.setValueName('');
        typeState.setSelectType("");
        idState.setValueId(e.target.value);
        refClose1.current.style.display = "none";
        refClose2.current.style.display = "inline-block";
        refClose3.current.style.display = "none";
      };
      const handleChangeName = (e) => {
        idState.setValueId('');
        typeState.setSelectType("");
        nameState.setValueName(e.target.value.toLowerCase());
        refClose1.current.style.display = "none";
        refClose2.current.style.display = "none";
        refClose3.current.style.display = "inline-block";
      };
      const handleChangeSelect = (e) => {
        idState.setValueId('');
        nameState.setValueName('');
        typeState.setSelectType(e.target.value); 
        refClose1.current.style.display = "inline-block";
        refClose2.current.style.display = "none";
        refClose3.current.style.display = "none";
      };
  
    return (
        <>
            <h2 className='h2Explor'>Mon Pokedex</h2>
            <h3 className='h3Explor'>Explorez le vaste monde du Pokédex et découvrez tous les Pokémon de vos rêves.</h3>
            <div className="filter">
                <div className="div-search">
                    <select name="pokType" className="input-search" id="searchByType" onChange={handleChangeSelect} onBlur={blurSearch} onFocus={focusSearch} value={typeState.selectType}>
                        <option value="">Type du pokémon</option>
                        {TypePokemon.map((type)=> 
                            <option value={type.name} key={type.name}>{type.txt}</option>
                        )}
                    </select>
                    <button type='button' className='btn-close-search' id='close1' ref={refClose1} onClick={handleClickReset}
                     style={{ color: focus ? 'var(--white)' : 'var(--dark)' }}>X</button>
                </div>
                <div className="div-search">               
                    <input type='number' value={idState.valueId} onChange={handleChangeId} onBlur={blurSearch} onFocus={focusSearch} className="input-search" id="searchById" placeholder="&#x1F50E;&#xFE0E;  ID du pokémon"/>
                    <button type='button' className='btn-close-search' id='close2' ref={refClose2} onClick={handleClickReset}
                    style={{ color: focus ? 'var(--white)' : 'var(--dark)' }}>X</button>
                </div>
                <div className="div-search">
                    <input type="text" value={nameState.valueName} onChange={handleChangeName} onBlur={blurSearch} onFocus={focusSearch} className="input-search" id="searchByName" placeholder="&#x1F50E;&#xFE0E;  Nom du pokémon"/>
                    <button type='button' className='btn-close-search' id='close3' ref={refClose3} onClick={handleClickReset}
                    style={{ color: focus ? 'var(--white)' : 'var(--dark)' }}>X</button>
                </div>
            </div>
        </>
    )
}

Inputs.propTypes = {
    idState: PropTypes.shape({
      valueId: PropTypes.string.isRequired,
      setValueId: PropTypes.func.isRequired  
    }).isRequired,
    nameState: PropTypes.shape({
      valueName: PropTypes.string.isRequired,
      setValueName: PropTypes.func.isRequired  
    }).isRequired,
    typeState: PropTypes.shape({
      selectType: PropTypes.string.isRequired,
      setSelectType: PropTypes.func.isRequired  
    }).isRequired,
  };