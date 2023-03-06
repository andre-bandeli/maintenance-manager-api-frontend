import React from 'react'
import Navbar from '../../components/darkNavbar/Navbar'
import Footer from '../../components/footer/Footer'
import Maquinas from './Maquinas'
import './formularioMaquinas.scss'

export default function IndexMaquinas
() {
  return (
    <div className='indexMaquinas'>
        <Navbar/>
        <Maquinas/>
        <Footer/>
    </div>
  )
}
