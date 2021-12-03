import React from 'react'

const Navbar = () => {
    return (
        <div>
            <div className="navbar">
                <div className="icon">
                    <h1 className="logo" >Yavor Store</h1>
                </div>

                <div className="menu">
                    <ul>
                        <li><a href="#">Products</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Login</a></li>
                        <li><a href="#">Register</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar;