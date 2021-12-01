import React from "react";
import styled from "styled-components";


const Div = styled.div`
background-color: #0000008a;
display: inline-grid;
padding: 20px;
margin: 20px;
border-radius: 52px;
`

export default function Card ({name, image, type }){
    return(
        <Div>
            <img src={image} alt="img not found" width="200px" height="250px" />
            <h3>{name}</h3>
            {/* <h4>{type}</h4> */}
        </Div>
    )
}