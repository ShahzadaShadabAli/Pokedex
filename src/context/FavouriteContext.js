import { createContext, useReducer } from "react";

export const FavouritePokemons = createContext()

const reduce = (state, action) => {
    switch (action.method) {
        case "TOGGLE_FAVORITE":
            const exists = state.filter(f => f.id === action.payload.id);
            if (exists.length > 0) {
                console.log("Removed");
                const reducedState = state.filter(s => s.id !== action.payload.id)
                localStorage.setItem('favPokemons', JSON.stringify(reducedState))
                return reducedState;
            } else {
                console.log("Added");
                localStorage.setItem('favPokemons', JSON.stringify([...state, action.payload]))
                return [...state, action.payload];
            }
        default:
            return state;
    }
};

export const FavouritePokemonsProvider = ({children}) => {
    const [ state, dispatch ] = useReducer(reduce, [])
    return (
        <FavouritePokemons.Provider value={{state, dispatch}}>
            {children}
        </FavouritePokemons.Provider>
    )
}