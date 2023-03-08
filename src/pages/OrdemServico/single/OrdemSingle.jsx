import React from 'react'
import './ordemSingle.scss'
import Footer from '../../../components/footer/Footer'
import Navbar from '../../../components/darkNavbar/Navbar'
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

export default function OrdemSingle() {

  const[ordem,setOrdem]=useState([]);

  const { id } = useParams();
  const url = `http://localhost:8080/api/v1/ordem/getordem/${id}`;

  useEffect(()=>{
      fetch(url)
      .then(res=>res.json())
      .then((result)=>{
        setOrdem(result);
      }
    )
  },[])


  return (
    <div className='ordemSingle'>
        <Navbar/>
        <div className="containerSingle">

          <h1>Ordem de Serviço #{ordem.codigo}</h1>

          <div className="box">
            <div className="md-3">
                <h3>{ordem.maquina}</h3>
            </div>
            <div className="md-3">
            <h3>{ordem.setor}</h3>
              </div>
              <div className="md-3">
              <h3>{ordem.nomeSolicitante}</h3>
              </div>
              <div className="md-3">
              <h3>{ordem.dataordem}</h3>
              </div>
              <div className="md-10">
              <h3>{ordem.descricao}</h3>
              </div>
              <div className="md-3">
              <h3>{ordem.is_urgente}</h3>
              </div>

          </div>

        </div>
        <Footer/>

    </div>
  )
}
