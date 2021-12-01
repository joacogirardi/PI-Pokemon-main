import { React } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Button = styled.button`
    color : white;
    border-radius : 15px;
    background-color: rgb(236, 45, 45);
`

const Div = styled.div`
display : flex
`

function LandingPage(){
    return (
        <body>
            <Div>
                <h1>Welcome</h1>
                <Link to ='/home'>
                    <Button>Go Home</Button>
                </Link>
                <h4>Some details</h4>
            </Div>
        </body>
    )
}

export default LandingPage;