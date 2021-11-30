
const initialState = {
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
                pokemonsTotal:action.payload
            }
        default :
            return state;
    }
}

export default rootReducer;