import React from 'react'
import { useState } from 'react'
import './formularioSolicitacao.scss'
import MenuLateral from '../../components/menuLateral/MenuLateral'



export default function FormularioSolicitacao() {


    const [id, setId] = useState("")
    const [codigo, setCodigo] = useState("")
    const [maquina, setMaquina] = useState("")
    const [setor, setSetor] = useState("")
    const [nomeSolicitante, setnomeSolicitante] = useState("")
    const [dataSolicitacao, setdataSolicitacao] = useState("")
    const [descricao, setDescricao] = useState("")
    const [is_urgente, setIs_urgente] = useState("")

    const onSubmit = (e) => {
        e.preventDefault();
        console.log("refresh prevented");
      };

      const handleClick=(e)=> {
        e.preventDefault()
        const dados = {id, codigo, maquina,setor, nomeSolicitante, dataSolicitacao, descricao, is_urgente}
        console.log(dados)
    
    
        fetch("http://localhost:8080/api/v1/so/add",{
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
                    <h1>Nova Solicitação</h1>
                    
                    <label htmlFor="codigo">Código:</label>
                    <input type="text" id="codigo" value={codigo} onChange={(e) => setCodigo(e.target.value)} />

                    <label htmlFor="maquina">Máquina:</label>
                    <input type="text" id="maquina" value={maquina} onChange={(e) => setMaquina(e.target.value)} />

                    <label htmlFor="setor">Setor:</label>
                    <input type="text" id="setor" value={setor} onChange={(e) => setSetor(e.target.value)} />

                    <label htmlFor="nomeSolicitante">nomeSolicitante:</label>
                    <input type="text" id="nomeSolicitante" value={nomeSolicitante} onChange={(e) => setnomeSolicitante(e.target.value)} />

                    <label htmlFor="descricao">Descrição:</label>
                    <textarea id="descricao" value={descricao} onChange={(e) => setDescricao(e.target.value)} />

                    <label htmlFor="dataAbertura">Data de Abertura:</label>
                    <input type="date" id="descricao" value={dataSolicitacao} onChange={(e) => setdataSolicitacao(e.target.value)} />

                    <label htmlFor="is_urgente">is_urgente:</label>
                    <select id="is_urgente" value={is_urgente} onChange={(e) => setIs_urgente(e.target.value)}>

                      <option value="aberto">Aberto</option>
                      <option value="emAndamento">Em andamento</option>
                      <option value="finalizado">Finalizado</option>

                    </select>

            <button onClick={handleClick} type="submit">Enviar</button>
          </form>
              </div>
            </div>
        </div>
  )
}
