import React from 'react'
import { useState } from 'react'
import './formularioEstoque.scss'
import MenuLateral from '../../components/menuLateral/MenuLateral'

export default function FormularioEstoque() {

    const [id, setId] = useState("")
    const [maquina, setMaquina] = useState("")
    const [setor, setSetor] = useState("")
    const [linha, setLinha] = useState("")
    const [solicitante, setSolicitante] = useState("")
    const [descricao, setDescricao] = useState("")
    const [dataAbertura, setDataAbertura] = useState("")
    const [status, setStatus] = useState("")

    const onSubmit = (e) => {
        e.preventDefault();
        console.log("refresh prevented");
      };

      const handleClick=(e)=> {
        e.preventDefault()
        const dados = {id, maquina, setor, linha, solicitante, descricao, dataAbertura, status}
        console.log(dados)
    
    
        fetch("http://127.0.0.1:8085/api/v1/so/add",{
          method:"POST",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify(dados)
        }).then(()=> {
            setTimeout(() => {
            }, 10);
            setTimeout(() => {
              }, 5000);
            setId("")
            setMaquina("")
            setSetor("")
            setLinha("")
            setSolicitante("")
            setDescricao("")
            setDataAbertura("")
            setStatus("")
        })
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      const dados = {id, maquina, setor, linha, solicitante, descricao, dataAbertura, status};
      console.log(dados);
      // Enviar dados para API ou banco de dados
    };

    return (
        <div className='formularioEstoque'>
            <div className="containerFormularioEstoque">
              <MenuLateral/>
              <div className="containerList">
                <h1>Adicionar novo item ao estoque</h1>

                  <form onSubmit={handleSubmit} className="forms">
                    <label htmlFor="id">ID:</label>
                    <input type="text" id="id" value={id} onChange={(e) => setId(e.target.value)} />

                    <label htmlFor="maquina">Máquina:</label>
                    <input type="text" id="maquina" value={maquina} onChange={(e) => setMaquina(e.target.value)} />

                    <label htmlFor="setor">Setor:</label>
                    <input type="text" id="setor" value={setor} onChange={(e) => setSetor(e.target.value)} />

                    <label htmlFor="linha">Linha:</label>
                    <input type="text" id="linha" value={linha} onChange={(e) => setLinha(e.target.value)} />

                    <label htmlFor="solicitante">Solicitante:</label>
                    <input type="text" id="solicitante" value={solicitante} onChange={(e) => setSolicitante(e.target.value)} />

                    <label htmlFor="descricao">Descrição:</label>
                    <textarea id="descricao" value={descricao} onChange={(e) => setDescricao(e.target.value)} />

                    <label htmlFor="dataAbertura">Data de Abertura:</label>
                    <input type="date" id="dataAbertura" value={dataAbertura} onChange={(e) => setDataAbertura(e.target.value)} />

                    <label htmlFor="status">Status:</label>
                    <select id="status" value={status} onChange={(e) => setStatus(e.target.value)}>
                      <option value="aberto">Aberto</option>
                      <option value="emAndamento">Em andamento</option>
                      <option value="finalizado">Finalizado</option>
                    </select>

            <button type="submit">Enviar</button>
          </form>
              </div>
            </div>
        </div>
  )
}
