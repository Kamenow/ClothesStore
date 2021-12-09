import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <div className="navbar">
                <div className="icon">
                    <h1 className="logo" >
                        <Link to="/"
                            style={{
                                textDecoration: 'none',
                                color: 'brown'
                            }}>Yavor Store</Link>
                    </h1>
                </div>

                <div className="menu">
                    <ul>
                        <li><Link to="#">Products</Link></li>
                        <li><Link to="#">Contact</Link></li>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/register">Register</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
