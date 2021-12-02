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
display: flex;
position: relative;
height: 80px;
box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
`

const Img = styled.img`
height: 60px;
padding: 5px;
margin: 6px;
margin-top: 3px;
margin-bottom: -19px;
`

const Select = styled.select`
height: 25px;
position: relative;
background-color: #9b9b9b;
margin: 6px;
top: 35px;
left: 135px;
`

const Button = styled.button`
background-color: #ffcb05;
height: 40px;
position: relative;
left: 284px;
top: 20px;
border-radius: 12px;
`

const P = styled.p`
color: #fff1f1;
position: relative;
bottom: -10px;
padding: 10px;
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
            <Img src='https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg' alt='not found' />
            </Link>
            {/* <Button onClick={e=> {HandleClick(e)}}>
                Remove filters
            </Button> */}
            <SearchBar />
                <Select onChange={e =>handleSortName(e)}>
                <option value="" disabled selected>Order by Name</option>
                    <option value='asc'>Ascendent</option>
                    <option value='desc'>Descendent</option>
                </Select>
                <Select onChange={e =>handleSortAttack(e)}>
                <option value="" disabled selected>Order by Strong</option>
                    <option value='asc'>Ascendent</option>
                    <option value='desc'>Descendent</option>
                </Select>
                <Select onChange={e =>handleFilterCreated(e)}> 
                <option value="" disabled selected>Filter by Created</option>
                    <option value="all">all</option>
                    <option value="created">created</option>
                </Select>
                <Select onChange={e => handleFIlterType(e)}> 
                <option value="" disabled selected>Filter by Type</option>
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
                </Select>
                <Link to= '/pokemon'>
                <Button>Create Pokemon</Button>    
                </Link>
                </Div>
            <div>
                {    
                    currentPokemons?.map((p)=>{
                        let t = '';
                        if (typeof p.types !== 'string'){
                             t = p.types.map(e=>e.name).join();
                            }
                            else t = p.types
                            return(
                                <Fragment >
                            <Card name={p.name} image={p.image} type={t} />
                            </Fragment>
                        )
                    })
                }
                <Paginado
                pokemonsPerPage= {pokemonsPerPage}
                allPokemons= {allPokemons.length}
                paginado= {paginado}
                />
                <P>website created and designed by Joaquin Girardi in representation of <a href="https://www.soyhenry.com/">Henry</a> individual project</P>
            </div>
        </div>
    )
}

export default Home;