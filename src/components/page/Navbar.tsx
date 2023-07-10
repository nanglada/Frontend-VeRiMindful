
import { useState } from 'react'
import './Navbar.css'
import { GiHamburgerMenu } from "react-icons/gi";
import NavElement from './NavElement';

let mindfulnessDrop:Array<Array<string>> = [
    ["Mindfulness 1", "/mindfulness1"],
    ["Mindfulness 2", "/mindfulness1"],
    ["Mindfulness 3", "/mindfulness1"]
]
let selfcompassionDrop:Array<Array<string>> = [
    ["Selfcompassion 1", "/Selfcompassion1"],
    ["Selfcompassion 2", "/Selfcompassion2"],
    ["Selfcompassion 3", "/Selfcompassion3"]
]

let resourcesDrop:Array<Array<string>> = [
    ["Recomendaciones de libros", "/libros"],
    ["Poemas", "/poemas"],
    ["Audios", "/audios"],
    ["Videos", "/videos"]
]

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
                        <NavElement title="Mindfulness" dropdown={mindfulnessDrop}/>
                    </li>
                    <li>
                        <NavElement title="Autocompasión" dropdown={selfcompassionDrop}/>
                    </li>
                    <li>
                        <NavElement title="Quién soy" dropdown={[]}/>
                    </li>
                    <li>
                        <NavElement title="Cursos" dropdown={[]}/>
                    </li>
                    <li>
                        <NavElement title="Artículos" dropdown={[]}/>
                    </li>
                    <li>
                        <NavElement title="Organizaciones" dropdown={[]}/>
                    </li>
                    <li>
                        <NavElement title="Recursos" dropdown={resourcesDrop}/>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    )
}
  
export default Navbar
  