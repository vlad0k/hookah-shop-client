import React, {useContext} from 'react';

import { ServerContext } from '../../context/ServerContext';
import style from './ProductPage.module.css';

import { useRouteMatch } from 'react-router-dom';
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs';

const ProductPage = ( { product } ) => {

  const { name, price, pictures, description } = product;

  const { server } = useContext(ServerContext);

  const { path } = useRouteMatch();
  return(
    <div className={ style['product-page'] }>
      <BreadCrumbs path={path}/>
      <h1>{name}</h1>
      <img src={`${server}/picture/${pictures[0].name}`} alt={name}/>
      <span className={ style['product-page'] }>Цена: {price} zl</span>
      <p>{description}</p>
    </div>
  )
}

export default ProductPage;
