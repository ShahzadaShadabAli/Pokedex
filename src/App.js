import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import Pokedex from "./containers/Pokedex";
import MainLayout from "./layouts/MainLayout";
import 'bootstrap/dist/css/bootstrap.min.css';
import PokemonDetails from "./containers/PokemonDetails";
import { FavouritePokemonsProvider } from "./context/FavouriteContext";
import FavPokemon from "./containers/FavPokemon";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<MainLayout />}>
      <Route path="/" element={<Pokedex />} />
      <Route path="/favPokemons" element={<FavPokemon />} />
      <Route path="/pokemon/:id" element={<PokemonDetails />} />
    </Route>
  )
)

function App() {
  return (
    <FavouritePokemonsProvider>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </FavouritePokemonsProvider>
  );
}

export default App;
