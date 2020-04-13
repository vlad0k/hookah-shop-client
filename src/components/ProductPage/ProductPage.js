import React from 'react';
import styles from './ProductPage.module.css';

const ProductPage = ({name, logo, price}) => {
  return (
    <div>
      <h3 className={styles.productHeader}>{name}</h3>
      <img src={logo} alt={name}/>
      <span>Price: {price}</span>
      <p className={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </div>
  )
}

export default ProductPage;
