import React from 'react'
import Navbar from '../../../components/darkNavbar/Navbar'
import Footer from '../../../components/footer/Footer'
import FormularioSolicitacao from './FormularioSolicitacao'
import './formularioSolicitacao.scss'

export default function IndexFormularioSolicitacao
() {
  return (
    <div className='indexFormularioSolicitacao'>
        <Navbar/>
        <FormularioSolicitacao/>
        <Footer/>
    </div>
  )
}
