import React from 'react'
import Navbar from '../../components/darkNavbar/Navbar'
import Footer from '../../components/footer/Footer'
import OrdemServico from './Maquinas'
import './maquinas.scss'

export default function IndexMaquinas
() {
  return (
    <div className='indexMaquinas'>
        <Navbar/>
        <OrdemServico/>
        <Footer/>
    </div>
  )
}
