import React from 'react'
import Navbar from '../../components/darkNavbar/Navbar'
import Footer from '../../components/footer/Footer'
import FormularioFornecedor from './FormularioMaquinas'
import './formularioFornecedor.scss'

export default function IndexFormularioFornecedor
() {
  return (
    <div className='indexFormularioFornecedor'>
        <Navbar/>
        <FormularioFornecedor/>
        <Footer/>
    </div>
  )
}
