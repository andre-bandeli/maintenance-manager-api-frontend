import React from 'react'
import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'
import './index.scss'

export default function Index() {
  return (
    <div className='index'>
        <Navbar/>
        <div className="main">
          <div className="header">
            <h2>UM APP FEITO PARA A</h2>
            <h1>GESTÃO DA MANUTENÇÃO</h1>
            <div className="buttons">
              <button className='btnintro'>
                conheça mais sobre o app
              </button>
              <button className='btnextra'>
                conheça mais sobre o app
              </button>
            </div>
            <div className="engrenagem">
              
            </div>
          </div>
          <div className="containerIndex">

          </div>
          
        </div>
        <Footer/>
    </div>
  )
}
