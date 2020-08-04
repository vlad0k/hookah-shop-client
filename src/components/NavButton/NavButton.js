import React from 'react';
import style from './NavButton.module.css';

import { NavLink } from 'react-router-dom';

const NavButton = ({value, way}) => {
  return (
    <NavLink to={ way } className={style.link} activeClassName={style.active}>
      <span>{ value }</span>
    </NavLink>
  )
}

export default NavButton;
