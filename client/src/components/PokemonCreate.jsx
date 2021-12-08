import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { PostPoke, GetTypes } from '../actions';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import error from '../components/create.error.css';

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
font-size: 14px;
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

function validate(input) {
    const errors = {};
    if (!input.name) {
        errors.name = '⚠️ Name is required ⚠️';
    }
    if (!input.types.length) {
        errors.types = '⚠️ Type/s is required ⚠️'
    }
    if (!input.hp) {
        errors.hp = '⚠️ Life is required ⚠️'
    }
    if (!input.attack) {
        errors.attack = '⚠️ Attack is required ⚠️'
    }
    if (!input.defense) {
        errors.defense = '⚠️ Defense is required ⚠️'
    }
    if (!input.speed) {
        errors.speed = '⚠️ Speed is required ⚠️'
    }
    if (!input.height) {
        errors.height = '⚠️ Height is required ⚠️'
    }
    if (!input.weight) {
        errors.weight = '⚠️ Weight is required ⚠️'
    }
    if (!input.image) {
        errors.image = '⚠️ Image is required ⚠️'
    }

    return errors;
};


export default function PokemonCreate() {
    const dispatch = useDispatch();
    const history = useHistory();
    const types = useSelector((state) => state.pokemonsTypes);
    const [errors, setErrors] = useState({});

    const [input, setInput] = useState({
        name: '',
        types: [],
        hp: '',
        attack: '',
        defense: '',
        speed: '',
        height: '',
        weight: '',
        image: '',
    })

    function handleChange(e) {     //guardar valores en state
        setInput({
            ...input,
            [e.target.name]: e.target.value   //saves target value of each input
        })
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }));
    }

    function handleSelect(e) {
        setInput({
            ...input,
            types: [...input.types, e.target.value]
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(PostPoke(input));
        alert('Pokemon successfully created');
        setInput({
            name: '',
            types: [],
            hp: '',
            attack: '',
            defense: '',
            speed: '',
            height: '',
            weight: '',
            image: '',
        });
        history.push('/home');
    }

    useEffect(() => {
        dispatch(GetTypes())
    }, [dispatch]);

    return (
        <Div>
            <H1><strong>Create Pokemon</strong></H1>
            <form onSubmit={e => handleSubmit(e)}>

                <div>
                    <P>How do you want to call your pokemon?</P>
                    <Input
                        placeholder="Name"
                        type='text'
                        value={input.name}
                        name='name'
                        onChange={handleChange}
                    />
                    {errors.name && (
                        <p className='error'>{errors.name}</p>
                    )}
                </div>

                <div>
                    <P>What type does it belong to?</P>
                    <Select onChange={e => handleSelect(e)}>
                        <option value="" disabled selected>Type</option>

                        {types.map((t) => (
                            <option value={t}> {t}</option>
                        ))}
                    </Select>
                    <ul>
                        <Li>Types selected : {input.types.map(e=>e+', ')} </Li>

                    </ul>
                    {errors.types && (
                        <p className='error'>{errors.types}</p>
                    )}
                </div>

                <div>
                    <P>Specify amount of life</P>
                    <Input
                        placeholder="Hp"
                        type='number'
                        value={input.hp}
                        name='hp'
                        onChange={handleChange}
                    />
                    {errors.hp && (
                        <p className='error'>{errors.hp}</p>
                    )}
                </div>

                <div>
                    <P>Specify amount of attack</P>
                    <Input
                        placeholder="Attack"
                        type='number'
                        value={input.attack}
                        name='attack'
                        onChange={handleChange}
                    />
                    {errors.attack && (
                        <p className='error'>{errors.attack}</p>
                    )}
                </div>

                <div>
                    <P>Specify amount of defense</P>
                    <Input
                        placeholder="Defense"
                        type='number'
                        value={input.defense}
                        name='defense'
                        onChange={handleChange}
                    />
                    {errors.defense && (
                        <p className='error'>{errors.defense}</p>
                    )}
                </div>

                <div>
                    <P>Specify amount of speed</P>
                    <Input
                        placeholder="Speed"
                        type='number'
                        value={input.speed}
                        name='speed'
                        onChange={handleChange}
                    />
                    {errors.speed && (
                        <p className='error'>{errors.speed}</p>
                    )}
                </div>

                <div>
                    <P>specify height</P>
                    <Input
                        placeholder="Height"
                        type='number'
                        value={input.height}
                        name='height'
                        onChange={handleChange}
                    />
                    {errors.height && (
                        <p className='error'>{errors.height}</p>
                    )}
                </div>

                <div>
                    <P>specify weight</P>
                    <Input
                        placeholder="Weight"
                        type='number'
                        value={input.weight}
                        name='weight'
                        onChange={handleChange}
                    />
                    {errors.weight && (
                        <p className='error'>{errors.weight}</p>
                    )}
                </div>

                <div>
                    <P>upload a photo of your pokemon</P>
                    <Input
                        placeholder="Image"
                        type='text'
                        value={input.image}
                        name='image'
                        onChange={handleChange}
                    />
                    {errors.image && (
                        <p className='error'>{errors.image}</p>
                    )}
                </div>

                <Button type='submit'>Create Pokemon!</Button>
                <Link to='/home'>
                    <Button>Back Home</Button>
                </Link>

            </form>
        </Div>
    )

}