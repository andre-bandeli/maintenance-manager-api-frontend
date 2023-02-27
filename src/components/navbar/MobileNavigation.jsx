import {CgClose, CgMenu} from 'react-icons/cg'
import { useState } from 'react';
import NavLinksMobile from './NavLinksMobile';

const MobileNavigation = () => {

    const hamburguerIcon = <CgMenu className='Hamburguer'size='40px' color='black' onClick={() => setOpen(!open)}/>
    const closeIcon = <CgClose className='Hamburguer'size='30px' color='black' onClick={() => setOpen(!open)}/>

    const [open, setOpen] = useState(false);
    return (  
        <nav className="MobileNavigation">
            {open ? closeIcon : hamburguerIcon}

            {open && <NavLinksMobile/>}
        </nav>
     );
}
 
export default MobileNavigation;