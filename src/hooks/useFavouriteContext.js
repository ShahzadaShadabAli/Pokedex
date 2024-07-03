import { useContext } from "react";
import { FavouritePokemons } from "../context/FavouriteContext";

const useFavouriteContext = () => {
    const values = useContext(FavouritePokemons)
    return values
}
 
export default useFavouriteContext;