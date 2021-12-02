import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import { getPokemons, filterPokesByType, filterCreated, orderByName, orderByAttack } from "../actions";
import Card from "./Card";
import SearchBar from "./SearchBar";
import Paginado from "./Paginado";
import styled from 'styled-components';
import logo from '../components/logo.css'


const Div = styled.div`
background-color: #00000075;
display: flex;
position: relative;
height: 80px;
box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
`

const Select = styled.select`
height: 25px;
position: relative;
background-color: #000000;
margin: 6px;
top: 35px;
color: white;
left: 135px;
border-color: black;
border-radius: 6px
`

const Button = styled.button`
background-color: #ffcb05;
height: 40px;
position: relative;
left: 284px;
top: 20px;
border-radius: 12px;
cursor: pointer;
`

const P = styled.p`
color: #fff1f1;
position: relative;
bottom: -10px;
padding: 10px;
`
const Img = styled.img`
height: 364px;
`

const H3 = styled.h3`
position: relative;
top: -17px;
color : white;
`
const H1 = styled.h1`
color : red;
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
            <img className="logo" src='https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg' alt='not found' />
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
                {   currentPokemons.length > 0 ? (
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
                        
                    })) : 
                    <div>
                        <Img src={"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/cce92d41-6a99-4bea-80d5-d30124fc97b6/d2hi2ft-c5563642-9be4-497a-95f1-396611ce7491.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2NjZTkyZDQxLTZhOTktNGJlYS04MGQ1LWQzMDEyNGZjOTdiNlwvZDJoaTJmdC1jNTU2MzY0Mi05YmU0LTQ5N2EtOTVmMS0zOTY2MTFjZTc0OTEuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.G1ZlQodzDayMT0oj3w6WxGYL4go1hm92C7mAZkv9v88"} alt="loading"/>
                        <H1>Loading...</H1>
                        <H3>Please wait while we get things ready</H3>
                    </div>
                }
                <Paginado
                pokemonsPerPage= {pokemonsPerPage}
                allPokemons= {allPokemons.length}
                paginado= {paginado}
                />
                <P>website created and designed by Joaquin Girardi-FT19a in representation of <a href="https://www.soyhenry.com/">Henry</a> individual project</P>
            </div>
        </div>
    )
}

export default Home;