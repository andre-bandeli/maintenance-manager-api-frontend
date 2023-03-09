import React from 'react'
import './formularioMaquinas.scss'
import { useState, useEffect } from 'react';


export default function FormularioMaquinas() {
    
    const [id, setId] = useState([]);
    const [nome, setNome] = useState([]);
    const [codigo, setCodigo] = useState("")
    const [setor, setSetor] = useState("")
    const [dataInicioOperacao, setDataInicioOperacao] = useState("")
    const [nivelPrioridade, setNivelPrioridade] = useState("")
    const [isActive, setIsActive] = useState("")


    const onSubmit = (e) => {
        e.preventDefault();
        console.log("refresh prevented");
      };

      const handleClick=(e)=> {
        e.preventDefault()
        const dados = {id, nome, codigo, setor, dataInicioOperacao,  nivelPrioridade, isActive}
        console.log(dados)
    
    
        fetch("http://localhost:8080/api/v1/maquinas/add",{
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
            setCodigo("")
            setSetor("")
            setDataInicioOperacao("")
            setNivelPrioridade("")
            setIsActive("")

            window.location.href = "/maquinas";
        })
    }


    return (
        <div className='formularioMaquinas'>
            <div className="containerFormularioMaquinas">
              <div className="containerList">
                  <form onSubmit={onSubmit} className="forms">
                    <h1>Adicionar Máquina</h1>

                  
                    <label htmlFor="codigo">Código:</label>
                    <input type="text" id="codigo" value={codigo} onChange={(e) => setCodigo(e.target.value)} />

                    <label htmlFor="maquina">Máquina:</label>
                    <input type="text" id="maquina" value={nome} onChange={(e) => setNome(e.target.value)} />

                    <label htmlFor="setor">Setor:</label>
                    <input type="text" id="setor" value={setor} onChange={(e) => setSetor(e.target.value)} />
                    

                    <label htmlFor="dataInicioOperacao">Data de Inicio Operação</label>
                    <input type="text" id="dataInicioOperacao" value={dataInicioOperacao} onChange={(e) => setDataInicioOperacao(e.target.value)} />

                    <label htmlFor="nivelPrioridade">Nível Prioridade:</label>
                    <textarea id="nivelPrioridade" value={nivelPrioridade} onChange={(e) => setNivelPrioridade(e.target.value)} />


            <button onClick={handleClick} type="submit">Enviar</button>
          </form>
              </div>
            </div>
        </div>
  )
}
