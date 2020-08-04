import React from 'react';

import { useQuery } from '@apollo/react-hooks';
// import { useRouteMatch, Route, useLocation } from 'react-router-dom';
import {useParams} from 'react-router-dom';

import ItemsList from '../../components/ItemsList/ItemsList';
// import ProductPage from '../ProductPage/ProductPage';
import style from './ItemPage.module.css';

const ItemPage = ({ query, items, type, listItems }) => {

  let {url_name} = useParams();

  const {id} = items.filter( i => (i.url_name === url_name))[0]

  const { loading, data } = useQuery(query, { variables: { id }});
  let products;



  if (loading)
    return <div>Loading...</div>
   else
    products = data[type][listItems]

  return (
    <>
      <div className={style["item-page"]}>
        <h1>{data[type].name}dsfs</h1>
        {
          // <ItemDescription />
        }
        <ItemsList items={products} />
      </div>
    </>
  );
}

export default ItemPage;


// const ItemPage = ({ id, type, listItems, query }) => {
//   const location = useLocation();
//    const { loading, data } = useQuery(query, { variables: { id }});
//
//    const { path } = useRouteMatch();
//    let products = null
//
//    if (loading)
//     return null
//    else
//     products = data[type][listItems]
//
//
//    return (
//      <>
//
//           <Route path={path} exact render={() =>(
//             <div className={style["item-page"]}>
//             <h1>{data[type].name}</h1>
//             {
//               // <ItemDescription />
//             }
//             <ItemsList items={products} />
//           </div>
//         )} />
//         {
//           products.map((p) => (
//               <Route path={`${path}/${p.url_name}`} render={() => <ProductPage product={p}/>} />
//           ))
//         }
//     </>
//   )
// }
