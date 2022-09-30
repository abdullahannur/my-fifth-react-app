import React from 'react';
import './Header.css' ;
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
       <nav className='Header'>
        <img src={logo} alt="" />
        <div className='header-link'>
            <a href="/home">Home</a>
            <a href="/shop">Shop</a>
            <a href="/inventory">Inventory</a>
            <a href="/Blog">Blog</a>

        </div>
       </nav>
    );
};

export default Header;