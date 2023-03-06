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
                <Link to="/home">Maintenance <span>Manager</span></Link>
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
            <ul className='nav-inferior'>
                <li>
                    <Link to="/home">Dashboard</Link>
                </li>
                <li>
                    <Link to="/ss">Solicitação</Link>
                </li>
                <li>
                    <Link to="/os">Ordens</Link>
                </li>
                <li>
                    <Link to="/estoque">Estoque</Link>
                </li>
                <li>
                    <Link to="/maquinas">Máquinas</Link>
                </li>
                <li>
                    <Link to="/fornecedor">Fornecedores</Link>
                </li>
                <li>
                    <Link to="/login">Projetos</Link>
                </li>

                <li>
                    <Link to="/login">Manutentor</Link>
                </li>
            </ul>

        </div>
    </div>
  )
}
