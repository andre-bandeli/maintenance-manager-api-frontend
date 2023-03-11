import React from 'react'
import './style.css'
import git from '../assets/git.webp'
import linkedin from '../assets/in.webp'

import { Link } from "react-router-dom";


export default function Footer() {
  return (
    <div className='footer'>
        <div className="social-box">

        </div>
        <div className="containerFooter">

            <div className="boxFooter">
                <h2>Institucional</h2>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/contato">Sobre o Planejador de Manutenção</Link>
                    </li>
                    <li>
                        <Link to="/motocicletas">Blog do Manutentor</Link>
                    </li>
                    <li>
                        <Link to="/veiculos">Conheça o projeto open source</Link>
                    </li>
                </ul>

            </div>
            <div className="boxFooter">
                <h2>Acessos</h2>
                <ul>
                    <li>
                        <Link to="/login">Login</Link>

                    </li>
                    <li>
                        <Link to="/">Cadastre-se para utilizar o planejador</Link>
                    </li>

                </ul>


            </div>
            <div className="boxFooter">
                <h2>Contato</h2>
                <ul>
                    <li>
                        Universidade Estadual de Campinas. Campus Barão Geraldo.
                    </li>
                    <li>
                        Campinas, São Paulo, Brasil.
                    </li>
                    <li>
                        Site desenvolvido por André L. Bandeli
                    </li>
                    <li className='redes'>

                        <Link to="https://www.linkedin.com/in/andrebandeli/">
                        <img src={linkedin} alt="ícone do twitter" width='25px' height='25px' /></Link>
                        <Link to="https://github.com/andre-bandeli">
                        <img src={git} alt="ícone do instagran" width='25px' height='25px' /></Link>
                    </li>

                </ul>

            </div>
            <div className="boxFooter">
                <h2>Saiba mais</h2>
                <ul>
                    <li>
                        <Link to="/">Como utilizar o planejador</Link>

                    </li>
                    <li>
                        <Link to="/">Tecnologias e Ferramentas</Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}
