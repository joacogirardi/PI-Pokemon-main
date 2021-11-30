import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import { getPokemons } from "../actions";
import Card from "./Card";


const Home = function  (){
    const dispatch = useDispatch();
    const allPokemons = useSelector((s)=> s.pokemons)

    useEffect(()=>{
        dispatch(getPokemons())
    },[dispatch])


    function HandleClick(e){
        e.preventDefault();
        dispatch(getPokemons())
    };

    return(
    //     <body className="bg">
    // <div className="landing">
    //     <h1>Welcome back</h1>
    // </div>
    //     </body>

        <div>
            <Link to= '/pokemons'>Create Pokemon</Link>
            <h1>Create new Pokemon</h1>
            <button onClick={e=> {HandleClick(e)}}>
                reCharge Pokemons
            </button>
            <div>
                <select>
                    <option value='asc'>Ascendent</option>
                    <option value='desc'>Descendent</option>
                </select>
                <select>
                    <option value='type'>Type</option>
                    <option value='name'>Name</option>
                </select>
                <select>
                    <option value="all">All</option>
                    <option value="created">Created</option>
                    <option value="api">Exist</option>
                </select>
            {    
                allPokemons?.map((p)=>{
                    return(
                        <Fragment className='any'>
                            <Link to={"/home/" + p.id}>
                        <Card name={p.name} image={p.image} type={p.type} />
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