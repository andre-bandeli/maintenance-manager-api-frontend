import React from 'react'
import './carousel.scss'
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

import {primeiroSlide} from './slides'
import { useState } from 'react';


export default function CustomCarousel() {


  const [inicialSlider] = useState(primeiroSlide);
  return (
      <div className='carouselContainer'>
      <Carousel className='carouselBootstrap' indicators={false}>
          {inicialSlider.map((d) => (
            <Carousel.Item className='carouselItem' interval={3500}>

              <div className="carouselItemContent">
                  <h2>{d.primeiroTexto} <br /> <span>{d.span}</span></h2>
                  <h3>{d.segundoTexto}</h3>
                
                </div>
            </Carousel.Item>
          ))}
      </Carousel>
      </div>
  )
}