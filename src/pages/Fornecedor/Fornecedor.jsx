import React from 'react'
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

import './fornecedor.scss'


export default function Fornecedor() {

  const [fornecedor, setFornecedor] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(10);

  useEffect(() => {
    fetch('http://localhost:8080/api/v1/fornecedor/list')
      .then(response => response.json())
      .then(data => setFornecedor(data))
      .catch(error => console.error(error))
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:8080/api/v1/fornecedor/delete/${id}`, {
      method: 'DELETE',
    })
    .then(response => {
      if (response.ok) {
        setFornecedor(Fornecedor.filter(s => s.id !== id));
      } else {
        throw new Error('Erro ao excluir fornecedor.');
      }
    })
    .catch(error => console.error(error));
  };


  const indexOfLast = currentPage * perPage;
  const indexOfFirst = indexOfLast - perPage;
  const currentSO = fornecedor.slice(indexOfFirst, indexOfLast);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);


  return (
    <div className='fornecedor'>
      <div className="containerFornecedor">
        <div className="containerList">
          <h1>Fornecedor</h1>
          <div className="buttons">
            <button>
                <Link to="/new-ordem"> Adicinar Fornecedor</Link>
            </button>
            <button>
                <Link to="/os"> Gerar relatório</Link>
            </button>
          </div>

          <div className="List">
            <ul>
              <li className="header">
                <span>Nome</span>
                <span>Setor</span>
                <span>Nicho</span>
                <span>CNPJ</span>
                <span>Contato</span>
                <span>Email</span>

                <span> <h3>edit</h3> <h3>excluir</h3> <h3>ver +</h3></span>
              </li>
              { currentSO.map(fornecedor => (
              <li key={fornecedor.id}>
                <span>{fornecedor.nome}</span>
                <span>{fornecedor.setor}</span>
                <span>{fornecedor.nicho}</span>
                <span>{fornecedor.cnpj}</span>
                <span>{fornecedor.contato}</span>
                <span>{fornecedor.email}</span>
                <span>
                  <button className='btn-edit'>edit</button>
                  <button className='btn-delete' onClick={() => handleDelete(fornecedor.id)}> <Link to='/ss'>excluir</Link></button>
                  <button className='btn-details'>
                  <Link to={`/ss/${fornecedor.id}`}>
                    ver + </Link> </button>
                </span>
              </li>
              ))}
               <Pagination
                    perPage={perPage}
                    totalProdutos={fornecedor.length}
                    paginate={paginate}
                />
            </ul>
          </div>
        
        </div>
      </div>
    </div>
  )
}

const Pagination = ({ perPage, totalFornecedor, paginate }) => {
const pageNumbers = [];
  
for (let i = 1; i <= Math.ceil(totalFornecedor / perPage); i++) {
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