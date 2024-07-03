import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import useFavouriteContext from "../hooks/useFavouriteContext";

const MainLayout = () => { 
    const [pokemons, setPokemons] = useState(null);
    const { state, dispatch } = useFavouriteContext();

    useEffect(() => {
        const favPokemons = JSON.parse(localStorage.getItem('favPokemons'));
        if (favPokemons.length > 0) {
            setPokemons(favPokemons);
        }
    }, []);

    useEffect(() => {
        if (pokemons && pokemons.length > 0) {
            pokemons.forEach((pokemon) => {
                console.log(pokemon)
                dispatch({ method: "TOGGLE_FAVORITE", payload: pokemon });
            });
        }
    }, [pokemons, dispatch]);
   
    return (
        <div className="main">
            <Header />
            {<Outlet />}
        </div>
    );
}
 
export default MainLayout;