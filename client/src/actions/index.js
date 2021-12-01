import axios from 'axios';


export const getPokemons= ()=>{
    return async (dispatch)=>{
        try{
            const json = await axios.get('http://localhost:3001/pokemons');
            return dispatch({
                type : 'GET_POKEMONS',
                payload : json.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export const filterPokesByType = (payload)=>{
    return {
        type: 'FILTER_BY_TYPE',
        payload
    }
}

export const filterCreated = (payload)=>{
    return {
        type : 'FILTER_CREATED',
        payload
    }
}