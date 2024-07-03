import CreateCards from "../CreateCards";
import { useEffect, useState } from "react";

const FavPokemon = () => {
    const [ pokemons, setPokemons ] = useState(null)
    useEffect(() => {
        if (localStorage.getItem('favPokemons')) {
            const data = JSON.parse(localStorage.getItem('favPokemons'))
            setPokemons(data)
        }
    }, [])

    return (
        <div className="fav-pokemon pt-5">
            {pokemons ? <CreateCards pokemons={pokemons}/> : <h1>Loading...</h1>}
        </div>
    );
}
 
export default FavPokemon;