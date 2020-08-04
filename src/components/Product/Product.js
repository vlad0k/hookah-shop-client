import React, {useContext} from 'react';

import { ServerContext } from '../../context/ServerContext';
import style from './ProductPage.module.css';

import CloseButton from '../../components/CloseButton/CloseButton';


const Product = ( { product, setProduct } ) => {

  console.log(product);
  const [{ name, price, pictures, description }] = product;

  const { server } = useContext(ServerContext);

  console.log(name, price, pictures, description);
  return(
    <>
    <CloseButton  action={setProduct}/>
    <div className={ style['product-page'] }>

      <h1>{name}</h1>
      {<img src={`${server}/picture/${pictures[0].name}`} alt={name}/>}
      <span className={ style['product-page'] }>Цена: {price} zl</span>
      <p>{description}</p>
    </div>
    </>
  )
}

export default Product;
