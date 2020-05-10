import React from 'react';
import styles from './AssectoryCategory.module.css';
import { Route, Link, useRouteMatch } from "react-router-dom";
import Picker from '../../Picker/Picker';
import ProductPage from '../../ProductPage/ProductPage.js';

import { graphql } from 'react-apollo';
import { getAssectoryCategoryQuery } from '../../../queries/queries.js';

const BrandPage = (props) => {
  let match = useRouteMatch();

  let data = props.data.assectoryCategory;
  console.log(data);
  const location = window.location.hostname;

  return (
    <>
      <Route
        path={match.url}
        exact
        render={() => (
          <div className={styles.BrandPage}>

            {data && <h2 className={styles.brandHeader}>{data.name}</h2>}
            <div className={styles.brandDescription}>
              {data && <img className={styles.logo} src={`http://${location}:4000/picture/${data.pictures[0].name}`} alt={data.name}/>}
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>

            <div className={styles.hookahList}>
              {
                data && data.items.map((h) =>(
                  <Link to={`${match.url}/${h.url_name}`}>
                    <Picker name={h.name} price={h.price} logo={`http://${location}:4000/picture/${h.pictures[0].name}`}/>
                  </Link>
                ))
              }
            </div>
          </div>
        )}
      />

      {
        data && data.items.map((h) =>{
          return (
            <Route
              path={`${match.url}/${h.url_name}`}
              render={() => <ProductPage name={h.name} logo={`http://${location}:4000/picture/${h.pictures[0].name}`} price={h.price}/>}
            />
          )
        })
      }
    </>
  )
}

export default graphql(getAssectoryCategoryQuery, {
  options: (props) => {
    return {
      variables: {
        id: props.id
      }
    }
  }
})(BrandPage);
