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
          <h1>Fornecedores</h1>
          <div className="buttons">
            <button>
                <Link to="/new-fornecedor"> Adicinar Fornecedor</Link>
            </button>
            <button>
                <Link to="/os"> Gerar relatório</Link>
            </button>
          </div>

          <div className="List">
            <ul>
              <li className="header">
                <span>Nome</span>
                <span className='span-mobile-tableb-remove'>Setor</span>
                <span>Nicho</span>
                <span className='span-mobile-tableb-remove'>CNPJ</span>
                <span>Contato</span>
                <span>Email</span>

                <span className='span-mobile-tableb-remove'>edit</span>
                <span className='span-mobile-tableb-remove'> excluir</span>
                <span className='span-mobile-first-remove'> ver</span>
              </li>
              { currentSO.map(fornecedor => (
                <Link to={`/fornecedor/${fornecedor.id}`}>
              <li key={fornecedor.id}>
                <span>{fornecedor.nome}</span>
                <span className='span-mobile-tableb-remove'>{fornecedor.setor}</span>
                <span>{fornecedor.nicho}</span>
                <span className='span-mobile-tableb-remove'>{fornecedor.cnpj}</span>
                <span>{fornecedor.contato}</span>
                <span>{fornecedor.email}</span>
                <span className='span-mobile-tableb-remove'><button className='btn-edit'> edit</button>
                </span>
                <span className='span-mobile-tableb-remove'>  <button className='btn-delete' onClick={() => handleDelete(fornecedor.id)}> 
                <Link to='/fornecedor'>excluir</Link></button></span>
                <span className='span-mobile-first-remove'>  <button className='btn-details'> 
                <Link to={`/fornecedor/${fornecedor.id}`}>detalhes</Link></button></span>
              </li></Link>
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