import '../styles/Input.css'

export default function Inputs ({ valueId, valueName,  handleInputId, handleInputName, changeType , selectType}) {
    // Function crée pour rafraichir la page au clique afin réactualiser les cartes pokémon
    const handleClickRefresh = () => {
        window.location.reload();
      };
   
    return (
        <>
            <h2 className='h2Explor'>Mon Pokedex</h2>
            <h3 className='h3Explor'>Explorez et trouvez tous les pokémons de vos rêves.</h3>
            <div className="filter">
                <select name="pokType" className="input-search" id="searchByType" onChange={changeType} value={selectType}>
                    <option value=" ">--Choisir un type de pokémon--</option>
                    <option value="Feu" >--Feu🔥</option>
                    <option value="Normal" >--Normal🔶</option>
                    <option value="Eau" >--Eau💧</option>
                    <option value="Plante" >--Plante🍃</option>
                    <option value="Combat" >--Combat👊</option>
                    <option value="Dragon" >--Dragon🐲</option>
                    <option value="Fée" >--Fée💫</option>
                    <option value="Glace">--Glace❄️</option>
                    <option value="Insecte">--Insecte🕸</option>
                    <option value="Électrik">--Électrique⚡️</option>
                    <option value="Roche">--Roche🗿</option>
                    <option value="Poison">--Poison🍄</option>
                    <option value="Psy">--Psy🧠</option>
                    <option value="Sol">--Sol⛰️</option>
                    <option value="Spectre">--Spectre👻</option>
                    <option value="Vol">--Vol🌪️</option>
                </select>
                <input type='number' value={valueId} onChange={handleInputId} className="input-search" id="searchById" placeholder="--ID du pokémon--"/>
                <input type="text" value={valueName} onChange={handleInputName} className="input-search" id="searchByName" placeholder="--Nom du pokémon--"/>
                <button type='button' className='btn-refresh' onClick={handleClickRefresh} >&#x21ba;</button>
            </div>
        </>
    )
}