import React, { useState } from 'react';

import style from './ProductPage.module.css';

import CloseButton from '../../components/CloseButton/CloseButton';

import preloader from '../../common/25.gif'

import { storage } from '../../firebase'


const Product = ( { product, brandName, setProduct } ) => {

  const [mainPicture, setMainPicture] = useState(preloader)

  const [{ name, price, pictures, description }] = product;

  
  storage.ref(pictures[0].name).getDownloadURL().then(url => setMainPicture(url))

  return(
    <div>
    <CloseButton  action={setProduct} type='x'/>
    <div className={ style['product-page'] }>

    <h1>{brandName} {name}</h1>
      {<img style={mainPicture === preloader ? {width: 64, display: 'block'} : {}} src={mainPicture} alt={name}/>}
      <span className={ style['product-page'] }>Цена: {price} zl</span>
      <p>{description}</p>
    </div>
    </div>
  )
}

export default Product;
