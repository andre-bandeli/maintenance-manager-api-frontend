import React from 'react'
import './formularioFornecedor.scss'
import { useState, useEffect } from 'react';


export default function FormularioFornecedor() {

    const [id, setId] = useState("");
    const [nome, setNome] = useState([]);
    const [setor, setSetor] = useState("")
    const [nicho, setNicho] = useState("")
    const [cnpj, setCnpj] = useState("")
    const [contato, setContato] = useState("")
    const [email, setEmail] = useState("")

    const onSubmit = (e) => {
        e.preventDefault();
        console.log("refresh prevented");
      };

      const handleClick=(e)=> {
        e.preventDefault()
        const dados = {id, nome, nicho, cnpj, contato,  email}
        console.log(dados)
    
    
        fetch("http://localhost:8080/api/v1/fornecedor/add",{
          method:"POST",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify(dados)
        }).then(()=> {
            setTimeout(() => {
            }, 10);
            setTimeout(() => {
              }, 5000);
            setId("")
            setNome("")
            setSetor("")
            setNicho("")
            setCnpj("")
            setContato("")
            setEmail("")
            window.location.href = "/fornecedor";
        })
    }


    return (
        <div className='formularioFornecedor'>
            <div className="containerFormularioFornecedor">
              <div className="containerList">
                  <form onSubmit={onSubmit} className="forms">
                    <h1>Adicionar Fornecedor</h1>

                    <label htmlFor="nome">Nome</label>
                    <input type="text" id="nome" value={nome} onChange={(e) => setNome(e.target.value)} />

                    <label htmlFor="setor">Setor</label>
                    <input type="text" id="setor" value={setor} onChange={(e) => setSetor(e.target.value)} />

                    <label htmlFor="nicho">Nicho</label>
                    <input type="text" id="nicho" value={nicho} onChange={(e) => setNicho(e.target.value)} />

                    <label htmlFor="cnpj">CNPJ</label>
                    <input type="text" id="cnpj" value={cnpj} onChange={(e) => setCnpj(e.target.value)} />

                    <label htmlFor="contato">Contatos</label>
                    <input type="text" id="contato" value={contato} onChange={(e) => setContato(e.target.value)} />

                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />

            <button onClick={handleClick} type="submit">Enviar</button>
          </form>
              </div>
            </div>
        </div>
  )
}
