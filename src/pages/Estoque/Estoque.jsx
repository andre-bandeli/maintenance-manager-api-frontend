import React from 'react'
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

import './estoque.scss'


export default function Estoque() {

  const [estoque, setEstoque] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(10);

  useEffect(() => {
    fetch('http://localhost:8080/api/v1/produto/list')
      .then(response => response.json())
      .then(data => setEstoque(data))
      .catch(error => console.error(error))
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:8080/api/v1/os/remove/${id}`, {
      method: 'DELETE',
    })
    .then(response => {
      if (response.ok) {
        setEstoque(estoque.filter(s => s.id !== id));
      } else {
        throw new Error('Erro ao excluir a produto.');
      }
    })
    .catch(error => console.error(error));
  };


  const indexOfLast = currentPage * perPage;
  const indexOfFirst = indexOfLast - perPage;
  const currentSO = estoque.slice(indexOfFirst, indexOfLast);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);


  return (
    <div className='estoque'>
      <div className="containerEstoque">
        <div className="containerList">
          <h1>Estoque</h1>
          <div className="buttons">
            <button>
                <Link to="/new-ordem"> Adicionar Produto</Link>
            </button>
            <button>
                <Link to="/os"> gerar relatório</Link>
            </button>
          </div>

          <div className="List">
            <ul>
              <li className="header">
                <span>Código</span>
                <span>Produto</span>
                <span>Saldo Atual</span>
                <span>Saldo Mínimo</span>
                <span> <h3>edit</h3> <h3>excluir</h3> <h3>ver +</h3></span>
              </li>
              { currentSO.map(estoque => (
              <li key={estoque.id}>
                <span>{estoque.codigo}</span>
                <span>{estoque.nome}</span>
                <span>{estoque.saldo}</span>
                <span>{estoque.saldoMin}</span>


                <span>
                  <button className='btn-edit'>edit</button>
                  <button className='btn-delete' onClick={() => handleDelete(estoque.id)}> <Link to='/ss'>excluir</Link></button>
                  <button className='btn-details'>
                  <Link to={`/ss/${estoque.id}`}>
                    ver + </Link> </button>
                </span>
              </li>
              ))}
               <Pagination
                    perPage={perPage}
                    totalProdutos={estoque.length}
                    paginate={paginate}
                />
            </ul>
            <div className="related">
              <ul className='listaCompras'>
                  <h2>Lista de Compras</h2>
              </ul>
              <ul className='listaEstoqueBaixo'>
                  <h2>Estoque Baixo</h2>
              </ul>
            </div>
           
          </div>
        
        </div>
      </div>
    </div>
  )
}

const Pagination = ({ perPage, totalEstoque, paginate }) => {
const pageNumbers = [];
  
for (let i = 1; i <= Math.ceil(totalEstoque / perPage); i++) {
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