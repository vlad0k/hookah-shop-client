import React from 'react';
import styles from './Navbar.module.css';

import NavButton from '../NavButton/NavButton';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <NavButton value='Кальяны' way='/hookah'/>
        </li>
        <li>
          <NavButton value='Аксессуары' way='/assectories'/>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;
