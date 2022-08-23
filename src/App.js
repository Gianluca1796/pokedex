import {useEffect, useState } from "react";
import { Modal } from "reactstrap";
import { getPokemonData, getPokemons } from "./api";
import "./App.css";
import NavBar from "./components/NavBar";
import Pokedex from "./components/Pokedex";
import SearchBar from "./components/SearchBar";
import { FavoriteProvider } from "./context/favoritesContext";
import {Howl} from 'howler';


function App() {
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(true)
  const [pokemons, setPokemons] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const itemsPerPage = 25;

  let sound = new Howl({
    src : ['/sounds/Pokemon.mp3'],
    volume: 0.1
  })
  let soundClick = new Howl ({
    src : ['/sounds/gameboy.mp3']
  })

  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const data = await getPokemons(itemsPerPage, itemsPerPage * page);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });

      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
      setTotalPages(Math.ceil(data.count / itemsPerPage));
    } catch (error) {
      console.log("fetchPokemons error: ", error);
    }
  };
  useEffect(() => {
    fetchPokemons();
  }, [page]);

  const updateFavoritePokemons = (name) => {
    const updatedFavorites = [...favorites]
    const favoriteIndex = favorites.indexOf(name)
    if (favoriteIndex >= 0) {
      updatedFavorites.slice(favoriteIndex, 1)
    } else {
      updatedFavorites.push(name)
    }
    setFavorites(updatedFavorites)
  }
  const abrirModal = () => {
    setModal(!modal);
    sound.play()
    soundClick.play()
  }

  return (
    <FavoriteProvider
      value={{ favoritePokemons: favorites, updateFavoritePokemons: updateFavoritePokemons }}>
      <Modal className="screen" isOpen={modal}>
      <h1>Click on the Pokeball!</h1>
      <img onClick={abrirModal} src="/img/tenor.gif" alt="poke-start"/>
      </Modal>
      <div>
        <NavBar />
        <SearchBar />
        <Pokedex
          pokemons={pokemons}
          loading={loading}
          setPage={setPage}
          page={page}
          totalPages={totalPages}
        />
      </div>
    </FavoriteProvider>
  );
}

export default App;
