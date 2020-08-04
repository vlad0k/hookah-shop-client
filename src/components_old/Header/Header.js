import React from 'react';
import logoImage from '../../images/hs-pl.png';
import styles from './Header.module.css';
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <NavLink to="/">
        <div className={styles.logoContainer}>
          <img src={logoImage} alt='Hookah Shop' />
          <h1>Hookah Shop Poland</h1>
        </div>
      </NavLink>
      <div className={styles.categories}>
        <NavLink to="/hookah" activeClassName={styles.activeLink} className={styles.link}>
          <span>Кальяны</span>
        </NavLink>
        <NavLink to="/assectories" activeClassName={styles.activeLink} className={styles.link}>Аксессуары</NavLink>
      </div>
    </header>
  )
}

export default Header;
