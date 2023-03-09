import React from 'react'
import './estoqueSingle.scss'
import Footer from '../../../components/footer/Footer'
import Navbar from '../../../components/darkNavbar/Navbar'
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

export default function EstoqueSingle() {

  const[produto,setProduto]=useState([]);

  const { id } = useParams();
  const url = `http://localhost:8080/api/v1/produto/get/${id}`;

  useEffect(()=>{
      fetch(url)
      .then(res=>res.json())
      .then((result)=>{
        setProduto(result);
      }
    )
  },[])


  return (
    <div className='estoqueSingle'>
        <Navbar/>
        <div className="containerSingle">

          <h1>{produto.nome}</h1>

          <div className="box">
            <div className='box-ct'>
              <h2>Código</h2>
              <div className="md-3">
                  <h3>{produto.codigo}</h3>
              </div>
            </div>
            <div className='box-ct'>
            <h2>Saldo</h2>
              <div className="md-3">
                <h3>{produto.saldo}</h3>
                </div>
            </div>
            <div className='box-ct'>
              <h2>Saldo Mínimo</h2>
                <div className="md-3">
                <h3>{produto.saldoMin}</h3>
                </div>
            </div>
             
          </div>

        </div>
        <Footer/>

    </div>
  )
}
