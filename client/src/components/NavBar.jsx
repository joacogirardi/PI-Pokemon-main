import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {Button} from "../components/Button";
import { getPokemons } from "../actions";
import Logo from "../../src/content/pngegg.png"

export const NavBar = ()=>{
    const dispatch = useDispatch();
    return (
        <header>
             <div className='edit'>
                <Link to={'/main'}> <img src={'edit'} alt="pokepola" height='70' width='70' /></Link>
            </div>
            <div>
                <Link to={'/home'}>
                    <button className='homeButton' type="button" onClick={() =>dispatch(getPokemons())}>
                    <img className = 'imgHome'
                        src={Logo}
                        width={290}
                        height={210}
                        alt="PruebaInicio" />
                    </button>
                    
                </Link>
            </div>
            <div>
                <Button link={'/create'} name={"Create"} classname={"secundary"}/>
            </div>
        </header>
    )
}