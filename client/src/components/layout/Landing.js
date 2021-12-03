import React from 'react'
import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <div className="landing">
            <div className="content">
                <h1>Clothes & <span>Fashion</span> </h1>
                <p className="par">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, incidunt!</p>

                <button className="cn"><Link href="#">Browse</Link></button>
            </div>
        </div>
    )
}

export default Landing;
