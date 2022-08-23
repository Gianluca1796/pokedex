import React, {useContext} from "react";
import FavoriteContext from "../context/favoritesContext";

const NavBar = () => {
    const {favoritePokemons} = useContext(FavoriteContext)
    return (
        <nav>
            <div>
                <p className="my-name">Gianluca Fava React-Dev.</p>
            </div>
            <div className="contador"> 
                <img className="pokebola-button" src="/img/pokebola.png" alt="pokebola" />
                {favoritePokemons.length} 
            </div>
        </nav>
    );
};

export default NavBar;
