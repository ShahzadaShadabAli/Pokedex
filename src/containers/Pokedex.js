import axios from "axios";
import { useEffect, useState } from "react";
import CreateCards from "../CreateCards";

const Pokedex = () => {
    let formattedPokemons = []
    const [ pokemons, setPokemons ] = useState(null)
    
    useEffect(() => {
        const api_url = process.env.REACT_APP_POKEMON_API_URL
        const img_url = process.env.REACT_APP_IMAGE_API_URL
        const fetchPokemons = async () => {
            try {
                const response = await axios.get(`${api_url}?limit=800`)
                const data = response.data.results
                data.forEach((d, index) => {
                    index++
                    const formattedData = {
                        id: index,
                        name: d.name,
                        img: img_url + index + ".png"
                    }
                    formattedPokemons.push(formattedData)
                })
                setPokemons(formattedPokemons)
            } catch (error) {
                console.log(error.message)
            }
        }
        fetchPokemons()
    }, [])
    return (
        <div className="pokedex pt-5">
            {pokemons ? <CreateCards pokemons={pokemons} /> : <h1>loading...</h1>}
        </div>
    );
}
 
export default Pokedex;