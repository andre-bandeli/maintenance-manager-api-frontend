import React from 'react'
import './menuLateral.scss'
import { Link } from "react-router-dom";


export default function MenuLateral() {
  return (
    <div className='menuLateral'>
       <div className="menuDashboard">
                <ul>
                  <li>
                      <Link to="/home">Dashboard</Link>
                  </li>
                  <li>
                      <Link to="/ss">Solicitações de Serviço</Link>
                  </li>
                  <li>
                      <Link to="/os">Ordens de Serviço</Link>
                  </li>
                  <li>
                      <Link to="/estoque">Estoque, Produtos e Insumos</Link>
                  </li>
                  <li>
                      <Link to="/maquinas">Máquinas</Link>
                  </li>
                  <li>
                      <Link to="/blog">Área do Manutentor</Link>
                  </li>
                </ul>
            </div>
    </div>
  )
}
