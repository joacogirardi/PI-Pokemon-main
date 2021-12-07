import { React } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import style from '../components/homebutton.css';

const Button = styled.button`
border-radius: 91px;
background-color: rgb(236,45,45);
height: 40px;
width: 155px;
color: white;
position: relative;
left: 237mm;
top: 375px;
`

const H4 = styled.h4`
color: white;
font: icon;
position: relative;
left: 56pc;
top: 15pc;
`

const H1 = styled.h1`
color: white;
position: relative;
left: 516px;

`

const Div = styled.div`
background-image: url(https://i.postimg.cc/kGp8kDch/background-Landing.jpg);
display: -ms-flexbox;
display: flex;
height: 649px;
width: 100%;
position: absolute;
background-size: cover;
background-repeat: no-repeat;
background-position: center;
`


function LandingPage(){
    return (
        <Div>
        <div>
                <H1>Welcome</H1>
                <Link to ='/home'>
                    <button className="but">Go Home</button>
                </Link>
                <H4>WEB API created and designed by Joaquin Girardi,<br />representing the final individual project for HENRY<br />based on the series "Pokemon"</H4>
        </div>
        </Div>
    )
}

export default LandingPage;



