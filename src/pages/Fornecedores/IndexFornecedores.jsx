import React from 'react'
import Navbar from '../../components/darkNavbar/Navbar'
import Footer from '../../components/footer/Footer'
import Fornecedores from './Fornecedores'
import './formularioFornecedores.scss'

export default function IndexFornecedores
() {
  return (
    <div className='indexFornecedores'>
        <Navbar/>
        <Fornecedores/>
        <Footer/>
    </div>
  )
}
