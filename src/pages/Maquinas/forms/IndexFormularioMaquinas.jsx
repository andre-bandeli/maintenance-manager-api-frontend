import React from 'react'
import Navbar from '../../../components/darkNavbar/Navbar'
import Footer from '../../../components/footer/Footer'
import FormularioMaquinas from './FormularioMaquinas'
import './formularioMaquinas.scss'

export default function IndexFormularioMaquinas
() {
  return (
    <div className='indexFormularioMaquinas'>
        <Navbar/>
        <FormularioMaquinas/>
        <Footer/>
    </div>
  )
}
