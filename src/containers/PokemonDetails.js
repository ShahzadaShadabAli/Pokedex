import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFavouriteContext from "../hooks/useFavouriteContext";

const PokemonDetails = () => {
    const [isAdded, setIsAdded] = useState(false)
    const {state, dispatch} = useFavouriteContext()
    const id = useParams().id
    let type = ''
    const [ pokemon, setPokemon ] = useState(null)
    
    useEffect(() => {
        const api_url = process.env.REACT_APP_POKEMON_API_URL;
        const fetchPokemons = async () => {
            try {
                const response = await axios.get(`${api_url}/${id}`);
                setPokemon(response.data);
            } catch (error) {
                console.log(error.message);
            }
        };
        fetchPokemons();
    }, [id]);

    useEffect(() => {
        if (pokemon) {
            const exists = state.filter(s => s.id === pokemon.id).length > 0;
            setIsAdded(exists);
        }
    }, [pokemon, state]);


    const addToFavorite = (pokemon) => {
        dispatch({method: "TOGGLE_FAVORITE", payload: pokemon})

        const exists = state.filter(s => s.id === pokemon.id) ? true : false
        setIsAdded(exists)
    }

    return (
        <div className="pokemon-details">
            {pokemon && <div className="pokemon-area d-flex flex-column justify-content-between align-items-center">
                <h1>{pokemon.name}</h1>
                <img src={pokemon.sprites.front_default} width="700" alt="" />
                <div className="details d-flex justify-content-between w-75 mx-auto">
                <i class="fa-solid fa-heart details-heart-icon" style={{color: isAdded ? "yellow" : "white"}} onClick={() => addToFavorite(pokemon)}></i>
                    <div>
                        <h3>Name</h3>
                        <h3>{pokemon.name}</h3>
                    </div>
                    <div>
                        <h3>Height</h3>
                        <h3>{pokemon.height}cm</h3>
                    </div>
                    <div>
                        <h3>Weight</h3>
                        <h3>{pokemon.weight}kg</h3>
                    </div>
                    <div>
                        <h3>Type</h3>
                        {pokemon.types.forEach((t, i) => {
                            if (i == 0) {
                                type = t.type.name
                            } else {
                                type += " & "+t.type.name
                            }
                        })}
                        <h3>{type}</h3>
                    </div>
                </div>
            </div>}
        </div>
    );
}
 
export default PokemonDetails;