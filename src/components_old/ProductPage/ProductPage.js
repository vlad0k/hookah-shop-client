import React from 'react';
import styles from './ProductPage.module.css';

const ProductPage = ({brandName, name, logo, price, description}) => {
  return (
    <div className={styles.ProductPage}>
      <h3 className={styles.productHeader}>{brandName} {name}</h3>
      <div className={styles.productLogoWrapper}>
        <img className={styles.productLogo} src={logo} alt={name}/>
        <span className={styles.productPriceWrapper}>Price: <span className={styles.productPrice} >{price}</span> zl</span>
      </div>

      {description && <div className={styles.productDescriptionWrapper}>
          <h4>Описание: </h4>
          <p className={styles.productDescription}>
            {description}
          </p>
        </div>
      }
    </div>
  )
}

export default ProductPage;
