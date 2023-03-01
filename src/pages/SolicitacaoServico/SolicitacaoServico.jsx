import React from 'react'
import { useEffect, useState } from 'react';

import './solicitacaoServico.scss'
import MenuLateral from '../../components/menuLateral/MenuLateral'

export default function SolicitacaoServico() {

  const[solicitacaoServico,setSolicitacaoServico]=useState([])

  useEffect(() => {
    fetch('http://localhost:8085/api/v1/so/list')
      .then(response => response.json())
      .then(data => setSolicitacaoServico(data))
      .catch(error => console.error(error))
  }, []);


  return (
    <div className='solicitacaoServico'>
      <div className="containerSolicitacaoServico">
        <MenuLateral/>
        <div className="containerList">
          <h1>Solicitações de Serviço</h1>
          <div className="buttons">
            <button>
              criar nova solicitação
            </button>
            <button>
              ver ordens de serviço
            </button>
          </div>

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
