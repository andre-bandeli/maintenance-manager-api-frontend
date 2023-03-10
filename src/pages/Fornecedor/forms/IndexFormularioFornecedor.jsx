import React from 'react'

import './formularioFornecedor.scss'
import Navbar from '../../../components/darkNavbar/Navbar'
import Footer from '../../../components/footer/Footer'
import FormularioFornecedor from './FormularioFornecedor'

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
