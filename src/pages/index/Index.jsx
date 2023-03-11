import React from 'react'
import Footer from '../../components/footer/Footer'
import './index.scss'
import { Link } from "react-router-dom";


export default function Index() {
  return (
    <div className='index'>

        <div className="main">
          <div className="header">
            <h1>Maintenance <span>Manager</span></h1>
            <h2>Gerencie a manutenção de sua empresa de uma maneira simples. Com o Maintencance Manager você pode criar solicitações de serviço, 
              gerenciar ordens, acompanhar os principais KPI's de manutenção e gerenciar estoques.
            </h2>
            <div className="buttons">
              <button className='btn-primary'>
                <Link to='/home'>Acesse a página Home</Link>
              </button>
              <button className='btn-secundary'>
              <Link to='/home'>Conheça mais sobre o app</Link>
              </button>
              
              
            </div>
          </div>
          
        </div>
        <Footer/>
    </div>
  )
}
