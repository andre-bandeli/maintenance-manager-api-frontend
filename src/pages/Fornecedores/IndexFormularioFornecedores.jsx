import React from 'react'
import Navbar from '../../components/darkNavbar/Navbar'
import Footer from '../../components/footer/Footer'
import FormularioFornecedores from './FormularioFornecedor'
import './formularioFornecedores.scss'

export default function IndexFormularioFornecedores
() {
  return (
    <div className='indexFormularioFornecedores'>
        <Navbar/>
        <FormularioFornecedores/>
        <Footer/>
    </div>
  )
}
