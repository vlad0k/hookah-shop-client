import React from 'react';
import './Header.module.css';

import LogoContextProvider from '../../context/LogoContext';
import Navbar from '../Navbar/Navbar';
import ShopLogo from '../ShopLogo/ShopLogo';

const Header = () => {

  return (
    <header>
      <LogoContextProvider>
        <ShopLogo />
      </LogoContextProvider>
      <Navbar />
    </header>
  )
}

export default Header;
