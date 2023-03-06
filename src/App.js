import './App.css';

import { Route, Routes, useLocation } from "react-router-dom"
import React, { useEffect } from 'react';
import Index from './pages/index/Index';
import Cadastro from './pages/cadastro/Cadastro';
import IndexLogin from './pages/login/Index';
import IndexHome from './pages/home/IndexHome';
import IndexSolicitacaoServico from './pages/SolicitacaoServico/IndexSolicitacaoServico'
import IndexUsuario from './pages/Usuario/IndexUsuario';
import IndexFormularioSolicitacao from './pages/SolicitacaoServico/IndexFormularioSolicitacao';
import SolicitacaoSingle from './pages/SolicitacaoServico/SolicitacaoSingle';
import IndexOrdemServico from './pages/OrdemServico/IndexOrdemServico';
import IndexFormularioOrdemServico from './pages/OrdemServico/IndexFormularioOrdem'
import IndexEstoque from './pages/Estoque/IndexEstoque';
import IndexMaquinas from './pages/Maquinas/IndexMaquinas';
import IndexFornecedor from './pages/Fornecedor/IndexFornecedor';

function App() {

  const location = useLocation();

  useEffect(() => {
    let title = '';
    switch (location.pathname) {
      case '/':
        title = 'Planejador de Manutenção Online';
        break;
      case '/login':
        title = 'Login';
        break;
      case '/cadastro':
        title = 'Cadastro';
        break;
      case '/ss':
        title = 'Solicitação de Serviço';
        break;
      case '/os':
        title = 'Ordem de Serviço';
        break;
      case '/estoque':
        title = 'Estoque e Produtos';
        break;
      case '/maquinas':
        title = 'Máquinas';
        break;
      case '/usuario':
        title = 'Área do Usuário';
        break;
      case '/new-solicitacao':
        title = 'Nova Solicitação de Serviço';
        break;
      case '/new-estoque':
        title = 'Adicionar Estoque';
        break;
      default:
        title = 'Planejador de Manutenção Online';
        break;
    }
    document.title = title;
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/login" element={<IndexLogin />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/home" element={<IndexHome />} />
      <Route path="/ss" element={<IndexSolicitacaoServico />} />
      <Route path="/os" element={<IndexOrdemServico />} />
      <Route path="/maquinas" element={<IndexMaquinas />} />
      <Route path="/usuario" element={<IndexUsuario />} />
      <Route path="/new-solicitacao" element={<IndexFormularioSolicitacao />} />
      <Route path="/new-ordem" element={<IndexFormularioOrdemServico />} />
      <Route path="/ss/:id" element={<SolicitacaoSingle />} />
      <Route path="/estoque" element={<IndexEstoque />} />
      <Route path="/fornecedor" element={<IndexFornecedor />} />
  </Routes>
  );
}

export default App;
