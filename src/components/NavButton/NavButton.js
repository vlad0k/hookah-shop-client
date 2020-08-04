import React from 'react';
import style from './NavButton.module.css';

const NavButton = ({value, way, active}) => {
  return (
    <div className={style.link + ' ' + (active && style.active)}>
      <span>{ value }</span>
    </div>
  )
}

export default NavButton;
