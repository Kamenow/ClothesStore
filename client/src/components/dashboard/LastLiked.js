import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const LastLiked = (props) => {
    useEffect(() => {
        console.log(props);
    }, []);

    return (
        <div className="card" >
            <Link className='nodec' to={`/posts/`}>
                <a><img src="./jeans.jpg" alt="Clothing Image" /></a>
                <h1>From: da</h1>
                <h1>da</h1>
                <p className="price" >da$</p >
                <p>da</p>
            </Link>
        </div >
    )
}

export default LastLiked
