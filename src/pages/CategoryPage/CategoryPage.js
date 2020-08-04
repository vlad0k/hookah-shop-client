import React from 'react';
import { /*AnimatePresence,*/ motion } from 'framer-motion'
import {Switch, Route, useRouteMatch /*useLocation*/} from 'react-router-dom';

import ItemsList from '../../components/ItemsList/ItemsList';
import ItemPage from '../ItemPage/ItemPage';

const contentTransition = {
  hidden: {
    x: '-100vw',
    opacity: 0,
    transition: {
      duration: 0.8
    }
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8
    }
  }
}

const CategoryPage = ({ items, type, listItems, query }) => {
  // let location = useLocation();
  let { path } = useRouteMatch();
  return (
    <>
      <motion.div
        variants={contentTransition}
        initial='hidden'
        animate='visible'
        exit='hidden'
      >
          <Switch>




            <Route
              exact
              path={path}
              render={() => <ItemsList items={ items } />}
            />

            <Route path={`${path}/:url_name`}>
              <ItemPage
                items={items}
                query={query}
                type={type}
                listItems={listItems}
              />
            </Route>
          </Switch>


      </motion.div>




    </>
  )
}

export default CategoryPage;

// {
//   items.map( i => <Route
//     key={i.id}
//     path={`${path}/${i.url_name}`}
//     render={() => <div>axaxax</div>}
//   />)
// }
