import React from 'react'
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

import './solicitacaoServico.scss'


export default function SolicitacaoServico() {

  const [solicitacaoServico, setSolicitacaoServico] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(10);

  useEffect(() => {
    fetch('http://localhost:8080/api/v1/solicitacao/list')
      .then(response => response.json())
      .then(data => setSolicitacaoServico(data))
      .catch(error => console.error(error))
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:8080/api/v1/solicitacao/remove/${id}`, {
      method: 'DELETE',
    })
    .then(response => {
      if (response.ok) {
        setSolicitacaoServico(solicitacaoServico.filter(s => s.id !== id));
      } else {
        throw new Error('Erro ao excluir a solicitação.');
      }
    })
    .catch(error => console.error(error));
  };


  const indexOfLast = currentPage * perPage;
  const indexOfFirst = indexOfLast - perPage;
  const currentSO = solicitacaoServico.slice(indexOfFirst, indexOfLast);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);


  return (
    <div className='solicitacaoServico'>
      <div className="containerSolicitacaoServico">
        <div className="containerList">
          <h1>Solicitações de Serviço</h1>
          <div className="buttons">
            <button>
                <Link to="/new-solicitacao"> criar nova solicitação</Link>
            </button>
            <button>
                <Link to="/os"> ver ordens de serviço</Link>
            </button>
            <button>
                <Link to="/os"> gerar relatório</Link>
            </button>
          </div>

          <div className="List">
            <ul>
              <li className="header">
                <span>Código</span>
                <span>Máquina</span>
                <span>Setor</span>
                <span className='span-mobile-tableb-remove'>Solicitante</span>
                <span className='span-mobile-first-remove'>Descrição</span>
                <span>Data de abertura</span>
                <span>Prioridade</span>
                <span className='span-mobile-tableb-remove'>Status</span>
                <span className='span-mobile-tableb-remove'>edit</span>
                <span className='span-mobile-tableb-remove'> excluir</span>
                <span className='span-mobile-first-remove'> ver</span>
              
              </li>
              { currentSO.map(solicitacao => (
              <Link to={`/ss/${solicitacao.id}`}>
              <li key={solicitacao.id}>
                <span>{solicitacao.codigo}</span>
                <span>{solicitacao.maquina}</span>
                <span>{solicitacao.setor}</span>
                <span className='span-mobile-tableb-remove'>{solicitacao.nomeSolicitante}</span>
                <span className='span-mobile-first-remove'>{solicitacao.descricao}</span>
                <span>{solicitacao.dataSolicitacao}</span>
                <span>{solicitacao.is_urgente ? "Urgente" : "Não Urgente"}</span>
                <span className='span-mobile-tableb-remove'>{solicitacao.status}</span>
                <span className='span-mobile-tableb-remove'><button className='btn-edit'>edit</button></span>
                <span className='span-mobile-tableb-remove'>  <button className='btn-delete' onClick={() => handleDelete(solicitacao.id)}> 
                <Link to='/ss'>excluir</Link></button></span>
                <span className='span-mobile-first-remove'>  <button className='btn-details' onClick={() => handleDelete(solicitacao.id)}> 
                <Link to='/ss'>detalhes</Link></button></span>
              </li></Link>
              ))}
               <Pagination
                    perPage={perPage}
                    totalProdutos={solicitacaoServico.length}
                    paginate={paginate}
                />
            </ul>
          </div>
        
        </div>
      </div>
    </div>
  )
}

const Pagination = ({ perPage, totalProdutos, paginate }) => {
const pageNumbers = [];
  
for (let i = 1; i <= Math.ceil(totalProdutos / perPage); i++) {
  pageNumbers.push(i);
}
  
  return (
      <nav className='pagination'>
          <ul>
          {pageNumbers.map(number => (
              <li key={number} className='page-item'>
                  <a onClick={() => paginate(number)} className='page-link'>
                      {number}
                  </a>
              </li>
          ))}
          </ul>
      </nav>
  );
};