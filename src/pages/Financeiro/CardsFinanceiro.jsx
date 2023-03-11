import React from 'react'
import './financeiro.scss'

import dinheiro from './dinheiro.png'





export default function CardsFinanceiro() {
  return (
    <div className='cardsFinanceiro'>
        <div className="boxFinanceiro">

           <div className="saldoContainer">
                <h2>Saldo Atual<span></span></h2>
                <h3> <span>R$</span> 45555</h3>

           </div>
           <div className="buttonContainer">
                <div className="icon">
                    <img src={dinheiro} alt="" />
                    <h3>Informar Entrada</h3>

                </div>
                <div className="icon">
                <img src={dinheiro} alt="" />
                    <h3>Informar Saída</h3>
                </div>
                    <div className="icon">
                    <img src={dinheiro} alt="" />
                    <h3>Extrato</h3>
                    </div>
                    <div className="icon">
                    <img src={dinheiro} alt="" />
                    <h3>Lista de Pagamentos</h3>
                    </div>
                    <div className="icon">
                    <img src={dinheiro} alt="" />
                    <h3>Informar Saída</h3>
                    </div>
                    <div className="icon">
                    <img src={dinheiro} alt="" />
                    <h3>Informar Saída</h3>
                    </div>
            </div>

        </div>
    </div>
  )
}
