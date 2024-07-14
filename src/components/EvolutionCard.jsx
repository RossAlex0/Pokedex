import PropTypes from 'prop-types'

import '../styles/evolutionCard.css'

export default function EvolutionCard ({ pokemon, evolutionState }) {

    const handleClickEvolutionVisible = () => {
        evolutionState.setShowEvolution(!evolutionState.showEvolution)
    }

return (   
    <>
        <div 
        className="cardEvo" 
        onClick={handleClickEvolutionVisible} 
        style={{ display: evolutionState.showEvolution ? 'flex' : 'none' }}
        >
        {pokemon.evolution && pokemon.evolution.pre && pokemon.evolution.pre[0] ? (
            <>
                <img className='imgEvo'
                    src={`https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/${pokemon.evolution.pre[0].pokedex_id}/regular.png`}
                    alt={pokemon.evolution.pre[0].name}
                />
                <p className="conditionEvo">
                    {pokemon.evolution.pre[0].condition}
                </p>
            </>
        ) : null}
        {pokemon.evolution && pokemon.evolution.pre && pokemon.evolution.pre[1] ? (
            <>
                <img className='imgEvo'
                    src={`https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/${pokemon.evolution.pre[1].pokedex_id}/regular.png`}
                    alt={pokemon.evolution.pre[1].name}
                />
                <p className="conditionEvo">
                    {pokemon.evolution.pre[1].condition}
                </p>
            </>
        ) : null}
        <img 
            className='imgEvo' 
            src={pokemon.sprites.regular} 
            alt={pokemon.name.fr} 
        />
        {pokemon.evolution && pokemon.evolution.next && pokemon.evolution.next[0] ? (
            <>
                <p className="conditionEvo">
                    {pokemon.evolution.next[0].condition}
                </p>
                <img className='imgEvo'
                    src={`https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/${pokemon.evolution.next[0].pokedex_id}/regular.png`}
                    alt={pokemon.evolution.next[0].name}
                />
            </>
        ) : null}
        {pokemon.evolution && pokemon.evolution.next && pokemon.evolution.next[1] ? (
            <>
                <p className="conditionEvo">
                    {pokemon.evolution.next[1].condition}
                </p>
                <img className='imgEvo'
                    src={`https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/${pokemon.evolution.next[1].pokedex_id}/regular.png`}
                    alt={pokemon.evolution.next[1].name}
                />
            </>
        ) : null}
   
        </div>
    </>
    )
}

EvolutionCard.propTypes = {
    pokemon: PropTypes.shape({
        evolution: PropTypes.shape({
            pre: PropTypes.arrayOf(
                PropTypes.shape({
                name: PropTypes.string.isRequired,
                pokedex_id: PropTypes.number.isRequired,
                condition: PropTypes.string.isRequired,
            })),
            next: PropTypes.arrayOf(
                PropTypes.shape({
                name: PropTypes.string.isRequired,
                pokedex_id: PropTypes.number.isRequired,
                condition: PropTypes.string.isRequired,
            })),
        }),
        sprites: PropTypes.shape({
            regular: PropTypes.string.isRequired,
        }).isRequired,
        name: PropTypes.shape({
            fr: PropTypes.string.isRequired
        }).isRequired,
    }).isRequired,
    evolutionState: PropTypes.shape({
        showEvolution: PropTypes.bool.isRequired,
        setShowEvolution: PropTypes.func.isRequired
    }).isRequired
}