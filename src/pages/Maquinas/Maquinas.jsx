import React from 'react'
import { useEffect, useState } from 'react';

import './maquinas.scss'
import MenuLateral from '../../components/menuLateral/MenuLateral'

export default function Maquinas() {

  const[Maquinas,setMaquinas]=useState([])

  useEffect(() => {
    fetch('http://localhost:8085/api/v1/so/list')
      .then(response => response.json())
      .then(data => setMaquinas(data))
      .catch(error => console.error(error))
  }, []);


  return (
    <div className='maquinas'>
      <div className="containerMaquinas">
        <MenuLateral/>
        <div className="containerList">
          <h1>Máquinas e Equipamentos</h1>
          <div className="buttons">
            <button>
              adicionar nova máquina ou equipamento
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
