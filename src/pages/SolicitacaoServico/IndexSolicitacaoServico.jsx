import React from 'react'
import Navbar from '../../components/darkNavbar/Navbar'
import Footer from '../../components/footer/Footer'
import SolicitacaoServico from './SolicitacaoServico'
import './solicitacaoServico.scss'

export default function IndexSolicitacaoServico
() {
  return (
    <div className='indexSolicitacaoServico'>
        <Navbar/>
        <SolicitacaoServico/>
        <Footer/>
    </div>
  )
}
