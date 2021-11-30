import axios from 'axios';


export const getPokemons= ()=>{
    return async (dispatch)=>{
        const json = await axios.get('http://localhost:3001/pokemons');
        return dispatch({
            type : 'GET_POKEMONS',
            payload : json.data
        })
    }
}