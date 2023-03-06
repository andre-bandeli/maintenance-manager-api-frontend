import React from 'react'
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

import './ordemServico.scss'


export default function OrdemServico() {

  const [ordemServico, setOrdemServico] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(10);

  useEffect(() => {
    fetch('http://localhost:8080/api/v1/os/list')
      .then(response => response.json())
      .then(data => setOrdemServico(data))
      .catch(error => console.error(error))
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:8080/api/v1/os/delete/${id}`, {
      method: 'DELETE',
    })
    .then(response => {
      if (response.ok) {
        setOrdemServico(ordemServico.filter(s => s.id !== id));
      } else {
        throw new Error('Erro ao excluir a ordem.');
      }
    })
    .catch(error => console.error(error));
  };


  const indexOfLast = currentPage * perPage;
  const indexOfFirst = indexOfLast - perPage;
  const currentSO = ordemServico.slice(indexOfFirst, indexOfLast);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);


  return (
    <div className='ordemServico'>
      <div className="containerOrdemServico">
        <div className="containerList">
          <h1>Ordens de Serviço</h1>
          <div className="buttons">
            <button>
                <Link to="/new-ordem"> criar nova OS</Link>
            </button>
            <button>
                <Link to="/os"> ver OS</Link>
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
                <span>Solicitante</span>
                <span>Descrição</span>
                <span>Data de abertura</span>
                <span>Data de fechamento</span>
                <span>Status</span>
                <span> <h3>edit</h3> <h3>excluir</h3> <h3>ver +</h3></span>
              </li>
              { currentSO.map(ordem => (
              <li key={ordem.id}>
                <span>{ordem.codigo}</span>
                <span>{ordem.maquina}</span>
                <span>{ordem.setor}</span>
                <span>{ordem.nomeSolicitante}</span>
                <span>{ordem.descricao}</span>
                <span>{ordem.dataSolicitacao}</span>
                <span>{ordem.dataFechamento}</span>
                <span>{ordem.status}</span>
                <span>
                  <button className='btn-edit'>edit</button>
                  <button className='btn-delete' onClick={() => handleDelete(ordem.id)}> <Link to='/ss'>excluir</Link></button>
                  <button className='btn-details'>
                  <Link to={`/ss/${ordem.id}`}>
                    ver + </Link> </button>
                </span>
              </li>
              ))}
               <Pagination
                    perPage={perPage}
                    totalProdutos={ordemServico.length}
                    paginate={paginate}
                />
            </ul>
          </div>
        
        </div>
      </div>
    </div>
  )
}

const Pagination = ({ perPage, totalOrdens, paginate }) => {
const pageNumbers = [];
  
for (let i = 1; i <= Math.ceil(totalOrdens / perPage); i++) {
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