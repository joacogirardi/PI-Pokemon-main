import React from 'react';
import styled from 'styled-components';


const Li = styled.li`
justify-content: center;
display: flex;
display: inline-grid;
`

const Button = styled.button`
margin : 1px
`

export default function Paginado({pokemonsPerPage, allPokemons, paginado}) {
    const pageNum = [];

    for(let i = 0 ; i <Math.ceil(allPokemons/pokemonsPerPage); i++) {
        pageNum.push(i+1)
    }

    return(
        <nav>
            <ul>
                {
                pageNum&&
                pageNum.map(num =>(
                    <Li key = {num}>
                        <a href="#">
                    <Button onClick={() => paginado(num)}> {num} </Button>
                        </a>
                    </Li>
                ))}
            </ul>
        </nav>
    )
}