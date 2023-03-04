import React from 'react'
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

import './estoque.scss'
import MenuLateral from '../../components/menuLateral/MenuLateral'

export default function Estoque() {

  const[Estoque,setEstoque]=useState([])

  useEffect(() => {
    fetch('http://localhost:8085/api/v1/so/list')
      .then(response => response.json())
      .then(data => setEstoque(data))
      .catch(error => console.error(error))
  }, []);


  return (
    <div className='estoque'>
      <div className="containerEstoque">
        <MenuLateral/>
        <div className="containerList">
          <h1>Estoque</h1>
          <div className="buttons">
            <button>
            <Link to="/new-estoque"> Adicionar novo item ao estoque</Link>
            </button>
            <button>
              Gerar relatório
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
