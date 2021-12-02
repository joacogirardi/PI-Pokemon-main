import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import { getPokemons, filterPokesByType, filterCreated, orderByName, orderByAttack } from "../actions";
import Card from "./Card";
import SearchBar from "./SearchBar";
import Paginado from "./Paginado";
import styled from 'styled-components';


const Div = styled.div`
background-color: #00000075;
display: block;
position: static;
`

const Home = function  (){
    const dispatch = useDispatch();
    const allPokemons = useSelector((s)=> s.pokemonsTotal);
    //paginado
    const [currentPage, setCurrentPage] = useState(1);                      //actual page
    const [pokemonsPerPage, setPokemonsPerPage] = useState(12);             //pokes per page
    const indexLastPokemon = currentPage * pokemonsPerPage                              //index last pokemon
    const indexFirstPokemon = indexLastPokemon - pokemonsPerPage                        //index first pokemon
    const currentPokemons = allPokemons.slice(indexFirstPokemon, indexLastPokemon)      //pokemons actual page
    
    
    const paginado = (pageNumber)=> {
        setCurrentPage(pageNumber)
    }
    
    useEffect(()=>{
        dispatch(getPokemons())
    },[dispatch])

    
    function HandleClick(e){
        e.preventDefault();
        dispatch(getPokemons())
    };

    function handleFIlterType(e){
        dispatch(filterPokesByType(e.target.value));
    };

    function handleFilterCreated(e){
        dispatch(filterCreated(e.target.value))
    };
    
    const [order, setOrder] = useState('');   //seteo de local state
    function handleSortName(e){
        e.preventDefault();
        dispatch(orderByName(e.target.value));
        setCurrentPage(1);               //seteado primer pagina a ordenar
        setOrder(`order ${e.target.value}`);
    };
    function handleSortAttack(e){
        e.preventDefault();
        dispatch(orderByAttack(e.target.value));
        setCurrentPage(1);             
        setOrder(`order ${e.target.value}`);
    };

    return(

        <div>
            <Div>
            <Link to={"/home"}>
            <img src='https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg' alt='not found' />
            </Link>
            <Link to= '/pokemon'>
            <button>Create Pokemon</button>    
            </Link>
            <button onClick={e=> {HandleClick(e)}}>
                Remove filters
            </button>
            <SearchBar />
                <p>Order by Name</p>
                <select onChange={e =>handleSortName(e)}>
                    <option value='asc'>Ascendent</option>
                    <option value='desc'>Descendent</option>
                </select>
                <p>Order by Strong</p>
                <select onChange={e =>handleSortAttack(e)}>
                    <option value='asc'>Ascendent</option>
                    <option value='desc'>Descendent</option>
                </select>
                <p>Filter by Created</p>
                <select onChange={e =>handleFilterCreated(e)}> 
                    <option value="all">all</option>
                    <option value="created">created</option>
                </select>
                <p>Filter by Type</p>
                <select onChange={e => handleFIlterType(e)}> 
                    <option value="all">all</option>  
                    <option value="normal">normal</option>  
                    <option value="grass">grass</option>  
                    <option value="poison">poison</option>  
                    <option value="fire">fire</option>  
                    <option value="flying">flying</option>  
                    <option value="water">water</option>  
                    <option value="bug">bug</option>  
                    <option value="electric">electric</option>  
                    <option value="ground">ground</option>  
                    <option value="fairy">fairy</option>  
                </select>
                </Div>
            <div>
                <Paginado
                pokemonsPerPage= {pokemonsPerPage}
                allPokemons= {allPokemons.length}
                paginado= {paginado}
                />
                {    
                    currentPokemons?.map((p)=>{
                        let t = '';
                        if (typeof p.types !== 'string'){
                             t = p.types.map(e=>e.name).join();
                        }
                        else t = p.types
                        return(
                            <Fragment >
                                <Link to={"/pokemons/" + p.id}>
                            <Card name={p.name} image={p.image} type={t} />
                                </Link>
                            </Fragment>
                        )
                })
                }
            </div>
        </div>
    )
}

export default Home;