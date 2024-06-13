export default function Card({pokemon}) {
    return (
    <>
        <div className="card">
            <img className="imgPokemon" src={pokemon.sprites.regular} alt={pokemon.name.fr}/>
            <div className="description">
                <p className="name">{pokemon.name.fr}   <span className="idPokemon">#{pokemon.pokedex_id}</span></p>
                <p className="types">Type : {pokemon.types[0].name}<img src={pokemon.types[0].image} alt={pokemon.types[0].name}/></p>
            </div>
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
        </div>
    </>
    )
}