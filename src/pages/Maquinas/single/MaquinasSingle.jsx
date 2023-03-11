import React from 'react'
import './maquinasSingle.scss'
import Footer from '../../../components/footer/Footer'
import Navbar from '../../../components/darkNavbar/Navbar'
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

export default function MaquinasSingle() {

  const[maquina,setMaquina]=useState([]);

  const { id } = useParams();
  const url = `http://localhost:8080/api/v1/maquinas/getmaquina/${id}`;

  useEffect(()=>{
      fetch(url)
      .then(res=>res.json())
      .then((result)=>{
        setMaquina(result);
      }
    )
  },[])


  return (
    <div className='maquinasSingle'>
        <Navbar/>
        <div className="containerSingle">

          <h1>{maquina.nome}</h1>

          <div className="box">
            <h2>Máquina</h2>
            <div className="md-3">
                <h3>{maquina.nome}</h3>
            </div>
            <h2>Código</h2>
            <div className="md-3">
            <h3>{maquina.codigo}</h3>
              </div>
              <h2>Setor</h2>
              <div className="md-3">
              <h3>{maquina.setor}</h3>
              </div>
              <h2>Data de ínicio operação</h2>
              <div className="md-3">
              <h3>{maquina.data_inicio_operacao}</h3>
              </div>
              <h2>Em operação</h2>
              <div className="md-10">
              <h3>{maquina.emAtividade}</h3>
              </div>
          </div>

        </div>
        <Footer/>

    </div>
  )
}
