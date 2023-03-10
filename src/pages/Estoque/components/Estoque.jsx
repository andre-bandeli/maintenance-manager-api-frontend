import React from 'react'
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

import './estoque.scss'


export default function Estoque() {

  const [estoque, setEstoque] = useState([]);
  const [listaCompra, setListaCompra] = useState([]);
  const [estoqueBaixo, setEstoqueBaixo] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(10);


  useEffect(() => {
    fetch('http://localhost:8080/api/v1/produto/list')
      .then(response => response.json())
      .then(data => setEstoque(data))
      .catch(error => console.error(error))
  }, []);

  useEffect(() => {
    fetch('http://localhost:8080/api/v1/produto/get/estoque-baixo')
      .then(response => response.json())
      .then(data => setEstoqueBaixo(data))
      .catch(error => console.error(error))
  }, []);

  useEffect(() => {
    fetch('http://localhost:8080/api/v1/compras/list')
      .then(response => response.json())
      .then(data => setListaCompra(data))
      .catch(error => console.error(error))
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:8080/api/v1/produto/remove/${id}`, {
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
                <Link to="/new-produto"> Adicionar Produto</Link>
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
                <span className='span-mobile-tableb-remove'>Editar</span>
                <span className='span-mobile-tableb-remove'>Entrada</span>
                <span className='span-mobile-tableb-remove'>Saída</span>
                <span className='span-mobile-tableb-remove'>Excluir</span>
              </li>
              { currentSO.map(estoque => (
                <Link to={`/estoque/${estoque.id}`}>
              <li key={estoque.id}>
                <span>{estoque.codigo}</span>
                <span>{estoque.nome}</span>
                <span>{estoque.saldo}</span>
                <span>{estoque.saldoMin}</span>


                <span className='span-mobile-tableb-remove'><button className='btn-edit'> edit</button>
                </span>
                <span className='span-mobile-first-remove'><button className='btn-entrada'> 
                <Link to={`/estoque/${estoque.id}`}>entrada</Link></button></span>
                <span className='span-mobile-first-remove'>  <button className='btn-saida'> 
                <Link to={`/estoque/${estoque.id}`}>saída</Link></button></span>
                <span className='span-mobile-tableb-remove'>  <button className='btn-delete' onClick={() => handleDelete(estoque.id)}> 
                <Link to='/estoque'>delete</Link></button></span>

                
                
          
                 
              </li></Link>
              ))}
               <Pagination
                    perPage={perPage}
                    totalProdutos={estoque.length}
                    paginate={paginate}
                />
            </ul>
            <div className="related">
              <ul className='listaCompras'>
                <div className='header-l'>
                  <h2>Lista de Compras</h2>
                </div>
                  

                  <ul>
                  <li className="header">
                    <span>Nome Produto</span>
                    <span>Quantidade</span>
                    <span>DeadLine</span>
                  </li>
                  { listaCompra.map(lista => (
                  <li key={lista.id}>
                    <span>{lista.nomeProduto}</span>
                    <span>{lista.quantidade}</span>
                    <span>{lista.deadline}</span>
                  </li>
              ))}
                  </ul>

                  <div className='btn-compras'>
                    <button className='btn-primary'>Adicionar</button>
                    <button className='btn-sucundary'>Ver lista completa</button>
                  </div>

                
              </ul>
              <ul className='listaEstoqueBaixo'>
                  <h2>Estoque Baixo</h2>

                  { estoqueBaixo.map(estoqueBaixo => (
                  <li key={estoqueBaixo.id}>
                    <span>{estoqueBaixo.nome}</span>
                    <span>{estoqueBaixo.saldo}</span>
                  </li>
              ))}
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