import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-center">
                <Link to="/">
                    <h2 className="extra"> The <span className="extra-data">Cocktail</span> Db</h2>
                </Link>
                <ul className="nav-links">
                    <li>
                        <Link to="/"> Home </Link>
                    </li>
                    <li>
                        <Link to="/about"> About </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar