import React from 'react'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import './cadastro.scss'

import Main from './Main'

export default function Cadastro() {
  return (
    <div className="cadastro">
        <Navbar/>
        <Main/>
        <Footer/>
    </div>
   
  )
}
