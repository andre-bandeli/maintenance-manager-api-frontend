import React from 'react'
import Footer from '../../components/footer/Footer'
import './index.scss'
import { Link } from "react-router-dom";

export default function Index() {
  return (
  <div className='index'>

    <div className="nav">
        <ul>
          <li>
            <Link to="/home">Dashboard</Link>
          </li>
          <li>
            <Link to="https://github.com/andre-bandeli/maintenance-manager-api-frontend" target={'_blank'}>Projeto</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
    </div>
    <div className="header">
        
        <div className='text'>
          <h1>Maintenance <span><b>M</b>anager</span></h1>
          <h2>Uma Aplicação Web para Planejamento e Controle da Manutenção</h2>
         
        </div>
    </div>
    <div className="containerCards">
          <div className="box">

            <h3>Gerencie Solicitações de Serviço e Ordens de Serviço</h3>

          </div>
          <div className="box">

            <h3>Planeje Manutenções Preventivas e Corretivas</h3>
            </div>
            <div className="box">
 
            <h3>Monitore Indicadores de Manutenção e Rendimentos</h3>
            </div>
            <div className="box">

            <h3>Entenda como Implementar o PCM nas Empresas</h3>
            </div>
    </div>

    
    <Footer />
  </div>
  )
}
