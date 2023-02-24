import './App.css';

import { Route, Routes, useLocation } from "react-router-dom"
import React, { useEffect } from 'react';
import Index from './pages/index/Index';
import Cadastro from './pages/cadastro/Cadastro';
import Home from './pages/home/Home';
import IndexLogin from './pages/login/Index';

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
      <Route path="/home" element={<Home />} />
  </Routes>
  );
}

export default App;
