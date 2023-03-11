import React from 'react'
import Navbar from '../../components/darkNavbar/Navbar'
import Footer from '../../components/footer/Footer'
import Cards from './CardsFinanceiro'
import Financeiro from './Financeiro'


export default function IndexFinanceiro() {
  return (
    <div className='indexFinanceiro'>
        <Navbar/>
        <h1>Financeiro</h1>
        <Financeiro/>
        <Footer/>
    </div>
  )
}
