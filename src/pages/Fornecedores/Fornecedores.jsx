import React from 'react'
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

import './fornecedores.scss'


export default function Fornecedores() {

  const [fornecedores, setFornecedores] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(10);

  useEffect(() => {
    fetch('http://localhost:8080/api/v1/fornecedores/list')
      .then(response => response.json())
      .then(data => setFornecedores(data))
      .catch(error => console.error(error))
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:8080/api/v1/os/delete/${id}`, {
      method: 'DELETE',
    })
    .then(response => {
      if (response.ok) {
        setFornecedores(Fornecedores.filter(s => s.id !== id));
      } else {
        throw new Error('Erro ao excluir a ordem.');
      }
    })
    .catch(error => console.error(error));
  };


  const indexOfLast = currentPage * perPage;
  const indexOfFirst = indexOfLast - perPage;
  const currentSO = fornecedores.slice(indexOfFirst, indexOfLast);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);


  return (
    <div className='fornecedores'>
      <div className="containerFornecedores">
        <div className="containerList">
          <h1>Fornecedores</h1>
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
              { currentSO.map(fornecedores => (
              <li key={fornecedores.id}>
                <span>{fornecedores.codigo}</span>
                <span>{fornecedores.maquina}</span>
                <span>{fornecedores.setor}</span>
                <span>{fornecedores.nomeSolicitante}</span>
                <span>{fornecedores.descricao}</span>
                <span>{fornecedores.dataSolicitacao}</span>
                <span>{fornecedores.dataFechamento}</span>
                <span>{fornecedores.status}</span>
                <span>
                  <button className='btn-edit'>edit</button>
                  <button className='btn-delete' onClick={() => handleDelete(fornecedores.id)}> <Link to='/ss'>excluir</Link></button>
                  <button className='btn-details'>
                  <Link to={`/ss/${fornecedores.id}`}>
                    ver + </Link> </button>
                </span>
              </li>
              ))}
               <Pagination
                    perPage={perPage}
                    totalProdutos={fornecedores.length}
                    paginate={paginate}
                />
            </ul>
          </div>
        
        </div>
      </div>
    </div>
  )
}

const Pagination = ({ perPage, totalFornecedores, paginate }) => {
const pageNumbers = [];
  
for (let i = 1; i <= Math.ceil(totalFornecedores / perPage); i++) {
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