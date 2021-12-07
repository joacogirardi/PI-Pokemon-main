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

export const getPokeNames = (payload)=>{
    return async function(dispatch){
        try {
            let json = await axios.get('http://localhost:3001/pokemons?name=' + payload);
            return dispatch({
                type : 'GET_NAME_POKEMONS',
                payload : json.data
            })
        } catch (error){
            console.log(error)
        }
    }
}

export const GetTypes = ()=>{
   return async function(dispatch){
       try{
           let json = await axios.get('http://localhost:3001/types',{
   
           });
           return dispatch({
                type : 'GET_TYPES',
                payload : json.data   
           })
        } catch(error) {
            console.log(error)
        }
   } 
}

export const PostPoke = (payload)=>{
    return async function(){
        let json = await axios.post('http://localhost:3001/pokemons', payload);
        return json;
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

export const orderByName = (payload)=>{
    return {
        type : 'ORDER_BY_NAME',
        payload
    }
}

export const orderByAttack = (payload)=>{
    return {
        type : 'ORDER_BY_ATTACK',
        payload
    } 
}

export const getDetail = (id)=>{
    return async function(dispatch){
        try{
            let url = 'http://localhost:3001/pokemons/' + id;
            const json = await axios.get(url);
            return dispatch({
                type : 'GET_DETAILS',
                payload : json.data
            })
        } catch(error){
            console.log(error)
        }
    }
}