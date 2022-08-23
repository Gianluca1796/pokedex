import React, { useState } from 'react'
import { searchPokemon } from '../api'


const SearchBar = () => {
    const [search, setSearch] = useState("dito")
    const [pokemon, setPokemon] = useState()

    const handleOnChange = (e) => {
        setSearch(e.target.value)
    }
    const handleOnButton = () => {
        handleOnSearch(search)
    }
    const handleOnSearch = async (pokemon) => {
        const result = await searchPokemon(pokemon)
        setPokemon(result)
    }

    return (
        <div className='searchBarContainer'>
            <div className='searchBar'>
                <input type="text" placeholder='Search pokémon' onChange={handleOnChange} />
                <button className='searchBar-btn' onClick={handleOnButton}>
                    Search
                </button>
            </div>
            {pokemon ? (
                <div className={`background-${pokemon.types[0].type.name} pokemon-card`}>
                    <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} className="pokemon-img" />
                    <div className="card-body">
                        <h3>Name: {pokemon.name}</h3>
                        <p>Wieght: {pokemon.weight}</p>
                    </div>
                </div>
            ) : null}
        </div>
    )
}

export default SearchBar