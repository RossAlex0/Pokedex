import '../styles/Input.css'
import { useState } from 'react';
export default function Inputs ({ idState, nameState, typeState, handleInputId, handleInputName, changeType }) {
// Fonction pour réinitialiser les valeurs des State sélectionnés
const resetFilters = () => {
    idState.setValueId('');
    nameState.setValueName('');
    typeState.setSelectType('');
    close1.style.display = "none";
    close2.style.display = "none";
    close3.style.display = "none";
};
// Création d'un State pour gérer l'effet de focus et la couleur bu bouton de reset  
const [focus, setFocus] = useState(false);
// Quand l'input est focus, on change l'état du state (true)
const focusSearch = () => {
    setFocus(true);
};
// Quand l'input n'est plus focus, on change l'état du State (false)
const blurSearch = () => {
    setFocus(false);
}
  
    return (
        <>
            <h2 className='h2Explor'>Mon Pokedex</h2>
            <h3 className='h3Explor'>Explorez le vaste monde du Pokédex et découvrez tous les Pokémon de vos rêves.</h3>
            <div className="filter">
                <div className="div-search">
                    <select name="pokType" className="input-search" id="searchByType" onChange={changeType} onBlur={blurSearch} onFocus={focusSearch} value={typeState.selectType}>
                        <option value="">Type du pokémon</option>
                        <option value="Feu" >Feu  🔥</option>
                        <option value="Normal" >Normal  🔶</option>
                        <option value="Eau" >Eau  💧</option>
                        <option value="Plante" >Plante  🍃</option>
                        <option value="Combat" >Combat  👊</option>
                        <option value="Dragon" >Dragon  🐲</option>
                        <option value="Fée" >Fée  💫</option>
                        <option value="Glace">Glace  ❄️</option>
                        <option value="Insecte">Insecte  🕸</option>
                        <option value="Électrik">Électrique  ⚡️</option>
                        <option value="Roche">Roche  🗿</option>
                        <option value="Poison">Poison  🍄</option>
                        <option value="Psy">Psy  🧠</option>
                        <option value="Sol">Sol  ⛰️</option>
                        <option value="Spectre">Spectre  👻</option>
                        <option value="Vol">Vol  🌪️</option>
                        <option value="Ténèbres">Ténèbres 🌙</option>
                        <option value="Acier">Acier 🛡️</option>
                    </select>
                    <button type='button' className='btn-close-search' id='close1' onClick={resetFilters}
                     style={{ color: focus ? 'var(--white)' : 'var(--dark)' }}>X</button>
                </div>
                <div className="div-search">               
                    <input type='number' value={idState.valueId} onChange={handleInputId} onBlur={blurSearch} onFocus={focusSearch} className="input-search" id="searchById" placeholder="&#x1F50E;&#xFE0E;  ID du pokémon"/>
                    <button type='button' className='btn-close-search' id='close2' onClick={resetFilters}
                    style={{ color: focus ? 'var(--white)' : 'var(--dark)' }}>X</button>
                </div>
                <div className="div-search">
                    <input type="text" value={nameState.valueName} onChange={handleInputName} onBlur={blurSearch} onFocus={focusSearch} className="input-search" id="searchByName" placeholder="&#x1F50E;&#xFE0E;  Nom du pokémon"/>
                    <button type='button' className='btn-close-search' id='close3' onClick={resetFilters}
                    style={{ color: focus ? 'var(--white)' : 'var(--dark)' }}>X</button>
                </div>
                {/* <button type='button' className='btn-refresh' onClick={resetFilters} >&#x21ba;</button> */}
            </div>
        </>
    )
}