import React from 'react'
import Navbar from '../../components/darkNavbar/Navbar'
import Footer from '../../components/footer/Footer'
import OrdemServico from './Usuario'
import './usuario.scss'

export default function IndexUsuario
() {
  return (
    <div className='indexUsuario'>
        <Navbar/>
        <OrdemServico/>
        <Footer/>
    </div>
  )
}
