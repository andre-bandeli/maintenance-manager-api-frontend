import './App.css';

import { Route, Routes, useLocation } from "react-router-dom"
import React, { useEffect } from 'react';
import Index from './pages/index/Index';
import Cadastro from './pages/cadastro/Cadastro';
import IndexLogin from './pages/login/Index';
import IndexHome from './pages/home/IndexHome';
import IndexSolicitacaoServico from './pages/SolicitacaoServico/IndexSolicitacaoServico'
import IndexUsuario from './pages/Usuario/IndexUsuario';
import IndexOrdemServico from './pages/OrdemServico/IndexOrdemServico';
import IndexFormularioOrdemServico from './pages/OrdemServico/forms/IndexFormularioOrdem'
import IndexFormularioEstoque from './pages/Estoque/forms/IndexFormularioEstoque'
import EstoqueSingle from './pages/Estoque/single/EstoqueSingle'
import IndexEstoque from './pages/Estoque/IndexEstoque';
import IndexMaquinas from './pages/Maquinas/IndexMaquinas';
import IndexFornecedor from './pages/Fornecedor/IndexFornecedor';
import IndexFormularioSolicitacao from './pages/SolicitacaoServico/forms/IndexFormularioSolicitacao';
import SolicitacaoSingle from './pages/SolicitacaoServico/single/SolicitacaoSingle'
import OrdemSingle from './pages/OrdemServico/single/OrdemSingle';

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
      <Route path="/new-produto" element={<IndexFormularioEstoque />} />
      <Route path="/ss/:id" element={<SolicitacaoSingle />} />
      <Route path="/os/:id" element={<OrdemSingle />} />
      <Route path="/estoque" element={<IndexEstoque />} />
      <Route path="/estoque/:id" element={<EstoqueSingle />} />
      <Route path="/fornecedor" element={<IndexFornecedor />} />
  </Routes>
  );
}

export default App;
