import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const H4 = styled.h4`
color: white;
font-size: 13px;
margin: 5px;
`

const H3 = styled.h3`
background-color: #3a9fbb99;
color: white;
`

const H2 = styled.h2`
font-size: 13px;
display: inline-flex;
justify-content: space-around;
color: #999999e0;
margin: 8px;
`

const Div = styled.div`
background-color: #3a00299e;
display: inline-grid;
padding: 0px;
margin: 35px;
border-radius: 36px;
box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
`

export default function Card ({name, image, type, id }){
    return(
        <Div>
            <img src={image} alt="img not found" width="200px" height="250px" />
            <H3>{name}</H3>
            <H4>{type}</H4>
            <Link to={"/pokemons/" + id}>
            <H2>see details</H2>
            </Link>
        </Div>
    )
}