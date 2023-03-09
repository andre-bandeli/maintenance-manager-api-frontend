
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import './navbar.scss'


const NavLinksMobile = () => {

    const [active, setActive] = useState('');
    const { pathname } = useLocation();
  
    useEffect(() => {
      setActive(pathname);
    }, [pathname]);

    return ( 
        <ul className="mob">
            <li>
                    <Link to="/home">Dashboard</Link>
                </li>
                <li>
                    <Link to="/ss">Solicitação</Link>
                </li>
                <li>
                    <Link to="/os">Ordens</Link>
                </li>
                <li>
                    <Link to="/estoque">Estoque</Link>
                </li>
                <li>
                    <Link to="/maquinas">Máquinas</Link>
                </li>
                <li>
                    <Link to="/fornecedor">Fornecedores</Link>
                </li>
                <li>
                    <Link to="/login">Financeiro</Link>
                </li>

                <li>
                    <Link to="/login">Manutentor</Link>
                </li>
    </ul>
     );
    
}
 
export default NavLinksMobile;