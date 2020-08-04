import React, { useContext } from 'react';
import style from './ShopLogo.module.css';

import { LogoContext } from '../../context/LogoContext';

const ShopLogo = ({type}) => {

  const { logo }  = useContext(LogoContext);

  const logoClassName = type ? style[type] : style.logo;

  return (
    <div>
      <img className={logoClassName} src={ logo } alt='Hookah Shop Logo' />
    </div>
  )
}

export default ShopLogo;
