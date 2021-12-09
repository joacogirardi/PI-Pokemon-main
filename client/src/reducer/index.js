
const initialState = {
    pokemons: [],
    pokemonsTotal: [],
	pokemonsTypes: [],
    detail : []
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
        case 'ORDER_BY_NAME' :
            let sortbyname = action.payload === "asc" ?
                state.pokemonsTotal.sort(function(a,b){   
                    if(a.name > b.name){
                        return 1
                    }
                    if(b.name > a.name) {
                        return -1
                    }
                    return 0                          //si son iguales se mantienen en la misma posicion
                }) :
                state.pokemonsTotal.sort(function(a, b){
                    if(a.name > b.name){
                        return -1
                    }
                    if(b.name > a.name) {
                        return 1
                    }
                    return 0
                });
                return{
                    ...state,
                    pokemonsTotal : sortbyname
                }
        case 'ORDER_BY_ATTACK' :
            let sortbyAttack = action.payload === "asc" ?
                state.pokemonsTotal.sort(function(a,b){   
                    if(a.attack > b.attack){
                        return 1
                    }
                    if(b.attack > a.attack) {
                        return -1
                    }
                    return 0                         
                }) :
                state.pokemonsTotal.sort(function(a, b){
                    if(a.attack > b.attack){
                        return -1
                    }
                    if(b.attack > a.attack) {
                        return 1
                    }
                    return 0
                });
                return{
                    ...state,
                    pokemonsTotal : sortbyAttack
                }
        case 'GET_NAME_POKEMONS' :
            return{
                ...state,
                pokemonsTotal : action.payload
            }
        case 'POST_POKEMON' :
            return{
                ...state,
            }
        case 'GET_TYPES' :
            return{
                ...state,
                pokemonsTypes : action.payload
            }
        case 'GET_DETAILS' :
            return {
                ...state,
                detail : action.payload
            }
        default :
            return state;
    }
}

export default rootReducer;