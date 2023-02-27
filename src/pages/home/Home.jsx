import React from 'react'
import './home.scss'
import { Link } from "react-router-dom";
import check from './confirme.png'
import cancelar from './cancelar.png'
import MenuLateral from '../../components/menuLateral/MenuLateral';

export default function Home() {
  return (
    <div className='home'>

      <div className="containerHome">
          <MenuLateral/>
          <div className="dash">
            <h1>Dashboard</h1>
            <div className="bx-500">

            </div>
            <div className="bx-500">
              
            </div>
            <div className="bx-500">
              
            </div>
            <div className="bx-500">
              
            </div>
            <div className="bx-500">
              
            </div>
            <div className="bx-500">
              
            </div>

            <div className="bx-12">
              <h2>Últimas Solicitações de Serviço</h2>

              <div className="containerList">
                    <ul className='ul-list'>
                      <li>
                          <h3>Máquina 2 apresentou problemas de sobreaquecimento</h3>
                          <h3>MAQ002 - Linha 3</h3>
                          <h3>Linha de Desmonte</h3>
                          <h3>João Pedro Liazz</h3>
                          <h3>21/08/2023</h3>
                          <img src={check} alt="" />
                          <img src={cancelar} alt="" />
                          <button>
                            nova ordem
                          </button>
                          <button>
                            cancelar
                          </button>
                      </li>
                      <li>
                           <h3>Máquina 2 apresentou problemas de sobreaquecimento</h3>
                          <h3>MAQ002 - Linha 3</h3>
                          <h3>Linha de Desmonte</h3>
                          <h3>João Pedro Liazz</h3>
                          <h3>21/08/2023</h3>
                          <img src={check} alt="" />
                          <img src={cancelar} alt="" />
                          <button>
                            nova ordem
                          </button>
                          <button>
                            cancelar
                          </button>
                      </li>
                      <li>
                           <h3>Máquina 2 apresentou problemas de sobreaquecimento</h3>
                          <h3>MAQ002 - Linha 3</h3>
                          <h3>Linha de Desmonte</h3>
                          <h3>João Pedro Liazz</h3>
                          <h3>21/08/2023</h3>
                          <img src={check} alt="" />
                          <img src={cancelar} alt="" />
                          <button>
                            nova ordem
                          </button>
                          <button>
                            cancelar
                          </button>
                      </li>
                      <li>
                           <h3>Máquina 2 apresentou problemas de sobreaquecimento</h3>
                          <h3>MAQ002 - Linha 3</h3>
                          <h3>Linha de Desmonte</h3>
                          <h3>João Pedro Liazz</h3>
                          <h3>21/08/2023</h3>
                          <img src={check} alt="" />
                          <img src={cancelar} alt="" />
                          <button>
                            nova ordem
                          </button>
                          <button>
                            cancelar
                          </button>
                      </li>
                      <li>
                          <h3>Máquina 2 apresentou problemas de sobreaquecimento</h3>
                          <h3>MAQ002 - Linha 3</h3>
                          <h3>Linha de Desmonte</h3>
                          <h3>João Pedro Liazz</h3>
                          <h3>21/08/2023</h3>
                          <img src={check} alt="" />
                          <img src={cancelar} alt="" />
                          <button>
                            nova ordem
                          </button>
                          <button>
                            cancelar
                          </button>
                      </li>
                      <li>
                          <h3>Máquina 2 apresentou problemas de sobreaquecimento</h3>
                          <h3>MAQ002 - Linha 3</h3>
                          <h3>Linha de Desmonte</h3>
                          <h3>João Pedro Liazz</h3>
                          <h3>21/08/2023</h3>
                          <img src={check} alt="" />
                          <img src={cancelar} alt="" />
                          <button>
                            nova ordem
                          </button>
                          <button>
                            cancelar
                          </button>
                      </li>
                    </ul>
              </div>

            </div>
            <div className="bx-12">
              <h2>Últimas Ordens de Serviço</h2>
              <div className="containerList">
                    <ul className='ul-list'>
                      <li>
                          <h3>Máquina 2 apresentou problemas de sobreaquecimento</h3>
                          <h3>MAQ002 - Linha 3</h3>
                          <h3>Linha de Desmonte</h3>
                          <h3>João Pedro Liazz</h3>
                          <h3>21/08/2023</h3>
                          <img src={check} alt="" />
                          <img src={cancelar} alt="" />
                          <button>
                            concluir ordem
                          </button>
                          <button>
                            cancelar
                          </button>
                      </li>
                      <li>
                           <h3>Máquina 2 apresentou problemas de sobreaquecimento</h3>
                          <h3>MAQ002 - Linha 3</h3>
                          <h3>Linha de Desmonte</h3>
                          <h3>João Pedro Liazz</h3>
                          <h3>21/08/2023</h3>
                          <img src={check} alt="" />
                          <img src={cancelar} alt="" />
                          <button>
                            concluir ordem
                          </button>
                          <button>
                            cancelar
                          </button>
                      </li>
                      <li>
                           <h3>Máquina 2 apresentou problemas de sobreaquecimento</h3>
                          <h3>MAQ002 - Linha 3</h3>
                          <h3>Linha de Desmonte</h3>
                          <h3>João Pedro Liazz</h3>
                          <h3>21/08/2023</h3>
                          <img src={check} alt="" />
                          <img src={cancelar} alt="" />
                          <button>
                            concluir ordem
                          </button>
                          <button>
                            cancelar
                          </button>
                      </li>
                      <li>
                           <h3>Máquina 2 apresentou problemas de sobreaquecimento</h3>
                          <h3>MAQ002 - Linha 3</h3>
                          <h3>Linha de Desmonte</h3>
                          <h3>João Pedro Liazz</h3>
                          <h3>21/08/2023</h3>
                          <img src={check} alt="" />
                          <img src={cancelar} alt="" />
                          <button>
                            concluir ordem
                          </button>
                          <button>
                            cancelar
                          </button>
                      </li>
                     
                      
                    </ul>
              </div>

  
            </div>
             
          </div>
      </div>
        
    </div>
  )
}
