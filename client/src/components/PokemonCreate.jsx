import React from 'react';
import {useState, useEffect} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { PostPoke, GetTypes } from '../actions';
import {useDispatch, useSelector} from 'react-redux';
import styled from 'styled-components';

const Div = styled.div`
background-color: #58003e61;
display: inline-grid;
padding: 97px;
margin: 59px;
border-radius: 36px;
box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
`

const Li = styled.li`
color: white;
position : relative;
bottom: 8px;
`

const H1 = styled.h1`
color: #ffcb05;
position: relative;
bottom: 60px;
`

const Button = styled.button`
width: 72%;
position: relative;
top: 50px;
border-radius: 6px;
cursor: pointer;
background-color: #ffcb05;
`

const Select = styled.select`
width : 177px;
background-color: black;
color: #7e7e7e;
margin: 13px;
`

const Input = styled.input`
background-color: black;
border-color: black;
color : white;
margin: 13px;
`
const P = styled.p`
position: relative;
padding: 8px;
color: white;
border-radius: 61px;
background-color: #00000054;
font-size: 14px;
margin: auto;
display: table;
`


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
        <Div>
            <H1><strong>Create Pokemon</strong></H1>
            <form onSubmit={e=> handleSubmit(e)}>
            
                <div>
                    <P>How do you want to call your pokemon?</P>
                    <Input
                        placeholder="Name"
                        type= 'text'
                        value={input.name}
                        name='name'
                        onChange={handleChange}
                    />
                </div>

                <div>
                <P>What type does it belong to?</P>
                    <Select onChange={e=>handleSelect(e)}>
                <option value="" disabled selected>Type</option>

                        {types.map((t)=>(
                            <option value={t}> {t}</option>
                        ) )}
                    </Select>
                    <ul><Li> {input.types.map(e=> e+', ')} </Li></ul>
                </div>

                <div>
                    <P>Specify amount of life</P>
                    <Input
                        placeholder="Hp"
                        type= 'number'
                        value={input.hp}
                        name='hp'
                        onChange={handleChange}
                    />
                </div>
                
                <div>
                <P>Specify amount of attack</P>
                    <Input
                        placeholder="Attack"
                        type= 'number'
                        value={input.attack}
                        name='attack'
                        onChange={handleChange}
                    />
                </div>

                <div>
                <P>Specify amount of defense</P>
                    <Input
                        placeholder="Defense"
                        type= 'number'
                        value={input.defense}
                        name='defense'
                        onChange={handleChange}
                    />
                </div>

                <div>
                <P>Specify amount of speed</P>
                    <Input
                        placeholder="Speed"
                        type= 'number'
                        value={input.speed}
                        name='speed'
                        onChange={handleChange}
                    />
                </div>

                <div>
                <P>specify height</P>
                    <Input
                        placeholder="Height"
                        type= 'number'
                        value={input.height}
                        name='height'
                        onChange={handleChange}
                    />
                </div>

                <div>
                <P>specify weight</P>
                    <Input
                        placeholder="Weight"
                        type= 'number'
                        value={input.weight}
                        name='weight'
                        onChange={handleChange}
                    />
                </div>

                <div>
                <P>upload a photo of your pokemon</P>
                    <Input
                        placeholder="Image"
                        type= 'text'
                        value={input.image}
                        name='image'
                        onChange={handleChange}
                    />
                </div>

                <Button type='submit'>Create Pokemon!</Button>
                <Link to='/home'>
            <Button>Back Home</Button>
            </Link>

            </form>
        </Div>
    )

}