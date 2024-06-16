import '../styles/Input.css'

export default function Inputs () {
    return (
        <>
            <div className="filter">
                <select name="pokType" className="input-search" id="searchByType">
                    <option value="">--Choisir un type de pokémon--</option>
                    <option value="Feu">--Feu🔥</option>
                    <option value="Normal">--Normal🔶</option>
                    <option value="Eau">--Eau💧</option>
                    <option value="Plante">--Plante🍃</option>
                    <option value="Combat">--Combat👊</option>
                    <option value="Dragon">--Dragon🐲</option>
                    <option value="Fée">--Fée💫</option>
                    <option value="Glace">--Glace❄️</option>
                    <option value="Insecte">--Insecte🕸</option>
                    <option value="Électrik">--Électrique⚡️</option>
                    <option value="Roche">--Roche🗿</option>
                    <option value="Poison">--Poison🍄</option>
                    <option value="Psy">--Psy🧠</option>
                    <option value="Sol">--Sol⛰️</option>
                    <option value="Spectre">--Spectre👻</option>
                </select>
                <input type="text" className="input-search" id="searchById" placeholder="--Id du pokémon--"></input>
                <input type="text" className="input-search" id="searchByName" placeholder="--Nom du pokémon--"></input>
            </div>
        </>
    )
}