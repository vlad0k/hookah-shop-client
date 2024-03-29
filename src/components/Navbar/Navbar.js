import React from 'react';
import styles from './Navbar.module.css';

import NavButton from '../NavButton/NavButton';

const Navbar = ( { setCategory, category }) => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li onClick={ () => setCategory('hookah') }>
          <NavButton active={category === 'hookah'} value='Кальяны' />
        </li>
        <li onClick={ () => setCategory('assectories') }>
          <NavButton active={category === 'assectories'} value='Аксессуары' way='/assectories'/>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;
