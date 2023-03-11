import React from 'react'
import Footer from '../../components/footer/Footer'
import './sobre.scss'
import { Link } from "react-router-dom";
import CustomCarousel from './CustomCarousel';


export default function Sobre() {
  return (
    <div className='sobre'>

        <div className="main">
          <div className="header">
            <CustomCarousel/>
          </div>
          
        </div>
        <Footer/>
    </div>
  )
}
