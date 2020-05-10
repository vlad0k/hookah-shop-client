import React from 'react';
import styles from './HookahPage.module.css';
import { Route, Link, useRouteMatch, useLocation } from "react-router-dom";
import Picker from '../Picker/Picker';
import BrandPage from './BrandPage/BrandPage';

import { graphql } from 'react-apollo';
import { getHookahBrandsQuery } from '../../queries/queries.js';

const HookahPage = (props) => {
  let match = useRouteMatch();
  const location = window.location.hostname;
  let data = props.data;
  
  return (
    <div className={styles.HookahPage}>

      <Route
        path='/hookah'
        exact
        render={() => (
          <div className={styles.linksContainer}>
            {
              data.hookahBrands && data.hookahBrands.map((b) => {
                return(
                  <Link key={b.id} to={`${match.url}/${b.url_name}`} className={"link"}>
                    <Picker logo={b.pictures[0] && `http://${location}:4000/picture/${b.pictures[0].name}`} name={b.name}/>
                  </Link>
                );
              })
            }
          </div>
        )}
      />

      {
        data.hookahBrands && data.hookahBrands.map((b) => {
          return(
            <Route
              path={`${match.url}/${b.url_name}`}
              render={() => <BrandPage id={b.id} />}
            />
          )
        })
      }




    </div>
  )
}

export default graphql(getHookahBrandsQuery)(HookahPage);
