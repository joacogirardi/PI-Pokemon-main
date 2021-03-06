import React from 'react';
import {useState} from 'react';
import { useDispatch } from 'react-redux';
import { getPokeNames } from '../actions';
import styled from 'styled-components';
import style from '../components/searchbar.css';

export default function SearchBar(){
    const dispatch = useDispatch();
    const [name, setName] = useState('');

    const handleInputChange = function(e){
        e.preventDefault();
        setName(e.target.value);

    }
    const handleSubmit = function (e) {
        e.preventDefault();
        dispatch(getPokeNames(name))
    }        

    const Button = styled.button`
    background-color: #ffcb05;
    border-color: #e7b700;
    `

    return (
        <div className='searchbar'>
            <input
            type = 'text'
            placeholder = 'Search by name...'
            onChange={(e)=> handleInputChange(e)}
            />
            <Button type='submit' onClick={(e)=> handleSubmit(e)}>search </Button>
        </div>
    )

} 