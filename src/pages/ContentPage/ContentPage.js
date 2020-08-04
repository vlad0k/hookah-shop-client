import React from 'react';

import CategoryPage from '../CategoryPage/CategoryPage';

import { Route, Switch/*, useLocation */ } from 'react-router-dom';

import { useQuery } from '@apollo/react-hooks';

// import { AnimatePresence } from 'framer-motion'

import {
  getAssectoryCategoriesQuery,
  getHookahBrandsQuery,
  getAssectoryCategoryQuery,
  getHookahBrandQuery
} from '../../queries/queries';

// import ItemsList from '../../components/ItemsList/ItemsList';
import style from './ContentPage.module.css';

const ContentPage = () => {
  // const location = useLocation()
  const hookahBrandsList = useQuery(getHookahBrandsQuery).data;
  const assectoriesList = useQuery(getAssectoryCategoriesQuery).data;


  return (

    <div className={ style.content }>

      <Switch >
            <Route
              path='/hookah'
              exact
              render={() => hookahBrandsList &&  (
                  <CategoryPage items={ hookahBrandsList.hookahBrands } type="hookahBrand" listItems="hookahs" query={getHookahBrandQuery} />
              )}
            />

            <Route
              path='/assectories'
              exact
              render={() => assectoriesList && (
                  <CategoryPage items={ assectoriesList.assectoryCategories } type="assectoryCategory" listItems="items" query={getAssectoryCategoryQuery}/>
              )}
            />

      </Switch>

      {
        // {
        //   hookahBrandsList && hookahBrandsList.hookahBrands.map( b => <Route key={b.id} path={`/hookah/${b.url_name}`} render={ () => <ItemPage id={b.id} query={getHookahBrandQuery} type="hookahBrand" listItems="hookahs" /> } />)
        // }
        //
        // {
        //   assectoriesList && assectoriesList.assectoryCategories.map( b => <Route key={b.id} path={`/assectories/${b.url_name}`} render={ () => <ItemPage id={b.id} query={getAssectoryCategoryQuery} type="assectoryCategory" listItems="items" /> } />)
        // }
      }

    </div>

  )
}

export default ContentPage;
