import React from 'react';
import styles from './Picker.module.css';

const Picker = ({logo, name, price}) => {
  return (
    <div className={styles.Picker}>
      <img className={styles.brandLogo} src={logo} alt='Alpha Hookah'/>
      <h3 className={styles.name}>{name}</h3>
      <span className={styles.price}>{price}</span>
    </div>
  )
}

export default Picker;
