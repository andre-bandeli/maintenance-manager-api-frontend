import React from 'react'
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

import './maquinas.scss'


export default function Maquinas() {

  const [maquinas, setMaquinas] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(10);

  useEffect(() => {
    fetch('http://localhost:8080/api/v1/os/list')
      .then(response => response.json())
      .then(data => setMaquinas(data))
      .catch(error => console.error(error))
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:8080/api/v1/os/delete/${id}`, {
      method: 'DELETE',
    })
    .then(response => {
      if (response.ok) {
        setMaquinas(maquinas.filter(s => s.id !== id));
      } else {
        throw new Error('Erro ao excluir máquina.');
      }
    })
    .catch(error => console.error(error));
  };


  const indexOfLast = currentPage * perPage;
  const indexOfFirst = indexOfLast - perPage;
  const currentSO = maquinas.slice(indexOfFirst, indexOfLast);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);


  return (
    <div className='maquinas'>
      <div className="containerMaquinas">
        <div className="containerList">
          <h1>Máquinas</h1>
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
              { currentSO.map(maquinas => (
              <li key={maquinas.id}>
                <span>{maquinas.codigo}</span>
                <span>{maquinas.maquina}</span>
                <span>{maquinas.setor}</span>
                <span>{maquinas.nomeSolicitante}</span>
                <span>{maquinas.descricao}</span>
                <span>{maquinas.dataSolicitacao}</span>
                <span>{maquinas.dataFechamento}</span>
                <span>{maquinas.status}</span>
                <span>
                  <button className='btn-edit'>edit</button>
                  <button className='btn-delete' onClick={() => handleDelete(maquinas.id)}> <Link to='/ss'>excluir</Link></button>
                  <button className='btn-details'>
                  <Link to={`/ss/${maquinas.id}`}>
                    ver + </Link> </button>
                </span>
              </li>
              ))}
               <Pagination
                    perPage={perPage}
                    totalProdutos={maquinas.length}
                    paginate={paginate}
                />
            </ul>
          </div>
        
        </div>
      </div>
    </div>
  )
}

const Pagination = ({ perPage, totalMaquinas, paginate }) => {
const pageNumbers = [];
  
for (let i = 1; i <= Math.ceil(totalMaquinas / perPage); i++) {
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