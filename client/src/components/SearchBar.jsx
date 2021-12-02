import React from 'react';
import {useState} from 'react';
import { useDispatch } from 'react-redux';
import { getPokeNames } from '../actions';
import styled from 'styled-components';

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


    return (
        <div>
            <input
            type = 'text'
            placeholder = 'Search by name...'
            onChange={(e)=> handleInputChange(e)}
            />
            <button type='submit' onClick={(e)=> handleSubmit(e)}>search </button>
        </div>
    )

} 