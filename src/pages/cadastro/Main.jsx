import React from 'react'
import './cadastro.scss'

import FormularioCadastro from './FormularioCadastro'

export default function Main() {
  return (
    <div className='mainCadastro'>
        <div className="containerCadastro">
          <div className="imagem">
                <h1>Cadastre sua Empresa</h1>
                <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis 
                  exercitationem incidunt dicta nesciunt consequatur, dolorem, laboriosam 
                  voluptatum impedit omnis soluta dolorum neque maiores modi! Exercitationem 
                  repudiandae tempora odio porro expedita?</h2>
                
                <h3><span className='yellow'>Crie ordens e solicitações de serviço</span></h3>
                <h3><span className='green'>Gerencie seu estoque de insumos e ferramentas</span></h3>
                <h3><span className='red'>Faça uma gestão dos chamados e organize seu time de manutenção</span></h3>
          </div>
          <div className="boxForms">
            <FormularioCadastro/>
          </div>
        </div>
    </div>
  )
}
