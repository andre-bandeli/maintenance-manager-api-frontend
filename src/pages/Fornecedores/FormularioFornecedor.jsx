import React from 'react'
import './formularioFornecedores.scss'
import { useState, useEffect } from 'react';


export default function FormularioFornecedores() {

    const [idSolicitacao, setIdSolicitacao] = useState("");
    const [solicitacoes, setSolicitacoes] = useState([]);
    const [id, setId] = useState("")
    const [codigo, setCodigo] = useState("")
    const [maquina, setMaquina] = useState("")
    const [setor, setSetor] = useState("")
    const [status, setStatus] = useState("")
    const [nomeSolicitante, setNomeSolicitante] = useState("")
    const [dataSolicitacao, setdataSolicitacao] = useState("")
    const [descricao, setDescricao] = useState("")
    const [is_urgente, setIs_urgente] = useState("")
    const [dataFechamento, setDataFechamento] = useState("")
    const [tecnicoResponsavel, setTecnicoResponsavel] = useState("")
    const [observacoes, setObservacoes] = useState("")

    useEffect(() => {
      fetch("http://localhost:8080/api/v1/so/list")
        .then(res => res.json())
        .then(data => setSolicitacoes(data))
        .catch(err => console.log(err));
    }, []);

    const handleSelect = (e) => {
      const id = e.target.value;
      const solicitacao = solicitacoes.find(s => s.id === Number(id));
      setIdSolicitacao(solicitacao.id);
      setMaquina(solicitacao.maquina);
      setSetor(solicitacao.setor);
      setStatus(solicitacao.status);
      setNomeSolicitante(solicitacao.nomeSolicitante);
      setdataSolicitacao(solicitacao.dataSolicitacao);
      setDescricao(solicitacao.descricao);
      setIs_urgente(solicitacao.is_urgente);
      setTecnicoResponsavel(solicitacao.tecnicoResponsavel);
      setObservacoes(solicitacao.observacoes);
      setId(solicitacao.id);
      setCodigo(solicitacao.codigo);
      setDataFechamento(solicitacao.dataFechamento);
    }
  

    const onSubmit = (e) => {
        e.preventDefault();
        console.log("refresh prevented");
      };

      const handleClick=(e)=> {
        e.preventDefault()
        const dados = {id, codigo, maquina,setor, status,  nomeSolicitante, dataSolicitacao, descricao, is_urgente, dataFechamento, tecnicoResponsavel, observacoes}
        console.log(dados)
    
    
        fetch("http://localhost:8080/api/v1/os/add",{
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
            setStatus("")
            setNomeSolicitante("")
            setdataSolicitacao("")
            setDescricao("")
            setIs_urgente("")
            setDataFechamento("")
            setTecnicoResponsavel("")
            setObservacoes("")
            window.location.href = "/ss";
        })
    }


    return (
        <div className='formularioFornecedores'>
            <div className="containerFormularioFornecedores">
              <div className="containerList">
                  <form onSubmit={onSubmit} className="forms">
                    <h1>Adicionar Fornecedor</h1>

                    <label htmlFor="idSolicitacao">Solicitação:</label>
                    <select id="idSolicitacao" value={idSolicitacao} onChange={handleSelect}>
                      <option value="">Selecione uma solicitação</option>
                      {solicitacoes.map(s => <option key={s.id} value={s.id}>{s.codigo}</option>)}
                    </select>
                    
                    <label htmlFor="codigo">Código:</label>
                    <input type="text" id="codigo" value={codigo} onChange={(e) => setCodigo(e.target.value)} />

                    <label htmlFor="maquina">Máquina:</label>
                    <input type="text" id="maquina" value={maquina} onChange={(e) => setMaquina(e.target.value)} />

                    <label htmlFor="setor">Setor:</label>
                    <input type="text" id="setor" value={setor} onChange={(e) => setSetor(e.target.value)} />

                    <label htmlFor="nomeSolicitante">Nome Solicitante:</label>
                    <input type="text" id="nomeSolicitante" value={nomeSolicitante} onChange={(e) => setNomeSolicitante(e.target.value)} />

                    <label htmlFor="descricao">Descrição:</label>
                    <textarea id="descricao" value={descricao} onChange={(e) => setDescricao(e.target.value)} />

                    <label htmlFor="dataAbertura">Data de Abertura:</label>
                    <input type="date" id="dataAbertura" value={dataSolicitacao} onChange={(e) => setdataSolicitacao(e.target.value)} />

                    <label htmlFor="nomeSolicitante">Prioridade</label>
                    <input type="text" id="is_urgente" value={is_urgente} onChange={(e) => setIs_urgente(e.target.value)} />

                    <label htmlFor="is_urgente">Status</label>
                    <select id="status" value={status} onChange={(e) => setStatus(e.target.value)}>

                      <option value="Aberto">Aberto</option>
                      <option value="Em andamento">Em andamento</option>
                      <option value="Finalizado">Finalizado</option>

                    </select>

                    <label htmlFor="dataFechamento">Data Fechamento:</label>
                    <input type="date" id="dataFechamento" value={dataFechamento} onChange={(e) => setDataFechamento(e.target.value)} />

                    <label htmlFor="tecnicoResponsavel">Técnico Responsável:</label>
                    <input type="text" id="tecnicoResponsavel" value={tecnicoResponsavel} onChange={(e) => setTecnicoResponsavel(e.target.value)} />

                    <label htmlFor="observacoes">Observacoes:</label>
                    <textarea id="observacoes" value={observacoes} onChange={(e) => setObservacoes(e.target.value)} />

            <button onClick={handleClick} type="submit">Enviar</button>
          </form>
              </div>
            </div>
        </div>
  )
}
