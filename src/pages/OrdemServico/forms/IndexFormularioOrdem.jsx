import React from 'react'
import Navbar from '../../../components/darkNavbar/Navbar'
import Footer from '../../../components/footer/Footer'
import FormularioOrdem from './FormularioOrdem'

export default function IndexFormularioOrdem
() {
  return (
    <div className='indexFormularioOrdem'>
        <Navbar/>
        <FormularioOrdem/>
        <Footer/>
    </div>
  )
}
