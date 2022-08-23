import React, { useContext} from "react";
import FavoriteContext from "../context/favoritesContext";
import './pokemon.css';

const Pokemon = (props) => {
  const { favoritePokemons, updateFavoritePokemons } = useContext(FavoriteContext)
  const { pokemon } = props;

  const onHeartClick = () => {
    updateFavoritePokemons(pokemon.name)
  };



  const heart = favoritePokemons.includes(pokemon.name) ? <img className="pokebola-button" src="/img/pokebola.png" alt="pokebola"/> : <img className="pokebola-button" src="/img/pokebola-abierta.png" alt="pokebola abierta"/>;

  

  return ( 
    <div className={`background-${pokemon.types[0].type.name} pokemon-card`}>
      <div className="pokemon-img-container">
        <img
          src={pokemon.sprites.other.dream_world.front_default}
          alt={pokemon.name}
          className="pokemon-img"
        />
      </div>
      <div className="card-body">
        <div className="card-top">
          <h3>{pokemon.name}</h3>
          <p>{pokemon.id}</p>
        </div>
        <div className="card-bottom">
          <div className="pokemon-type">
            <div>
              {pokemon.types.map((type, index) => {
                return (
                  <div key={index} className="pokemon-type-text">
                    {type.type.name}
                  </div>
                );
              })}
            </div>
            <button className="pokemon-heart-btn" onClick={onHeartClick}>
              {heart} CATCH!
            </button>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Pokemon 
