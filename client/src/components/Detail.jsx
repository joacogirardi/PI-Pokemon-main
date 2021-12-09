import React from 'react';
import { Link } from "react-router-dom" ;
import { useDispatch, useSelector } from "react-redux" ;
import  {getDetail} from '../actions/index';
import {useEffect} from 'react';
import styled from 'styled-components';
import load from "../components/detailoading.css"


const Div = styled.div`
background-color: #001a329e;
display: inline-grid;
padding: 0px;
margin: 35px;
border-radius: 36px;
box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
height: 520px;
width: 610px;
`

const Img = styled.img`
display: inline;
position: absolute;
height: 300px;
width: 280px;
left: 385px;
`
const Button = styled.button`
display: inline-grid;
// position: relative;
// left: 10px;
// top: 75px;
margin: 60px;
width: 202px;
height: 35px;
justify-content: center;
align-items: center;
background-color: #ffcb05;
border-radius: 12px;
cursor: pointer;
`

const H2 = styled.h2`
color: white;
font-size: 20px;
font-weight: 300;
text-align: left;
position: relative;
left: 354px;
width: 163px;
`

const H1 = styled.h1`
color: white;
background-color: black;
border-top-right-radius: 37px;
border-top-left-radius: 37px;
position: relative;
bottom: 20px;
`

const H3 = styled.h3`
color : white;
position : relative;
top : 60px
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
                    <H1>{poke[0].name}</H1>
                    <Img src={poke[0].image} alt='not found'/>
                    <H2>name :  {poke[0].name}</H2>
                    <H2>id :  {poke[0].id}</H2>
                    <H2>Type : {poke[0].type ? poke[0].type : poke[0].types}</H2>
                    <H2>hp :  {poke[0].hp}</H2>
                    <H2>attack :  {poke[0].attack}</H2>
                    <H2>defense :  {poke[0].defense}</H2>
                    <H2>speed :  {poke[0].speed}</H2>
                    <H2>height :  {poke[0].height}</H2>
                    <H2>weight :  {poke[0].weight}</H2>

                    <Link to='/home'>
                        <Button>Back home</Button>
                    </Link>

                </div>
                :
                <div>
                    <img className="load" src={'https://c.tenor.com/gNXbSKL1F0QAAAAC/pokemon-pikachu.gif'} alt="poke doesnt exits"/>
                    <H3>Loading Please Wait...</H3>
                </div>
            }
        </Div>

    )
}
