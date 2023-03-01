import './App.css';

import { Route, Routes, useLocation } from "react-router-dom"
import React, { useEffect } from 'react';
import Index from './pages/index/Index';
import Cadastro from './pages/cadastro/Cadastro';
import IndexLogin from './pages/login/Index';
import IndexHome from './pages/home/IndexHome';
import IndexSolicitacaoServico from './pages/SolicitacaoServico/IndexSolicitacaoServico';
import IndexOrdemServico from './pages/OrdemServico/IndexOrdemServico';
import Estoque from './pages/Estoque/Estoque';
import IndexEstoque from './pages/Estoque/IndexEstoque';
import IndexMaquinas from './pages/Maquinas/IndexMaquinas';

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
      <Route path="/estoque" element={<IndexEstoque />} />
      <Route path="/maquinas" element={<IndexMaquinas />} />
  </Routes>
  );
}

export default App;
