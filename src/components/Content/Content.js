import React from 'react';
import styles from './Content.module.css'

import CategoryList from '../CategoryList/CategoryList';
import BrandsList from '../BrandsList/BrandsListContainer';
import Product from '../Product/ProductContainer';



const Content = ({category, brand, setBrand, getAssectoryCategoryQuery, getHookahBrandQuery, product}) => {
  const className = styles.Content + ' ' + (category && styles['one-row']) + ' ' + (brand && styles['two-rows'] + ' ' + (product && styles['three-rows']))
  return (

      <div className={className}>
        <div className={brand && styles.brands}>
          <CategoryList category={category} setBrand={setBrand}/>
        </div>
        <div className={ product && styles.brands}>
          {brand  && <BrandsList query={category === 'hookah' ? getHookahBrandQuery : getAssectoryCategoryQuery }/>}
        </div>
        <div>
          {product &&  <Product />}
        </div>
      </div>

  )
}

export default Content;
