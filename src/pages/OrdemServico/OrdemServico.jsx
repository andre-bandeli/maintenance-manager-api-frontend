import React from 'react'
import { useEffect, useState } from 'react';

import './ordemServico.scss'
import MenuLateral from '../../components/menuLateral/MenuLateral'

export default function OrdemServico() {

  const[OrdemServico,setOrdemServico]=useState([])

  useEffect(() => {
    fetch('http://localhost:8085/api/v1/so/list')
      .then(response => response.json())
      .then(data => setOrdemServico(data))
      .catch(error => console.error(error))
  }, []);


  return (
    <div className='ordemServico'>
      <div className="containerOrdemServico">
        <MenuLateral/>
        <div className="containerList">
          <h1>Ordem de Serviço</h1>
          <h2>Uma ordem de serviço é gerada através das solicitações de serviço que estão abertas. Nesta seção, é possível gerenciar essas solicitações através da criação 
            de uma ordem de serviço.
          </h2>

          <div className="List">
              <ul>
              <ul>
                  <li className="header">
                    <span>ID</span>
                    <span>Máquina</span>
                    <span>Setor</span>
                    <span>Linha</span>
                    <span>Solicitante</span>
                    <span>Descrição</span>
                    <span>Data de abertura</span>
                    <span>Status</span>
                    <span>editar</span>
                    <span>excluir</span>
                  </li>
                  <li>
                    <span>id</span>
                    <span>Item 1,2</span>
                    <span>Item 1,3</span>
                    <span>Item 1,1</span>
                    <span>Item 1,2</span>
                    <span>Item 1,3</span>
                    <span>Item 1,1</span>
                    <span>Item 1,2</span>
                    <span><button>
                      editar</button></span>
                    <span>
                      <button>
                        excluir</button>
                    </span>
                  </li>

                </ul>
              </ul>
          </div>
        
        </div>
      </div>
    </div>
  )
}
