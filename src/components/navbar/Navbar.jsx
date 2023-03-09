import React from 'react'
import MobileNavigation from './MobileNavigation'

import { Link } from "react-router-dom";

import linkedin from '../assets/in.png'
import github from '../assets/git.png'
import login from '../assets/enter.webp'

export default function Navbar() {
  return (
    <div className='navbar'>

        <div className="navSuperior">
            <ul>
                <li>
                    <div className="menu">
                        <MobileNavigation/>
                    </div>
                    <h1>MAINTENANCE MANAGER</h1>
                    
                </li>
               
                <li>
                    <div className="redes">
                        <Link to="https://www.linkedin.com/in/andrebandeli/"> <img src={linkedin} alt="ícone linkedin" /></Link>
                        <Link to="https://github.com/andre-bandeli"> <img src={github} alt="ícone github" /></Link>
                        <Link to="/login"><img src={login} alt="ícone github" /></Link>
                    </div>

                </li>
            </ul>

        </div>
    </div>
  )
}
