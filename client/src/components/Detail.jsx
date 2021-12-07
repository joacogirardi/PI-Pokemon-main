import React from 'react';
import { Link } from "react-router-dom" ;
import { useDispatch, useSelector } from "react-redux" ;
import  {getDetail} from '../actions/index';
import {useEffect} from 'react';
import styled from 'styled-components';


const Div = styled.div`
background-color: #3a00299e;
display: inline-grid;
padding: 0px;
margin: 35px;
border-radius: 36px;
box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
`

export default function Detail (props){
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getDetail(props.match.params.id));
    },[dispatch]);

    const poke = useSelector((state)=> state.detail);
    console.log(poke);
    
    return (
        <Div>
            {
                poke.length > 0 ?

                <div>
                    <h1>Name : {poke[0].name}</h1>
                    <img src={poke[0].image} alt='not found'/>
                    <h2>id :  {poke[0].id}</h2>
                    {/* <h2>Type : {poke[0].types? poke[0].types : poke[0].type }</h2> */}
                    <h2>hp :  {poke[0].hp}</h2>
                    <h2>attack :  {poke[0].attack}</h2>
                    <h2>defense :  {poke[0].defense}</h2>
                    <h2>speed :  {poke[0].speed}</h2>
                    <h2>height :  {poke[0].height}</h2>
                    <h2>weight :  {poke[0].weight}</h2>

                    <Link to='/home'>
                        <button>Back home</button>
                    </Link>

                </div>
                :
                <h2>poke doesnt exits</h2>
                // <img src={''} alt='not found'/>
            }
        </Div>

    )
}
