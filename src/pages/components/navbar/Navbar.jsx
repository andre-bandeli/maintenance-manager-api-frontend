import React from 'react'
import MobileNavigation from './MobileNavigation'
import './navbar.scss'

import { Link } from "react-router-dom";

import linkedin from '../assets/in.webp'
import github from '../assets/git.webp'
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
                    <div className="link">
                        <Link to="/">Home</Link>
                    </div>
                    <div className="link">
                        <Link to="/">Sobre</Link>
                    </div>
                    <div className="link">
                        <Link to="/">Blog do Manutentor</Link>
                    </div>
                    <div className="link">
                        <Link to="/cadastro">Cadastre-se</Link>
                    </div>
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
