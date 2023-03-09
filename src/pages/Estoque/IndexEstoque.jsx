import React from 'react'
import Navbar from '../../components/darkNavbar/Navbar'
import Footer from '../../components/footer/Footer'
import Estoque from './components/Estoque'
import './forms/formularioEstoque.scss'

export default function IndexEstoque
() {
  return (
    <div className='indexEstoque'>
        <Navbar/>
        <Estoque/>
        <Footer/>
    </div>
  )
}
