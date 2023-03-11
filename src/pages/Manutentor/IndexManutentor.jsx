import React from 'react'
import Navbar from '../../components/darkNavbar/Navbar'
import Footer from '../../components/footer/Footer'
import Cards from './Cards'
import Manutentor from './Manutentor'


export default function IndexManutentor() {
  return (
    <div className='indexManutentor'>
        <Navbar/>
        <h1>Área do Manutentor</h1>
        <Manutentor/>
        <Footer/>
    </div>
  )
}
