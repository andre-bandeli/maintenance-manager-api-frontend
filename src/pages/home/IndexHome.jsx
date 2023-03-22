import React from 'react'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/darkNavbar/Navbar'
import Home from './Home'
import './responsive.css'
import './home.scss'

export default function IndexHome() {
  return (
    <div className='IndexHome'>
        <Navbar/>
        <Home/>
        <Footer/>
    </div>
  )
}
