import React, { useContext } from 'react';
import './ShopLogo.module.css';

import { LogoContext } from '../../context/LogoContext';

const ShopLogo = () => {

  const { logo }  = useContext(LogoContext);

  return (
    <div>
      <img src={ logo } alt='Hookah Shop Logo' />
    </div>
  )
}

export default ShopLogo;
