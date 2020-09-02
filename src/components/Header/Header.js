import React from 'react';
import style from './Header.module.css';


import LogoContextProvider from '../../context/LogoContext';
import Navbar from '../Navbar/NavbarContainer'
import ShopLogo from '../ShopLogo/ShopLogo';
import { NavLink } from 'react-router-dom';
import { IoIosSettings, IoIosAdd, IoIosRemoveCircleOutline } from 'react-icons/io'

const Header = ({ category }) => {
  const headerStyle = !category ? style['entry'] : style['ordinary']
  return (
    <div>
      <header className={headerStyle}>
        <LogoContextProvider>
          <div className={style['nb-logo']} >
            <ShopLogo type={!category ? 'large' : undefined} transition={true}/>
            <p className={style.p}>Hookah Shop</p>
          </div>
        </LogoContextProvider>
        
        <Navbar />

        {headerStyle === style['ordinary'] && <div className={style.adminWrapper}>
            <ul className={style.admin}>
              <li><IoIosSettings size='50px' color=' #1565c0'/></li>
              <li><NavLink to='/add'><div><IoIosAdd size='50px' color=' #1565c0'/></div> <div>Добавить</div></NavLink></li>
              <li><NavLink to='/delete'><div><IoIosRemoveCircleOutline size='50px' color=' #1565c0'/></div> <div>Удалить</div></NavLink></li>
            </ul>
          </div>
        }
      </header>
      <div className={style.line}></div>
    </div>
  )
}

export default Header;
