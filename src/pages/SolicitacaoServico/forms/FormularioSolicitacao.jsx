import React from 'react'
import { useState } from 'react'
import './formularioSolicitacao.scss'



export default function FormularioSolicitacao() {


    const [id, setId] = useState("")
    const [codigo, setCodigo] = useState("")
    const [maquina, setMaquina] = useState("")
    const [setor, setSetor] = useState("")
    const [nomeSolicitante, setnomeSolicitante] = useState("")
    const [dataSolicitacao, setdataSolicitacao] = useState("")
    const [descricao, setDescricao] = useState("")
    const [status, setStatus] = useState("")
    const [is_urgente, setIs_urgente] = useState("")

    const onSubmit = (e) => {
        e.preventDefault();
        console.log("refresh prevented");
      };

      const handleClick=(e)=> {
        e.preventDefault()
        const dados = {id, codigo, maquina,setor, nomeSolicitante, dataSolicitacao, descricao, is_urgente}
        console.log(dados)
    
    
        fetch("http://localhost:8080/api/v1/solicitacao/add",{
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
            setMaquina("")
            setSetor("")
            setnomeSolicitante("")
            setdataSolicitacao("")
            setDescricao("")
            setIs_urgente("")
            window.location.href = "/ss";
        })
    }


    return (
        <div className='formularioSolicitacao'>
            <div className="containerFormularioSolicitacao">
              <div className="containerList">
                  <form onSubmit={onSubmit} className="forms">
                    <h1>Nova Solicitação de Serviço</h1>
                    
                    <label htmlFor="codigo">Código:</label>
                    <input type="text" id="codigo" value={codigo} className="codigoInput" onChange={(e) => setCodigo(e.target.value)} />

                    <label htmlFor="maquina">Máquina:</label>
                    <input type="text" id="maquina" value={maquina} onChange={(e) => setMaquina(e.target.value)} />

                    <label htmlFor="setor">Setor:</label>
                    <input type="text" id="setor" value={setor} onChange={(e) => setSetor(e.target.value)} />

                    <label htmlFor="nomeSolicitante">Solicitante:</label>
                    <input type="text" id="nomeSolicitante" value={nomeSolicitante} onChange={(e) => setnomeSolicitante(e.target.value)} />

                    <label htmlFor="descricao">Descrição do problema:</label>
                    <textarea id="descricao" value={descricao} onChange={(e) => setDescricao(e.target.value)} />

                    <label htmlFor="dataAbertura">Data do chamado:</label>
                    <input type="date" id="descricao" value={dataSolicitacao} className="dataInput" onChange={(e) => setdataSolicitacao(e.target.value)} />

                    <label htmlFor="is_urgente">Prioridade</label>
                    <input type="text" id="is_urgente" value={is_urgente} className="prioridadeInput" onChange={(e) => setIs_urgente(e.target.value)} />

            <button onClick={handleClick} type="submit">Enviar</button>
          </form>
              </div>
            </div>
        </div>
  )
}
