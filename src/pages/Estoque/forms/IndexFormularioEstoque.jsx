import React from 'react'
import Navbar from '../../../components/darkNavbar/Navbar'
import Footer from '../../../components/footer/Footer'
import FormularioEstoque from './FormularioEstoque'
import './formularioEstoque.scss'

export default function IndexFormularioEstoque
() {
  return (
    <div className='indexFormularioEstoque'>
        <Navbar/>
        <FormularioEstoque/>
        <Footer/>
    </div>
  )
}
