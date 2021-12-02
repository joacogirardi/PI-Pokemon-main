import React from 'react';
import {useState, useEffect} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { PostPoke, GetTypes } from '../actions';
import {useDispatch, useSelector} from 'react-redux';


export default function PokemonCreate(){
    const dispatch = useDispatch();
    const history = useHistory();
    const types = useSelector((state)=> state.pokemonsTypes);

    const [input, setInput]=useState({
        name : '',
        types : [],
        hp : '',
        attack : '',
        defense : '',
        speed : '',
        height : '',
        weight : '',
        image : '',
    })

    function handleChange(e){     //guardar valores en state
        setInput({
            ...input,
            [e.target.name] : e.target.value   //saves target value of each input
        })
    }

    function handleSelect(e){
        setInput({
            ...input,
            types : [...input.types, e.target.value]
        })
    }  

    function handleSubmit(e){
        e.preventDefault();
        dispatch(PostPoke(input))
        alert('Pokemon successfully created')
        setInput({
        name : '',
        types : [],
        hp : '',
        attack : '',
        defense : '',
        speed : '',
        height : '',
        weight : '',
        image : '',
        })
        history.push('/home')
    }

    useEffect(()=>{
        dispatch(GetTypes())
    },[dispatch]);

    return(
        <div>
            <Link to='/home'>
            <button>Back Home</button>
            </Link>
            <h1>Create Pokemon</h1>
            <form onSubmit={e=> handleSubmit(e)}>
            
                <div>
                    <label>Name</label>
                    <input
                        type= 'text'
                        value={input.name}
                        name='name'
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <select onChange={e=>handleSelect(e)}>
                        {types.map((t)=>(
                            <option value={t}> {t}</option>
                        ) )}
                    </select>
                    <ul><li> {input.types.map(e=> e+', ')} </li></ul>
                </div>

                <div>
                    <label>Hp</label>
                    <input
                        type= 'number'
                        value={input.hp}
                        name='hp'
                        onChange={handleChange}
                    />
                </div>
                
                <div>
                    <label>Attack</label>
                    <input
                        type= 'number'
                        value={input.attack}
                        name='attack'
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label>Defense</label>
                    <input
                        type= 'number'
                        value={input.defense}
                        name='defense'
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label>Speed</label>
                    <input
                        type= 'number'
                        value={input.speed}
                        name='speed'
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label>Height</label>
                    <input
                        type= 'number'
                        value={input.height}
                        name='height'
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label>Weight</label>
                    <input
                        type= 'number'
                        value={input.weight}
                        name='weight'
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label>Image</label>
                    <input
                        type= 'text'
                        value={input.image}
                        name='image'
                        onChange={handleChange}
                    />
                </div>

                <button type='submit'>Create Pokemon!</button>

            </form>
        </div>
    )

}