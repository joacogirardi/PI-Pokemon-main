import React from 'react';
import styled from 'styled-components';


const Li = styled.li`
justify-content: center;
display: flex;
display: inline-grid;
`

export default function Paginado({pokemonsPerPage, allPokemons, paginado}) {
    const pageNum = [];

    for(let i = 0 ; i <Math.ceil(allPokemons/pokemonsPerPage); i++) {
        pageNum.push(i+1)
    }

    return(
        <nav>
            <ul className='paginado'>
                {
                pageNum&&
                pageNum.map(num =>(
                    <Li key = {num}>
                    <button href="!#" onClick={() => paginado(num)}> {num} </button>
                    </Li>
                ))}
            </ul>
        </nav>
    )
}