import React from 'react';
import styles from './Content.module.css'

import CategoryList from '../CategoryList/CategoryList';
import BrandsList from '../BrandsList/BrandsListContainer';
import Product from '../Product/ProductContainer';




const Content = ({category, brand, brandName, setBrand, getAssectoryCategoryQuery, getHookahBrandQuery, product}) => {

  return (
    <div className={styles.content}>

      {/* for mobile */}
      {(brand && !product) && <div className={styles.mobileBrandName}>{brandName}</div>}


      <div className={(brand && styles.col) + ' ' + styles.categoryList}>
        <CategoryList category={category} setBrand={setBrand} className={styles.categoryList}/>
      </div>
      {brand && <div className={(product && styles.col) + ' ' + styles.brandsList}>
        <BrandsList query={category === 'hookah' ? getHookahBrandQuery : getAssectoryCategoryQuery }/>
        </div>
      }
      {product && <div className={styles.productCard}> 
          <Product />
        </div>
      }
      
    </div>
  )
}

export default Content;


// <div className={className}>
//   <div className={styles.col1}>
//     {category && <CategoryList category={category} setBrand={setBrand} className={styles.categoryList}/>}
//   </div>
//   { brand && <div className={ product && styles.col2}>
//     <BrandsList query={category === 'hookah' ? getHookahBrandQuery : getAssectoryCategoryQuery }/>
//   </div>}
//   { product && <div className={styles.col3}>
//     <Product />
//   </div>}
// </div>
