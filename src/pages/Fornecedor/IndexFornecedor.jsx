import React from 'react'
import Navbar from '../../components/darkNavbar/Navbar'
import Footer from '../../components/footer/Footer'

import Fornecedor from './components/Fornecedor'
import './forms/formularioFornecedor.scss'

export default function IndexFornecedor
() {
  return (
    <div className='indexFornecedor'>
        <Navbar/>
        <Fornecedor/>
        <Footer/>
    </div>
  )
}
