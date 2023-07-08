import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import { GiHamburgerMenu } from "react-icons/gi";
import NavElement from './NavElement';

function Navbar() {
    const [showNavbar, setShowNavbar] = useState(false)

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar)
    }

    return (
    <nav className="navbar">
        <div className="container">
            <div className="logo">
                VeRiMindful
            </div>
            <div className="menu-icon" onClick={handleShowNavbar}>
                <GiHamburgerMenu/>
            </div>
            <div className={`nav-elements  ${showNavbar && 'active'}`}>
                <ul>
                    <li>
                    <NavElement title="Mindfulness" />
                    </li>
                    <li>
                        <NavLink to="/blog">Autocompasión</NavLink>
                    </li>
                    <li>
                        <NavLink to="/projects">Recursos</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">Cursos</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">Quien soy</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">Artículos</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">Organizaciones</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    )
}
  
export default Navbar
  