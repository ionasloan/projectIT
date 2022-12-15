import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import './navbar.css';
import {Button} from './button';


function Navbar() {
    const[click, setClick] = useState(false);
    const[button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu  = () => setClick(false);
 
    const showButton = () => {
        if (window.innerWidth <= 960) {
          setButton(false);
        } else {
          setButton(true);
        }
      };


      useEffect(() => {
        showButton();
      }, []);

    window.addEventListener('resize', showButton);



    return (
    <>
       <nav className='navbar'>
        <div className='navbar-container'>
            {/* Logo Area */}
            <Link to="/" className="navbar-logo" onClick="{closeMobileMenu}">
                Glasgow Film Festival
            </Link>  
            
            {/* Hamburger Area */}
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
            </div>

            {/* Nav items */}
            <ul className={click ? 'nav-menu active' : 'nav-menu' }> 
            <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>Home</Link>
            </li>
            <li className='nav-item'>
            <Link to='/about' className='nav-links' onClick={closeMobileMenu}>About</Link>
            </li>
            <li className='nav-item'>
            <Link to='/locations' className='nav-links' onClick={closeMobileMenu}>Locations</Link>
            </li>
            
            <li className='nav-item'>
            <Link to='/login' className='nav-links' onClick={closeMobileMenu}>Log In</Link>
            </li>
            </ul>
            {button && <Button buttonStyle='btn--outline' to='/events'>View All Events</Button>}
        </div>
       </nav>
    </>
  )
}

export default Navbar