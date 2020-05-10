import React from 'react';
import styles from './AssectoriesPage.module.css';

import AssectoryCategory from './AssectoryCategory/AssectoryCategory.js';

import { Route, Link, useRouteMatch, useLocation } from "react-router-dom";
import Picker from '../Picker/Picker';

import { useQuery } from '@apollo/react-hooks';
import { getAssectoryCategoriesQuery } from '../../queries/queries';

const AssectoriesPage = () => {

  const { loading, error, data } = useQuery(getAssectoryCategoriesQuery)

  let match = useRouteMatch();
  const location = window.location.hostname;
  console.log(data);

  return(
    <div className={styles.AssectoriesPage}>
    <Route
      path='/assectories'
      exact
      render={() => (
        <div className={styles.linksContainer}>
          {
            data && data.assectoryCategories.map((b) => {
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
      data && data.assectoryCategories.map((b) => {
        return(
          <Route
            path={`${match.url}/${b.url_name}`}
            render={() => <AssectoryCategory id={b.id} />}
          />
        )
      })
    }

    </div>
  )
}

export default AssectoriesPage;
