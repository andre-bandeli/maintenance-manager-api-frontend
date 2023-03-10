import React from 'react'
import './fornecedorSingle.scss'

import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import Navbar from '../../../components/darkNavbar/Navbar';
import Footer from '../../../components/footer/Footer';

export default function FornecedorSingle() {

  const[fornecedor,setFornecedor]=useState([]);

  const { id } = useParams();
  const url = `http://localhost:8080/api/v1/fornecedor/getfornecedor/${id}`;

  useEffect(()=>{
      fetch(url)
      .then(res=>res.json())
      .then((result)=>{
        setFornecedor(result);
      }
    )
  },[])


  return (
    <div className='fornecedorSingle'>
        <Navbar/>
        <div className="containerSingle">

          <h1>{fornecedor.nome}</h1>

          <div className="box">
            <div className="md-3">
                <h3>{fornecedor.setor}</h3>
            </div>
            <div className="md-3">
            <h3>{fornecedor.nicho}</h3>
              </div>
              <div className="md-3">
              <h3>{fornecedor.cnpj}</h3>
              </div>
              <div className="md-3">
              <h3>{fornecedor.contato}</h3>
              </div>
              <div className="md-10">
              <h3>{fornecedor.email}</h3>
              </div>

          </div>

        </div>
        <Footer/>

    </div>
  )
}
