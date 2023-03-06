import React from 'react'
import Navbar from '../../components/darkNavbar/Navbar'
import Footer from '../../components/footer/Footer'
import OrdemServico from './OrdemServico'
import './formularioOrdem.scss'

export default function IndexOrdemServico
() {
  return (
    <div className='indexOrdemServico'>
        <Navbar/>
        <OrdemServico/>
        <Footer/>
    </div>
  )
}
