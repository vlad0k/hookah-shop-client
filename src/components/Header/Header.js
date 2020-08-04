import React from 'react';
import style from './Header.module.css';


import LogoContextProvider from '../../context/LogoContext';
import Navbar from '../Navbar/NavbarContainer'
import ShopLogo from '../ShopLogo/ShopLogo';

const Header = ({ category }) => {
  const headerStyle = !category ? style['entry'] : style['ordinary']
  return (
    <div>
      <header className={headerStyle}>
        <LogoContextProvider>
          <div className={style['nb-logo']} >
            <ShopLogo type={!category ? 'large' : undefined} transition={true}/>
            <p className={style.p}>Hookah Shop PL</p>
          </div>
        </LogoContextProvider>
          <Navbar />

      </header>
      <div className={style.line}></div>
    </div>
  )
}

export default Header;
