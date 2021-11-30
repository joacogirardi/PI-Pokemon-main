import { React } from 'react';
import { Link } from 'react-router-dom';
import './landingpage.css'

function LandingPage(){
    return (
            <body className="bg">
        <div className="landing">
            <h1>Welcome</h1>
            <Link to ='/home'>
                <button className="button">Go Home</button>
            </Link>
        </div>
            </body>
    )
}

export default LandingPage;