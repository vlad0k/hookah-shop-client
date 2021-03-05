import React from 'react';
import style from './Header.module.css';


import LogoContextProvider from '../../context/LogoContext';
import Navbar from '../Navbar/NavbarContainer'
import ShopLogo from '../ShopLogo/ShopLogo';
import { NavLink } from 'react-router-dom';
import { IoIosSettings, IoIosAdd, IoIosRemoveCircleOutline, IoIosBasket } from 'react-icons/io'

const Header = ({ category, displayCart, setCartDisplay }) => {
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
            <div onClick={() => setCartDisplay(true)}><IoIosBasket size='50px' color=' #1565c0'/></div>
            <div className={style.admin}>
              <IoIosSettings size='50px' color=' #1565c0'/>
              <ul>
                <li><NavLink to='/add'><div><IoIosAdd size='50px' color=' #1565c0'/></div> <div>Добавить</div></NavLink></li>
                <li><NavLink to='/delete'><div><IoIosRemoveCircleOutline size='50px' color=' #1565c0'/></div> <div>Удалить</div></NavLink></li>
              </ul>
            </div>
          </div>
        }
      </header>
      <div className={style.line}></div>
    </div>
  )
}

export default Header;
