import React from 'react'
import MobileNavigation from './MobileNavigation'
import './navbar.scss'

import { Link } from "react-router-dom";

import linkedin from './in.png'
import github from './git.png'
import login from '../../components/assets/enter.webp'
import man from './man.png'

export default function Navbar() {
  return (
    <div className='navbar'>

        <div className="navSuperior">
            <ul>
                <li>
                    <h1><span>MAINTENANCE </span>MANAGER</h1>
                </li>
                <li>
                    <div className="link">
                        <Link to="/home">Dashboard</Link>
                    </div>
                    <div className="link">
                        <Link to="/">Novo Projeto</Link>
                    </div>
                    <div className="link">
                        <Link to="/cadastro">Abrir Novo Chamado</Link>
                    </div>
                </li>
                <li>
                    <div className="redes">
                        <Link to="https://www.linkedin.com/in/andrebandeli/"> <img src={linkedin} alt="ícone linkedin" /></Link>
                        <Link to="https://github.com/andre-bandeli"> <img src={github} alt="ícone github" /></Link>
                        <Link to="/usuario"> <img src={man} alt="ícone user" className='user-icon' /></Link> 
                        <Link to="/login"><img src={login} alt="ícone github" /></Link>
                    </div>

                </li>
            </ul>

        </div>
    </div>
  )
}
