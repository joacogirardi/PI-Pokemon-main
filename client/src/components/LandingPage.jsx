import { React } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import style from '../components/Landing.module.css'

const Button = styled.button`
    color : white;
    border-radius : 15px;
    background-color: rgb(236, 45, 45);
`


function LandingPage(){
    return (
        <div>
                <h1>Welcome</h1>
                <Link to ='/home'>
                    <Button>Go Home</Button>
                </Link>
                <h4>API creada por Joaquin Girardi, en representacion al proyecto individual final para HENRY, basado en la serie  “Pokemon”</h4>
        </div>
    )
}

export default LandingPage;