import React from 'react'
import './formularioEstoque.scss'
import { useState, useEffect } from 'react';


export default function FormularioEstoque() {

    const [id, setId] = useState("")
    const [codigo, setCodigo] = useState("")
    const [nome, setNome] = useState("")
    const [saldo, setSaldo] = useState("")
    const [saldoMin, setSaldoMin] = useState("")

    const onSubmit = (e) => {
      e.preventDefault();
      console.log("refresh prevented");
    };
  
    const handleClick=(e)=> {
      e.preventDefault()
      const dados = {id, codigo, nome, saldo, saldoMin}
      console.log(dados)
    
    
        fetch("http://localhost:8080/api/v1/produto/add",{
          method:"POST",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify(dados)
        }).then(()=> {
            setTimeout(() => {
            }, 10);
            setTimeout(() => {
              }, 5000);
            setId("")
            setCodigo("")
            setNome("")
            setSaldo("")
            setSaldoMin("")
            window.location.href = "/estoque";
        })
    }


    return (
        <div className='formularioEstoque'>
            <div className="containerFormularioEstoque">
              <div className="containerList">
                  <form onSubmit={onSubmit} className="forms">
                    <h1>Adicionar Produto</h1>

                  
                    <label htmlFor="codigo">Código:</label>
                    <input type="text" id="codigo" value={codigo} onChange={(e) => setCodigo(e.target.value)} />

                    <label htmlFor="nome">Nome do Produto:</label>
                    <input type="text" id="nome" value={nome} onChange={(e) => setNome(e.target.value)} />

                    <label htmlFor="saldo">Saldo Atual:</label>
                    <input type="text" id="saldo" value={saldo} onChange={(e) => setSaldo(e.target.value)} />

                    <label htmlFor="saldoMin">Saldo Mínimo:</label>
                    <input type="text" id="saldoMin" value={saldoMin} onChange={(e) => setSaldoMin(e.target.value)} />

            <button onClick={handleClick} type="submit">Enviar</button>
          </form>
              </div>
            </div>
        </div>
  )
}
