import React from 'react'
import './home.scss'
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import seta from './seta.png'

export default function Home() {

  const [solicitacaoServico, setSolicitacaoServico] = useState([]);
  const [ordemServico, setOrdemServico] = useState([]);
  const [ordemServicoClosed, setOrdemServicoClosed] = useState([]);
  const [ordemServicoEmAndamento, setOrdemServicoEmAndamento] = useState([]);
  const [listaCompras, setListaCompras] = useState([]);
  const [estoqueBaixo, setEstoqueBaixo] = useState([]);
  const [contadorEstoqueBaixo, setContadorEstoqueBaixo] = useState(0);
  const [contador_ordem, set_contador_ordem] = useState(0);
  const [contador_solicitacao, set_contador_solicitacao] = useState(0);
  const [contador_ordem_closed, set_contador_ordem_closed] = useState(0);
  const [contador_ordem_processando, set_contador_ordem_processando] = useState(0);
  const [contador_lista_compras, set_contador_lista_compras] = useState(0);


  useEffect(() => {
    fetch('http://localhost:8080/api/v1/compras/list')
      .then(response => response.json())
      .then(data => {
        setListaCompras(data);
        set_contador_lista_compras(0);
      })
      .catch(error => console.error(error))
  }, []);

  useEffect(() => {
    fetch('http://localhost:8080/api/v1/produto/get/estoque-baixo')
      .then(response => response.json())
      .then(data => {
        setEstoqueBaixo(data);
        setContadorEstoqueBaixo(0);
      })
      .catch(error => console.error(error))
  }, []);

  useEffect(() => {
    fetch('http://localhost:8080/api/v1/solicitacao/list')
      .then(response => response.json())
      .then(data => {
        setSolicitacaoServico(data);
        set_contador_solicitacao(0);
      })
      .catch(error => console.error(error))
  }, []);

  useEffect(() => {
    fetch('http://localhost:8080/api/v1/ordem/list')
      .then(response => response.json())
      .then(data => {
        setOrdemServico(data);
        set_contador_ordem(0);
      })
      .catch(error => console.error(error))
  }, []);

  useEffect(() => {
    fetch('http://localhost:8080/api/v1/ordem/list/closed')
      .then(response => response.json())
      .then(data => {
        setOrdemServicoClosed(data);
        set_contador_ordem_closed(0);
      })
      .catch(error => console.error(error))
  }, []);

  useEffect(() => {
    fetch('http://localhost:8080/api/v1/ordem/list/processando')
      .then(response => response.json())
      .then(data => {
        setOrdemServicoEmAndamento(data);
        set_contador_ordem_processando(0);
      })
      .catch(error => console.error(error))
  }, []);

  useEffect(() => {
    const intervalE = setInterval(() => {
      setContadorEstoqueBaixo(prevCount => {
        if (prevCount >= estoqueBaixo.length) {
          clearInterval(intervalE);
          return estoqueBaixo.length;
        } else {
          return prevCount + 1;
        }
      });
    }, 200);

    return () => clearInterval(intervalE);
  }, [estoqueBaixo]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      set_contador_ordem(prevCount => {
        if (prevCount >= ordemServico.length) {
          clearInterval(intervalId);
          return ordemServico.length;
        } else {
          return prevCount + 1;
        }
      });
    }, 200);

    return () => clearInterval(intervalId);
  }, [ordemServico]);

  useEffect(() => {
    const intervalIdSO = setInterval(() => {
      set_contador_solicitacao(prevCount => {
        if (prevCount >= solicitacaoServico.length) {
          clearInterval(intervalIdSO);
          return solicitacaoServico.length;
        } else {
          return prevCount + 1;
        }
      });
    }, 200);

    return () => clearInterval(intervalIdSO);
  }, [solicitacaoServico]);

  

  useEffect(() => {
    const intervalIdOSC = setInterval(() => {
      set_contador_ordem_closed(prevCount => {
        if (prevCount >= ordemServicoClosed.length) {
          clearInterval(intervalIdOSC);
          return ordemServicoClosed.length;
        } else {
          return prevCount + 1;
        }
      });
    }, 200);

    return () => clearInterval(intervalIdOSC);
  }, [ordemServicoClosed]);

  useEffect(() => {
    const intervalIdOSC = setInterval(() => {
      set_contador_ordem_processando(prevCount => {
        if (prevCount >= ordemServicoEmAndamento.length) {
          clearInterval(intervalIdOSC);
          return ordemServicoEmAndamento.length;
        } else {
          return prevCount + 1;
        }
      });
    }, 200);

    return () => clearInterval(intervalIdOSC);
  }, [ordemServicoEmAndamento]);

  useEffect(() => {
    const intervalIdOSC = setInterval(() => {
      set_contador_lista_compras(prevCount => {
        if (prevCount >= listaCompras.length) {
          clearInterval(intervalIdOSC);
          return listaCompras.length;
        } else {
          return prevCount + 1;
        }
      });
    }, 200);

    return () => clearInterval(intervalIdOSC);
  }, [listaCompras]);

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

  const handleDeleteOrdem = (id) => {
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


  return (
    <div className='home'>

      <div className="containerHome">
          <h1>Dashboard de Manutenção</h1>
          <div className="dash">
           
            <div className="bx-500">
              <h2>{contador_solicitacao}</h2>
              <img src={seta} alt="" />
              <h3>Solicitações de Serviço Abertas</h3>
            </div>
            <div className="bx-500">
              <h2>{contador_ordem_closed}</h2>
              <img src={seta} alt="" />
              <h3>Ordens de Serviço Finalizadas</h3>
            </div>
            <div className="bx-500">
              <h2>{contador_ordem_processando}</h2>
              <img src={seta} alt="" />
              <h3>Solicitações de Serviço Em Andamento</h3>
            </div>
            <div className="bx-500">
              <div className="container-danger">
                <div className='content'>
                    <h2>{ordemServico.length}</h2>
                    <img src={seta} alt="" />
                    <h3>Máquinas Paradas</h3>
                </div>
              </div>
            </div>
            <div className="bx-500">
            <div className="container-danger">
                <div className='content'>
                    <h2>{estoqueBaixo.length}</h2>
                    <img src={seta} alt="" />
                    <h3>Produtos com estoque baixo</h3>
                </div>
              </div>
            </div>
            <div className="bx-500">
            <div className="container-danger">
                <div className='content'>
                    <h2>{contador_lista_compras}</h2>
                    <img src={seta} alt="" />
                    <h3>Itens na Lista de Compras</h3>
                </div>
              </div>
            </div>
            <div className="bx-500">
              <div className="content">
                <h2> <span>R$</span> 15.000,00</h2>
                <h4>Saldo atual para gastos com manutenção</h4>
              </div>
             
            </div>
            <div className="bx-500">
            <div className="content">
                <h2> 72h</h2>
                <h4>Backlog Total de Manutenção Pendente</h4>
              </div>
            </div>
            <div className="bx-500">
              <div className="content">
                  <h2> <span>R$</span> 15.000,00</h2>
                  <h4>Saldo atual para Manutenção</h4>
                </div>
            </div>

            <div className="bx-12">
              <h2>Últimas Solicitações de Serviço</h2>

              <div className="containerList">
              <ul>
              <li className="header">
                <span>Código</span>
                <span>Máquina</span>
                <span>Setor</span>
                <span className='span-mobile-tableb-remove'>Solicitante</span>
                <span className='span-mobile-tableb-remove'>Descrição</span>
                <span className='span-mobile-tableb-remove'>Data de abertura</span>
                <span>Prioridade</span>
                <span className='span-mobile-tableb-remove'>Status</span>
                <span className='span-mobile-tableb-remove'> <h3>edit</h3> <h3>excluir</h3> <h3>ver +</h3></span>
              </li>
              
              { solicitacaoServico.map(solicitacao => (
                <Link to={`/ss/${solicitacao.id}`}>
              <li key={solicitacao.id}>
                <span>{solicitacao.codigo}</span>
                <span>{solicitacao.maquina}</span>
                <span>{solicitacao.setor}</span>
                <span className='span-mobile-tableb-remove'>{solicitacao.nomeSolicitante}</span>
                <span className='span-mobile-tableb-remove'>{solicitacao.descricao}</span>
                <span className='span-mobile-tableb-remove'>{solicitacao.dataSolicitacao}</span>
                <span>{solicitacao.is_urgente ? "Urgente" : "Não Urgente"}</span>
                <span className='span-mobile-tableb-remove'>{solicitacao.status}</span>
                <span className='span-mobile-tableb-remove'>
                  <button className='btn-edit'>edit</button>
                  <button className='btn-delete' onClick={() => handleDelete(solicitacao.id)} > <Link to='/home'>excluir</Link></button>
                  <button className='btn-details'>
                  <Link to={`/ss/${solicitacao.id}`}>
                    ver + </Link> </button>
                </span>
              </li></Link>
              ))}
            
            </ul>
              </div>

            </div>
            <div className="bx-12">
              <h2>Últimas Ordens de Serviço</h2>
              <div className="containerList">
              <ul>
              <li className="header">
                <span>Código</span>
                <span>Máquina</span>
                <span>Setor</span>
                <span className='span-mobile-tableb-remove'>Solicitante</span>
                <span className='span-mobile-tableb-remove'>Descrição</span>
                <span className='span-mobile-tableb-remove'>Data de abertura</span>
                <span>Prioridade</span>
                <span className='span-mobile-tableb-remove'>Status</span>
                <span className='span-mobile-tableb-remove'> <h3>edit</h3> <h3>excluir</h3> <h3>ver +</h3></span>
              </li>
              { ordemServico.map(ordem => (
                <Link to={`/os/${ordem.id}`}>
              <li key={ordem.id}>
                <span>{ordem.codigo}</span>
                <span>{ordem.maquina}</span>
                <span>{ordem.setor}</span>
                <span className='span-mobile-tableb-remove'>{ordem.nomeSolicitante}</span>
                <span className='span-mobile-tableb-remove'>{ordem.descricao}</span>
                <span className='span-mobile-tableb-remove'>{ordem.dataSolicitacao}</span>
                <span>{ordem.is_urgente ? "Urgente" : "Não Urgente"}</span>
                <span className='span-mobile-tableb-remove'>{ordem.status}</span>
                <span className='span-mobile-tableb-remove'>
                  <button className='btn-edit'>edit</button>
                  <button className='btn-delete' onClick={() => handleDeleteOrdem(ordem.id)} > <Link to='/home'>excluir</Link></button>
                  <button className='btn-details'>
                  <Link to={`/os/${ordem.id}`}>
                    ver + </Link> </button>
                </span>
              </li></Link>
              ))}
            
            </ul>
              </div>

  
            </div>
             
          </div>
      </div>
        
    </div>
  )
}
