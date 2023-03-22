import React from 'react'
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import './responsive.css'
import './ordemServico.scss'


export default function OrdemServico() {

  const [ordemServico, setOrdemServico] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(10);

  useEffect(() => {
    fetch('http://localhost:8080/api/v1/ordem/list')
      .then(response => response.json())
      .then(data => setOrdemServico(data))
      .catch(error => console.error(error))
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:8080/api/v1/ordem/delete/${id}`, {
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
                <span className='span-mobile-tableb-remove'>Data Fechamento</span>
                <span className='span-mobile-tableb-remove'>Técnico Responsável</span>
                <span className='span-mobile-tableb-remove'>Observações</span>
                <span className='span-mobile-tableb-remove'>edit</span>
                <span className='span-mobile-tableb-remove'> excluir</span>
                <span className='span-mobile-first-remove'> ver</span>
              
              </li>
              { currentSO.map(ordem => (
              <Link to={`/os/${ordem.id}`}>
              <li key={ordem.id}>
                <span>{ordem.codigo}</span>
                <span>{ordem.maquina}</span>
                <span>{ordem.setor}</span>
                <span className='span-mobile-tableb-remove'>{ordem.nomeSolicitante}</span>
                <span className='span-mobile-first-remove'>{ordem.descricao}</span>
                <span>{ordem.dataSolicitacao}</span>
                <span>{ordem.is_urgente ? "Urgente" : "Não Urgente"}</span>
                <span className='span-mobile-tableb-remove'>{ordem.status}</span>
                <span className='span-mobile-tableb-remove'>{ordem.dataFechamento}</span>
                <span className='span-mobile-tableb-remove'>{ordem.tecnicoResponsavel}</span>
                <span className='span-mobile-tableb-remove'>{ordem.observacoes}</span>
                <span className='span-mobile-tableb-remove'><button className='btn-edit'> edit</button>
                </span>
                <span className='span-mobile-tableb-remove'>  <button className='btn-delete' onClick={() => handleDelete(ordem.id)}> 
                <Link to='/os'>excluir</Link></button></span>
                <span className='span-mobile-first-remove'>  <button className='btn-details'> 
                <Link to={`/os/${ordem.id}`}>detalhes</Link></button></span>
              </li></Link>
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