
const initialState = {
    pokemons: [],
    pokemonsTotal: [],
	pokemonDetail: {},
	pokemonsTypes: [],
	pokemonsFilter: [],
};

const rootReducer = (state = initialState, action)=>{
    switch(action.type) {
        case 'GET_POKEMONS':
            return{
                ...state,
                pokemonsTotal:action.payload,
                pokemons : action.payload
            }

        case 'FILTER_BY_TYPE' :
            const allPokes = state.pokemons;
            const typesFilter = action.payload === "all" ? allPokes : allPokes.filter(p=> p.types.includes(action.payload));
            return{
                ...state,
                pokemonsTotal : typesFilter
            }
        case 'FILTER_CREATED' :
            const allPokesFiltered = state.pokemons;
            const createdFilter = action.payload === "created"? allPokesFiltered.filter(p => p.id.length > 5) : allPokesFiltered.filter(p => p.id.length < 5);
            return{
                ...state,
                pokemonsTotal : action.payload === 'all' ? state.pokemons : createdFilter
            }
        default :
            return state;
    }
}


export default rootReducer;