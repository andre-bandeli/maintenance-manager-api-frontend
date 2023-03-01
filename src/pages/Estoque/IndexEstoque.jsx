import React from 'react'
import Navbar from '../../components/darkNavbar/Navbar'
import Footer from '../../components/footer/Footer'
import OrdemServico from './Estoque'
import './estoque.scss'

export default function IndexEstoque
() {
  return (
    <div className='indexEstoque'>
        <Navbar/>
        <OrdemServico/>
        <Footer/>
    </div>
  )
}
