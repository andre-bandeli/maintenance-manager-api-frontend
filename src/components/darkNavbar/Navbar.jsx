import React from 'react'
import MobileNavigation from './MobileNavigation'
import './navbar.scss'
import './responsive.css'

import { Link } from "react-router-dom";

import linkedin from './in.png'
import github from './git.png'
import login from '../../components/assets/enter.webp'
import man from './user.png'

export default function Navbar() {
  return (
    <div className='navbar'>

        <div className="navSuperior">
            <ul>
                <li>
                <Link to="/home">Maintenance <span>Manager</span></Link>
                <Link to="/home" className='logo-responsive'>M <span>M</span></Link>
                </li>
                <li>
                    <div className="redes">
                        <Link to="https://www.linkedin.com/in/andrebandeli/" target='_blank'> <img src={linkedin} alt="ícone linkedin" /></Link>
                        <Link to="https://github.com/andre-bandeli" target='_blank'> <img src={github} alt="ícone github" /></Link>
                        <Link to="/usuario" target='_blank'> <img src={man} alt="ícone user"  /></Link> 
                        <Link to="/login" target='_blank'><img src={login} alt="ícone github" /></Link>
                    </div>

                </li>
            </ul>
            <ul className='nav-inferior'>
                <MobileNavigation/>
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
                    <Link to="/login">Financeiro</Link>
                </li>

                <li>
                    <Link to="/manutentor">Manutentor</Link>
                </li>
            </ul>

        </div>
    </div>
  )
}
