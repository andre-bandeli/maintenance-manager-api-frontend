
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';


const NavLinksMobile = () => {

    const [active, setActive] = useState('');
    const { pathname } = useLocation();
  
    useEffect(() => {
      setActive(pathname);
    }, [pathname]);

    return ( 
        <ul className="mob">
            <li  className={active === '/' ? 'active' : ''}>

                <Link to="/">Home</Link>
            </li>
            <li className={active === '/sobre' ? 'active' : ''}>
                <Link to="/motocicletas">Sobre o Planejador</Link>
            </li>
            <li className={active === '/blog' ? 'active' : ''}>
                <Link to="/motocicletas">Conheça Nosso Blog</Link>
            </li>
            <li className={active === '/guia' ? 'active' : ''}>
                <Link to="/motocicletas">Como Utilizar o Planejador</Link>
            </li>
            <li className={active === '/cadastro' ? 'active' : ''}>
                <Link to="/motocicletas">Cadastre sua Empresa</Link>
            </li>
            <li className={active === '/contatos' ? 'active' : ''}>
                <Link to="/motocicletas">Conheça Nossas Redes</Link>
            </li>
            <li className={active === '/contatos' ? 'active' : ''}>
                <Link to="/motocicletas">Sobre a API</Link>
            </li>
    </ul>
     );
    
}
 
export default NavLinksMobile;