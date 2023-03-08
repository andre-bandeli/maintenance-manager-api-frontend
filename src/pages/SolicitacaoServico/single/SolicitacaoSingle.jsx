import React from 'react'
import './solicitacaoSingle.scss'
import Footer from '../../../components/footer/Footer'
import Navbar from '../../../components/darkNavbar/Navbar'
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

export default function SolicitacaoSingle() {

  const[solicitacao,setSolicitacao]=useState([]);

  const { id } = useParams();
  const url = `http://localhost:8080/api/v1/so/get/${id}`;

  useEffect(()=>{
      fetch(url)
      .then(res=>res.json())
      .then((result)=>{
        setSolicitacao(result);
      }
    )
  },[])


  return (
    <div className='solicitacaoSingle'>
        <Navbar/>
        <div className="containerSingle">

          <h1>Solicitação de Serviço #{solicitacao.codigo}</h1>

          <div className="box">
            <div className="md-3">
                <h3>{solicitacao.maquina}</h3>
            </div>
            <div className="md-3">
            <h3>{solicitacao.setor}</h3>
              </div>
              <div className="md-3">
              <h3>{solicitacao.nomeSolicitante}</h3>
              </div>
              <div className="md-3">
              <h3>{solicitacao.dataSolicitacao}</h3>
              </div>
              <div className="md-10">
              <h3>{solicitacao.descricao}</h3>
              </div>
              <div className="md-3">
              <h3>{solicitacao.is_urgente}</h3>
              </div>

          </div>

        </div>
        <Footer/>

    </div>
  )
}
